# Modify

The `modify` keyword allows one to modify and append content to an existing `class`, `wrapper`, or `enum`. If the type definition is from Laxe, the content is simply merged for being defined in Haxe. On the other hand, if the type cannot be found, it is assumed to be defined in Haxe. In that case, a `@:build` metadata is used to add the content to the Haxe class (TODO).

This feature can be helpful for separating a class definition into multiple parts in different source files. Alternatively, it can be very helpful for adding variables and functions to existing types defined in other libraries.

To use `modify`, type the keyword followed by the full class path of the type. Please note any generic arguments, super classes, or interfaces the original type relies upon should not be included.
```laxe
class Entity:
	var hp = 0

	def new:
		pass

# ---

modify mypackage.Entity:
	var mp = 0

	def addMagic(value: int):
		mp += value

# ---

var entity = new Entity()
entity.addMagic(23) # valid
```

Here is an example of modifying an existing type.
```laxe
modify haxe.ds.Vector:
	inline def first -> T:
		if self.length > 0:
			return self.get(0)
		else:
			throw "Could not get first element"
```

## Rename

The `rename` keyword allows existing fields and methods to be renamed. Renaming is an important feature for reworking the existing behavior of members for the type definition, as it retains the member while simultaneously making room for the developer to re-create the variable or function with the original name.

In order to add a trace statement to the `jump` method of the `Player` class created below, the following `modify` uses the `rename` feature to do so without removing the `jump` behavior.
```laxe
class Player:
	var ySpeed = 0

	def jump:
		ySpeed = -10

# ---

modify mypackage.Player:
	# First, rename the jump method
	rename jump to _originalJump

	# Second, create a new jump method
	def jump:
		# The original jump method
		_originalJump()

		# New behavior
		trace("The player jumped")

# ---

var player = new Player()

# Both the original jump behavior and the new behavior will be executed
player.jump()
```

## Delete

The `delete` keyword deletes an existing field with the same name as the provided identifier.
```laxe
class Player:
	var ySpeed = 0

	def jump:
		ySpeed = -10 # throws error, ySpeed does not exist

# ---

modify mypackage.Player:
	delete ySpeed
```

## Replace

The `replace` keyword can be prepended to a modify member to automatically delete the existing field with the same name. An error will be thrown if a field with the same name does not exist on the type being modified.
```laxe
class Player:
	var ySpeed = 0

	def jump:
		ySpeed = -10

# ---

modify mypackage.Player:
	replace def jump:
		ySpeed = -12
		onJump()

	def onJump:
		pass
```
