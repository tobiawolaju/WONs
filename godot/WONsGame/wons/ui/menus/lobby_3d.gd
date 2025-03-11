extends Node3D

# Camera orbit variables
@export var rotation_speed := 0.5
@export var orbit_distance := 2.5
@export var rotation_speed_horizontal := 5.0  # Speed of automatic horizontal rotation
var vertical_angle := 0.0
var horizontal_angle := 0.0

# Nodes
@onready var camera := $Camera3D
var is_tracking := false

func _ready() -> void:
	Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE) # Show the mouse pointer

func _unhandled_input(event: InputEvent) -> void:
	if event is InputEventMouseButton:
		if event.button_index == MOUSE_BUTTON_LEFT:
			is_tracking = event.pressed # Start tracking on mouse press

func _process(delta: float) -> void:
	if is_tracking:
		_handle_camera_rotation(delta)
	else:
		_rotate_camera_smoothly(delta)

func _handle_camera_rotation(delta: float) -> void:
	# Handle camera rotation based on mouse movement
	var mouse_delta := Input.get_last_mouse_velocity() * delta
	horizontal_angle -= mouse_delta.x * rotation_speed
	vertical_angle += mouse_delta.y * rotation_speed  # Fix the inversion here
	vertical_angle = clamp(vertical_angle, -75, 75) # Prevent camera from flipping

	# Update the camera's position and rotation
	_update_camera_position()

# Function to smoothly rotate the camera around the target
func _rotate_camera_smoothly(delta: float) -> void:
	# Slowly rotate the camera around the target on the horizontal axis
	horizontal_angle += rotation_speed_horizontal * delta  # Rotate to the right slowly
	if horizontal_angle > 360:
		horizontal_angle -= 360  # Reset the angle to prevent overflow

	# Update the camera's position and rotation
	_update_camera_position()

# Update camera position and make it look at the target
func _update_camera_position() -> void:
	var orbit_offset := Vector3(
		orbit_distance * cos(deg_to_rad(vertical_angle)) * sin(deg_to_rad(horizontal_angle)),
		orbit_distance * sin(deg_to_rad(vertical_angle)),
		orbit_distance * cos(deg_to_rad(vertical_angle)) * cos(deg_to_rad(horizontal_angle))
	)

	camera.global_position = global_transform.origin + orbit_offset
	camera.look_at(global_transform.origin)
