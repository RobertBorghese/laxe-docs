# Intro

# What is Laxe?
Laxe is a programming langauge that is read and run using [Haxe](https://haxe.org).

Using Haxe's powerful compile-time capabilities, Laxe's source files are read and compiled into Haxe AST. The rest is handled by Haxe's compiler! Since Laxe is compiled to be valid Haxe, it is 100% interoperable with Haxe projects. Source files from both Haxe and Laxe can be mixed without much issue.

Essentially, Laxe is an alternative syntax for Haxe. It's based on Python's syntax and tries to be short, concise, and maybe a bit crazy.

## Decors

```laxe
decor ForLoop(start: expr, check: expr, increment: expr):
	def onExpr(e: expr):
		return template expr:
			$start
			while $check:
				$e
				$increment

def main:
	@ForLoop(var i = 0, i < 10, i++)
	block:
		if i % 2 == 0:
			trace(i + " is an even number.")
```

## Tuples, Nullables, Arrays

```laxe
def getColor -> (str, int) = ("#ff3377", 0.5)

def makeEntity -> Entity?:
	var (color, alpha) = getColor()

	if alpha <= 0:
		return None

	var entity = new Entity()
	entity.tint = color
	entity.alpha = alpha

	return entity

def setupEntities -> Entity[]:
	var result = []

	for i in 0...10:
		var e = makeEntity()
		if e != None:
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
