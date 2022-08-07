# Functions

Functions are based on Python's function syntax.

Using `def` functions can be created using the following syntax:
```laxe
def myFunctionName:
    # insert function code here
```

Similar to Python, Laxe uses whitespace to denote when the function body begins/ends. All of the function content must retain the same identation:
```laxe
def myFunctionName:
    var a = 12
    trace(a)
      a += 1 # inconsistent identation
```

## Arguments

Function arguments can be provided using parentheses after the function name. The typing syntax is the same as Haxe's. Laxe is a statically typed language, but Haxe can infer some types, so while they aren't necessary, types are recommended:
```laxe
def myFunctionName(myParam1, myParam2: str):
    trace(myParam1)
    trace(myParam2) # myParam2 is a String


def addTwoNumbers(one: int, two: int):
    trace(one + two)
```

## Return Type

Function return types can be specified using `->`. Similar to argument types, the Haxe compiler will attempt to infer them otherwise.
```laxe
def getSum(one: int, two: int) -> int:
    return one + two
```

## Shorthand Definitions

Similar to Python, if only one expression is required for the function body, it can be placed beside the `:`:
```laxe
def getSum(one: int, two: int) -> int: return one + two
```

Function declarations that only contain a return statement can be shortened further using the `=` operator. Instead of the `:`, use `=` followed by the desired expression to be returned.
```laxe
def getSum(one: int, two: int) -> int = one + two
```

## Functions in Expressions

Functions can be declared as expressions:
```laxe
def main
    def exprFunc:
        trace("called local function")

    exprFunc()
```

Functions can also be assigned to variables. In cases like this, they can be left unnamed as well.
```laxe
def main:
    const exprFunc = def:
        trace("called localfunction")

    exprFunc()
```
