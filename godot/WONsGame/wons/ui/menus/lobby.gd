extends Node2D

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	# Find the button and connect its signal to the function
	var button = $CanvasLayer/HBoxContainer/Button
	button.pressed.connect(self._on_Button_pressed)


# This function is called when the button is pressed
func _on_Button_pressed() -> void:
	# Destination is determined by preselected game mode
	get_tree().change_scene_to_file("res://gameplay/catch_chickens/chickens_scene.tscn")
