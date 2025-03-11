extends Node

# Function to load the menu scene
func go_to_menu():
	var menu_scene_path = "res://ui/menus/loading0.tscn"  # Path to your menu scene
	if ResourceLoader.exists(menu_scene_path):  # Verify the resource exists
		# Defer the scene change to avoid errors with blocked children
		call_deferred("change_scene_deferred", menu_scene_path)
	else:
		print("Error: Menu scene not found! Check the file path: ", menu_scene_path)

# Deferred function to actually change the scene
func change_scene_deferred(menu_scene_path: String):
	get_tree().change_scene_to_file(menu_scene_path)

# Called when the node is added to the scene
func _ready():
	go_to_menu()
