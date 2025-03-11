extends Node2D

# Path to your ProgressBar node
@onready var progress_bar = $CanvasLayer/ColorRect/ProgressBar

# Target scene path
const LOBBY_SCENE_PATH = "res://ui/menus/lobby.tscn"

# Variables for progress
var loading_speed = 0.3  # Adjust the speed of loading
var progress_value = 0.0

func _ready():
	progress_bar.value = progress_value  # Initialize ProgressBar value
	set_process(true)  # Enable processing to update progress

func _process(delta):
	progress_value += loading_speed * delta * 100  # Increment progress
	progress_bar.value = progress_value  # Update ProgressBar value
	
	if progress_value >= 100.0:
		progress_value = 100.0  # Ensure it doesn't exceed 100
		switch_to_lobby()  # Switch scene once loading is complete

func switch_to_lobby():
	if ResourceLoader.exists(LOBBY_SCENE_PATH):
		get_tree().change_scene_to_file(LOBBY_SCENE_PATH)
	else:
		print("Error: Lobby scene not found at: ", LOBBY_SCENE_PATH)
