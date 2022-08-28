# Named Tuples

Named tuples are auto-generated wrappers for tuples with properties that modify the tuple content. Associating names with each tuple member helps readability and is an excellent choice for tuples used as class members. Although, there are some important restrictions to keep in mind. More information is provided below.

## Syntax

Named tuple types are written the same as anonymous structures with parenthesis instead of curly brackets.
```laxe
var myNamedTup: (time: int, place: str)
```

HOWEVER, please note unlike both unnamed tuples and anonymous structures, named tuples do not have an equivalent "expression" syntax. This is due to complicated restrictions with Haxe type inference. To provide a value to named tuple variables, unnamed tuples must be used.

To ensure a variable, argument, or return type is a named tuple, it must be explicitly typed as such. Otherwise, the compiler will infer it to be the unnamed variant.
```laxe
var myNamedTup: (time: int, place: str) = (1200, "My House")

trace(myNamedTup.time) # prints 1200
trace(myNamedTup.place) # prints "My House"

trace(myNamedTup.0 == myNamedTup.time) # prints true
```

## unnamed Method

Named tuples and unnamed tuples can be assigned to each other and unified without any problem as long as their type lists are the same. On the other hand, two named tuples with the same types, BUT different names, cannot be assigned to each other. To resolve this problem, the `unnamed` method is available on named tuples. This method simply casts the value's type to the unnamed equivalent.
```laxe
def saveGame(data: (time: int, place: str)):
	saveTime(data.time)
	savePlace(data.place)

# ---

var myTup = (745, "Moon")
saveGame(myTup) # valid

# ---

var myNamedTup: (count: int, place: str) = (10, "Home")
saveGame(myNamedTup) # invalid, first property must be named "time"

saveGame(myNamedTup.unnamed()) # valid since unnamed tuples
                               # are compatible with all named tuples
```

## Recursive Restriction

Due to how named tuples are implemented internally in Haxe, they may not contain generic types or other named tuples. In cases where generics want to be used with tuples, unnamed tuples must be used. *(Might be fixed in the future??)*
