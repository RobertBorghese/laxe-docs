# Positional Unpack

Laxe's unpack feature allows for multiple variables to assigned from a single expression. This feature works very nicely with tuples. It especially works nice with tuples returned from functions, as it gives Laxe a nice, performant syntax for both setting and receiving multiple return values from functions.

To use unpack, first use a variable initialization keyword (either `var` or `const`). Then follow with a list of variable names (optionally annotated with types) separated by comments. And finally, an assignment to a single expression. Please note the position of the variable names matter as the value of each variable is decided by their position.
```laxe
def weather -> (int, str):
	return (23, "Snow")

# ---

var temp, precip = weather()

# "temp" is first, so it is assigned the first value of the tuple
trace(temp) # 23
```

## Skipping

Underscores can be used to skip a position to access later values. Underscores will not generate new variables.
```laxe
var _, rainType = weather()
trace(rainType) # prints "Snow"
```

## Typing

Types can also be annoted in the variable list.
```laxe
var tempf: float, _ = weather()
trace(tempf is float) # prints true
```

## Custom Unpacking

Other types besides tuples can use positional unpacking. Any type can use this form of unpacking as long as it has functions named `componentX`, "X" being the unpack index of the variable requesting a value. For example, a class with a `component0` and a `component1` function can unpack up to 2 variables. Any more than that will throw an error.
```laxe
class Enemy:
	var name: str
	var hp: int

	def new(name, hp):
		self.name = name; self.hp = hp

	def component0: return name
	def component1: return hp

# ---

var enemy = new Enemy("Slime", 100)

var name, hp = enemy
trace(name) # prints "Slime"
trace(hp) # prints 100

# ---

var _, _, thirdVal = enemy # error, component2 is not a member of Enemy
```
