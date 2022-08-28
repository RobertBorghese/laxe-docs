# Wrappers

Wrappers are the name of [Haxe's `abstract` feature](https://haxe.org/manual/types-abstract.html) in Laxe. It was renamed so it doesn't share the name of the `abstract class`. Wrappers act and work as one would expect.
```laxe
wrapper Temperature extends int:
	inline def new(i: int):
		self = i

	def asFahrenheit -> int:
		return Math.round(self * 1.8 + 32)

	def asCelsius -> int:
		return self

	def toString -> str:
		return self + "°C"

# ---

var temp = new Temperature(5)

trace(temp) # "5°C"

trace(temp.asFahrenheit()) # 41
```

## Implicit Casts

View [Haxe's page](https://haxe.org/manual/types-abstract-implicit-casts.html) for more info. The following syntax may be used for implicit casts.

```laxe
# Implicitly convert from and to int
wrapper Temperature extends int from int to int:
	inline def new(i: int):
		self = i

	# Haxe metadata can be used to specify more implicit casts
	# Visit the "Haxe Metadata" section for more info and rules.
	@:from
	static def fromString(s: str):
		return new Temperature(Std.parseInt(s))

	@:to
	def toArray:
		return [self]
```

## Forwarding and Operator Overloading

These features also work and are managed by Haxe. Use Haxe metadata to configure these features.
