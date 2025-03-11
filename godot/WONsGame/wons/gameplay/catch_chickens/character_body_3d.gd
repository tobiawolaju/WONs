extends CharacterBody3D

# Movement constants
const SPEED = 3.0
const JUMP_VELOCITY = 5.0
const GRAVITY = Vector3.DOWN * 9.8  # Define gravity explicitly

# Camera orbit variables
var rotation_speed := 0.9
var azimuth := 0.0
var elevation := deg_to_rad(50)
const MIN_ELEVATION := deg_to_rad(15)
const MAX_ELEVATION := deg_to_rad(100)

# Camera distance variables
var camera_distance := 5.0  # Default camera distance
const CAMERA_DISTANCE_STEP := 1.0  # Step for adjusting the camera distance
const MIN_CAMERA_DISTANCE := 2.0  # Minimum camera distance
const MAX_CAMERA_DISTANCE := 10.0  # Maximum camera distance
const CAMERA_LERP_SPEED := 2.0  # Speed for interpolating camera distance

# Swipe detection
var swipe_start_position := Vector2()
var swipe_threshold := 100.0

# Track airborne state
var is_airborne := false

# Manual adjustment flag
var is_adjusting_camera := false

# Nodes
@onready var camera := $Camera3D
@onready var mesh_instance := $MeshInstance3D
@onready var anim_idle := $idle
@onready var anim_jump := $jump
@onready var anim_running := $running

# Jump timing
var jump_duration := 0.0

func _ready() -> void:
	update_camera_position()

func _input(event: InputEvent) -> void:
	if event is InputEventMouseMotion and Input.is_mouse_button_pressed(MOUSE_BUTTON_LEFT):
		azimuth -= event.relative.x * rotation_speed * 0.01
		elevation = clamp(elevation + event.relative.y * rotation_speed * 0.01, MIN_ELEVATION, MAX_ELEVATION)
		update_camera_position()
	elif event is InputEventScreenTouch and event.pressed:
		swipe_start_position = event.position
	elif event is InputEventScreenDrag:
		var swipe_direction = event.position - swipe_start_position
		if swipe_direction.y < -swipe_threshold:  # Swipe up
			_jump()
		elif swipe_direction.y > swipe_threshold:  # Swipe down
			print("slide")
	elif event is InputEventKey and event.pressed:
		if event.keycode == KEY_SPACE:  # Jump with spacebar
			_jump()
		elif event.keycode == KEY_P:  # Increase camera distance with P
			is_adjusting_camera = true  # Pause automatic adjustment
			camera_distance = clamp(camera_distance + CAMERA_DISTANCE_STEP, MIN_CAMERA_DISTANCE, MAX_CAMERA_DISTANCE)
			update_camera_position()
		elif event.keycode == KEY_S:  # Decrease camera distance with S
			is_adjusting_camera = true  # Pause automatic adjustment
			camera_distance = clamp(camera_distance - CAMERA_DISTANCE_STEP, MIN_CAMERA_DISTANCE, MAX_CAMERA_DISTANCE)
			update_camera_position()
	elif event is InputEventKey and not event.pressed:
		if event.keycode == KEY_P or event.keycode == KEY_S:
			is_adjusting_camera = false  # Resume automatic adjustment

func _physics_process(delta: float) -> void:
	if not is_on_floor():
		velocity += GRAVITY * delta
		if not is_airborne:
			is_airborne = true
			calculate_jump_duration()
			play_scaled_animation("jump", jump_duration)
	else:
		if is_airborne:
			is_airborne = false
		var input_dir := Input.get_vector("ui_left", "ui_right", "ui_down", "ui_up")
		if input_dir.length() > 0:
			apply_movement(input_dir)
			play_animation("running")
			# Gradually increase camera distance to MAX_CAMERA_DISTANCE if not manually adjusting
			if not is_adjusting_camera:
				camera_distance = lerp(camera_distance, MAX_CAMERA_DISTANCE, CAMERA_LERP_SPEED * delta)
		else:
			play_animation("idle")
			velocity.x = move_toward(velocity.x, 0, SPEED)
			velocity.z = move_toward(velocity.z, 0, SPEED)
			# Gradually reduce camera distance to MIN_CAMERA_DISTANCE if not manually adjusting
			if not is_adjusting_camera:
				camera_distance = lerp(camera_distance, MIN_CAMERA_DISTANCE, CAMERA_LERP_SPEED * delta)

	update_camera_position()
	move_and_slide()

func apply_movement(input_dir: Vector2) -> void:
	if input_dir.length() == 0:
		return

	var normalized_dir := input_dir.normalized()
	var camera_forward: Vector3 = -camera.transform.basis.z
	var camera_right: Vector3 = camera.transform.basis.x
	var world_dir := (camera_forward * normalized_dir.y + camera_right * normalized_dir.x).normalized()
	var target_angle := atan2(world_dir.x, world_dir.z)
	mesh_instance.rotation.y = lerp_angle(mesh_instance.rotation.y, target_angle, 0.2)
	velocity.x = world_dir.x * SPEED
	velocity.z = world_dir.z * SPEED

func _jump() -> void:
	if is_on_floor():
		velocity.y = JUMP_VELOCITY

func calculate_jump_duration() -> void:
	# Estimate jump duration using the formula t = 2 * v / g
	# Since we have an upward phase and downward phase of equal duration.
	jump_duration = 2 * JUMP_VELOCITY / abs(GRAVITY.y)

func play_scaled_animation(animation_name: String, duration: float) -> void:
	if animation_name == "jump":
		var animation = anim_jump.get_animation("jump")  # Get the Animation resource
		if animation:
			var anim_length = animation.length  # Get the duration of the animation
			var scale_factor = anim_length / duration
			anim_jump.play("jump")
			anim_jump.speed_scale = scale_factor  # Adjust the playback speed using speed_scale

func update_camera_position() -> void:
	var offset: Vector3 = Vector3(
		cos(elevation) * sin(azimuth),
		sin(elevation),
		cos(elevation) * cos(azimuth)
	) * camera_distance
	camera.global_position = global_transform.origin + offset
	camera.look_at(global_transform.origin, Vector3.UP)

func play_animation(animation_name: String) -> void:
	match animation_name:
		"idle":
			if not anim_idle.is_playing():
				anim_idle.play("idle")
		"jump":
			if not anim_jump.is_playing():
				anim_jump.play("jump")
		"running":
			if not anim_running.is_playing():
				anim_running.play("running")
