# Haxe Metadata

Laxe provides a typed-metadata system called Decorators (named after system from Python). Decorators use the same syntax as Haxe's metadata, so a special syntax is required for specifying the metadata is not a Decorator.

By surronding the metadata's text with quotes, it will be treated like Haxe metadata and be added to the Haxe AST.
```laxe
@":rtti"
@"Haxe Metadata"("foo", 841)
class SomeClass:
	@"range"(12, 100)
	var value: int

	def new: pass

# ---

trace(Rtti.hasRtti(SomeClass)) # true

const range = Meta.getFields(SomeClass).value.range;
trace(range.length) # 2
```

## : Shorthand

Laxe's Decorators do not use `:`. So quotes are not required for Haxe metadata that starts with `:`; it can just be written like it would be in Haxe.
```laxe
@:structInit
class MyClass:
	var input: int

	def new(input: int):
		self.input = input

# ---

var input: MyClass = { input: 32 }
```
