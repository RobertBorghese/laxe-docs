# Tuples

Tuples are an anonymous type for associating multiple types together. They are great for returning multiple values from a function or associating small types together in type definitions.

Unlike Haxe's anonymous structures, Laxe's tuples' field access is as fast as normal classes. Depending on the language target, they are either shorthand for creating a minimal, `@:nativeGen`, helper class that stores the desired data, or they act as an alias for that target's actual tuple class.

However, please note Laxe tuples do not support Haxe reflection features due to their focus on performance.

## Syntax

Tuple types are written using parenthesis containing multiple types separated by commas. The order of the types matter. `(int, str)` is different from `(str, int)`.
```laxe
var myTup: (int, str)
```

Similarily, tuple values are created by listing multiple expressions, separated by commas and contained within parenthesis. The order of the expressions' types must match the order of the desired tuple type.
```laxe
var myTup = (12, "Twelve") # infers (int, str)
```

## Access

The values of a tuple can be accessed using dot-access followed by an `int` of the value's index. This value must be hardcoded, as runtime values cannot be used to directly access tuple members (unlike accessing an element on an array).
```laxe
var myTup = (12, "Twelve")

trace(myTup.0) # prints 12
trace(myTup.1 == "Twelve") # prints true
```

## Unpacking

The values can also be destructed into new variables using Laxe's unpack feature. More information about this will be provided in future chapters. 
```laxe
def addAndMult(one: int, two: int):
	return (one + two, one * two)

# ---

var add, mult = addAndMult(3, 5)

trace(add) # 8
trace(mult) # 15
```
