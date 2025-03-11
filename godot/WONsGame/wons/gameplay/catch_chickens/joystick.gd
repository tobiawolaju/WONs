extends Sprite2D

signal joystick_moved
signal joystick_released

var radiusJoyStick
var radiusJoyBase
var maxRadius
var touchInsideJoystick = false
var return_to_center = true  # Initially set to true
var keys_pressed = {"ui_up": false, "ui_down": false, "ui_left": false, "ui_right": false}
var up_direction_time = 0.0  # Tracks time spent moving in the up direction
var up_direction_threshold = 5.0  # Time in seconds to disable return_to_center

func _ready():
	# Get the actual visible area of the viewport (including any UI scaling)
	var viewport_size = get_viewport().get_visible_rect().size

	# Calculate the position to place the joystick at the bottom center
	var center_x = viewport_size.x / 2
	var bottom_y = viewport_size.y - texture.get_size().y / 2  # Adjust for the joystick's height

	# Set the position of ../../TouchJoyStick to bottom center
	var touch_joystick = get_node("../../../TouchJoyStick")
	print(touch_joystick)
	touch_joystick.position = Vector2(center_x, bottom_y)
	
	

	# Set the scale of ../../TouchJoyStick to 0.8
	touch_joystick.scale = Vector2(0.8, 0.8)

	radiusJoyStick = global_scale.x * texture.get_size().x / 2
	radiusJoyBase = get_node("../JoyBase").global_scale.x * $"../JoyBase".texture.get_size().x / 2
	maxRadius = radiusJoyBase - radiusJoyStick

func _input(event):
	if event is InputEventScreenDrag:
		if touchInsideJoystick == true:
			position.x += event.relative.x
			position.y += event.relative.y
			if position.length() > maxRadius:
				var angle = position.angle()
				position.x = cos(angle) * maxRadius
				position.y = sin(angle) * maxRadius
			emit_signal("joystick_moved", position)

			# If joystick is moved and return_to_center is false, reset it to true
			if not return_to_center:
				return_to_center = true

			# Simulate keyboard input based on direction
			if abs(position.x) > abs(position.y):
				if position.x > 0:
					_press_key("ui_right")
					_release_key("ui_left")
				else:
					_press_key("ui_left")
					_release_key("ui_right")
			else:
				if position.y < 0:
					_press_key("ui_up")
					_release_key("ui_down")
				else:
					_press_key("ui_down")
					_release_key("ui_up")

	if event is InputEventScreenTouch:
		if !event.pressed:
			if return_to_center:
				position.x = 0
				position.y = 0
				_release_all_keys()  # Release keys when joystick returns to center
			emit_signal("joystick_released")

		if event.pressed:
			touchInsideJoystick = (event.position - global_position).length() <= radiusJoyStick

func _process(delta):
	# Track time spent moving in the up direction
	if position.y < 0:  # Joystick moved up
		up_direction_time += delta
		if up_direction_time >= up_direction_threshold:
			return_to_center = false  # Disable return to center
	else:
		up_direction_time = 0.0  # Reset timer if not moving up

	# If return_to_center is enabled, check for center position
	if return_to_center and position == Vector2.ZERO:
		_release_all_keys()

func _press_key(key):
	if !keys_pressed[key]:
		Input.action_press(key)
		keys_pressed[key] = true

func _release_key(key):
	if keys_pressed[key]:
		Input.action_release(key)
		keys_pressed[key] = false

func _release_all_keys():
	for key in keys_pressed.keys():
		_release_key(key)
