# Enums

Enums provide a named set of options that may possibly contain additional values. Variables of an enum type may contain one of its options, and switch statements can be used to configure behavior based on the value.

```laxe
enum Color:
	Red
	Green
	Blue
	Custom(r: int, g: int, b: int)
	HexColor(hex: str)

# ---

var col1 = Green
var col2 = Custom(125, 255, 60)
var col3 = HexColor("#ff4422")

switch col1:
	case Red | Green | Blue:
		trace("It is simple color")

	case Custom(r, _, _):
		trace("It is custom color with red value: " + r)

	case HexColor(hex):
		trace("It is hex color: " + hex)
```

## Enum Methods

Unlike Haxe, methods can be added to enums and executed like a class method. It does this by generating a `wrapper` (or `abstract` in Haxe terms) that wraps and includes the functions.

The only downside is due to typing limitations with Laxe, the global enum values must be explicitly cast to the enum for the methods to work. Otherwise, they'll be typed as the internal enum.
```laxe
enum Flavor:
	Chocolate
	Vanilla

	def getName -> str:
		return switch self:
			case Chocolate: "chocolate"
			case Vanilla: "vanilla"

	def eat:
		switch self:
			case Chocolate:
				trace("Yummy!")
			case Vanilla:
				trace("Ew...")

# ---

# Error: eat is not member of type IFlavor
var flavor1 = Chocolate
flavor1.eat()

# Works
var flavor2 = Chocolate as Flavor
flavor2.eat() # Prints "Yummy!"

# Works
var flavor3: Flavor = Vanilla
flavor3.eat() # Prints "Ew..."

# ---

def printFlavor(flavor: Flavor):
	# Argument implicitly casts, so this works
	trace("The flavor is " + flavor.getName())

printFlavor(Chocolate)
```
