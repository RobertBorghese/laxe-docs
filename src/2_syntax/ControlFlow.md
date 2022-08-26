# Control Flow

Laxe provides all the standard forms of control flow (`if`, `while`, `for`, etc.).

## Scope

An important aspect of control flow is scope. While Python does not scope variables in functions, Laxe follows Haxe's scoping rules.

Haxe, and C-based languages in general, are typically able to create a block of scoped code without using control flow by containing code within `{ ... }` brackets. This allows programmers to manage the visibility of temporary variables or, in Haxe's case, process expressions in a sub-scope to return a temporary value.

Unlike Python, Laxe provides the ability to create an arbitrary scope using the `block` keyword.
```laxe
var name = "Joe"

block:
	var name = "Bob"
	trace(name) # Bob

# ---

var diameter = 3
var area = block:
	var radius = diameter / 2
	var pi = Math.PI
	radius * radius * pi

trace(area) # 7.06858347058
```

## if, else if, else

These look and work just like Python's `if` statements, conditionally executing code based on a boolean value. Like Haxe, the chain of `if`/`else` can be treated like a value as long as each branch resolves to a value.

Note: Laxe allows both `else if` and `elif` syntax. Feel free to use whichever is more comfortable.

```laxe
var number = 22

if number == 22:
	trace("The number is 22")

var result = if Math.random() < 0.5:
	"Hello"
else if number == 22:
	"World"
else:
	""

trace(result) # 50% chance of being "Hello", otherwise is "World" 
```

## while, runonce, loop

The `while` statement works as expected. It will continue to loop as long as the provided expression returns `true`. The `break` statement can be used to immediately cancel the `while`. The `continue` statement can be used to cancel the current iteration and start the next one.

If the `runonce` keyword is prepended to the while statement, it will first run once regardless of the expression being `true`. After it runs once, it will function like a normal `while` loop, first checking the condition and running if `true`.

Finally, the `loop` keyword can be used instead of `while`. The `loop` does not take a condition and instead loops forever. To end the `loop`, the `break` keyword must be used.
```laxe
var index = 0
while index < 5:
	index += 2
	trace(index) # prints 2, 4, then 6

# ---

runonce while index < 0:
	index--

# index will decrement from 6 to 5 since
# runonce runs once regardless of condition
trace(index) # 5

# ---

# loop indefinitely
loop:
	if index % 2 == 1:
		index++
		continue

	index /= 2

	trace(index) # prints 4, then 2

	if index == 2:
		break # break must be invoked manually
```

## for

`for` iterates through an `Iterable` object, running the provided code for each instance contained within.

An iterator between two `int`s can be created using the `...` operator.
```laxe
for i in 0...5:
	trace(i) # prints 0, 1, 2, 3, 4

# ---

var msgList = ["Hello friend.", "How are you?"]
for message in msgList:
	trace(message) # prints each string in "msgList"
```

## switch

`switch` works just like in [Haxe](https://haxe.org/manual/expression-switch.html), with full support for [pattern matching](https://haxe.org/manual/lf-pattern-matching.html) and [guard-cases](https://haxe.org/manual/lf-pattern-matching-guards.html).
```laxe
var color = "red"

var hex = switch color:
	case "red": 0xff0000

	case "green" | "emerald": 0x00ff00

	case "blue" | "sapphire": 0x0000ff

	case _ if color.startsWith("0x"):
		Std.parseInt(color)

	case _: null

trace(StringTools.hex(hex)) # ff0000
```
