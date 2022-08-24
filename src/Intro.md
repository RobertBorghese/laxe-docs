# Intro

# What is Laxe?
Laxe is a programming langauge that is read and run using [Haxe](https://haxe.org).

Using Haxe's powerful compile-time capabilities, Laxe's source files are read and compiled into Haxe AST. The rest is handled by Haxe's compiler! Since Laxe is compiled to be valid Haxe, it is 100% interoperable with Haxe projects. Source files from both Haxe and Laxe can be mixed without much issue.

Long story short, Laxe is an alternative syntax for Haxe. It's based on Python's syntax and tries to be concise, fun, and cool.

## Basic Syntax
```laxe
# Class
class Player:
	var sprite: Sprite
	var position: { x: float, y: float }

	def new(imagePath: str):
		sprite = Sprite.loadImage(imagePath)
		position = { x: 0, y: 0 }

# Main function
def main:
	const player = new Player("img/Guy.png")
```

## Macros

```laxe
# Use type-safe expression object
macro forLoop(start: expr`, check: expr`, increment: expr`, scope: expr`) -> expr`:
	return template expr:
		$start
		while $check:
			$scope
			$increment

# Or construct expression using string
macro print(msg: str, ...args: expr`) -> str:
	var index = 1
	for e in args:
		msg = msg.replace("%" + index, "' + " + e.toString() + " + '")
		index++
	return "trace('" + msg + "')"

# Main function
def main:
	forLoop(var i = 0, i < 10, i++):
		if i % 2 == 0:
			print!("%1 is an even number.", i)
```

## Decors

```laxe
# Typed decorators
decor ForLoop(start: expr`, check: expr`, increment: expr`):
	def onExpr(e: expr`):
		return template expr:
			$start
			while $check:
				$e
				$increment

# Main function
def main:
	@ForLoop(var i = 0, i < 10, i++)
	block:
		if i % 2 == 0:
			trace(i + " is an even number.")
```

## Tuples, Nullables, Arrays

```laxe
# Get tuple of string and float
def getColor -> (str, int) = ("#ff3377", 0.5)

# Returns an Entity or null
def makeEntity -> Entity?:
	var (color, alpha) = getColor()

	if alpha <= 0:
		return null

	var entity = new Entity()
	entity.tint = color
	entity.alpha = alpha

	return entity

# Returns array of Entity
def setupEntities -> Entity[]:
	var result = []

	for i in 0...10:
		var e = makeEntity()
		if e != null:
			result.push(e)

	return result
```

## Converted Haxe Example

Below is the Laxe equivalent of the code shown on [haxe.org](https://haxe.org). 

```laxe
def main:
	var playerA = { name: "Simon", move: Paper }
	var playerB = { name: "Nicolas", move: Rock }

	var result = switch [playerA.move, playerB.move]:
		case [Rock, Scissors] |
			 [Paper, Rock] |
			 [Scissors, Paper]: Winner(playerA)

		case [Rock, Paper] |
			 [Paper, Scissors] |
			 [Scissors, Rock]: Winner(playerB)

		case _: Draw

	trace('result: $result')

alias type Player = { name: str, move: Move }

enum Move:
	Rock; Paper; Scissors

enum Result:
	Winner(Player)
	Draw
```
