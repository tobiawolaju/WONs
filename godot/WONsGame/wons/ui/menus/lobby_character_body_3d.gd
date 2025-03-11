extends CharacterBody3D

@onready var drop = $drop
@onready var swim = $swim

func _ready():
	# Start the drop animation immediately
	drop.play("drop")
	
	# Start the swim animation after 2 seconds, and loop it
	await get_tree().create_timer(2.0).timeout
	swim.play("swim", -1)  # Loop the swim animation indefinitely
