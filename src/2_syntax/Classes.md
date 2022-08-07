# Classes

Classes are a common feature of object-oriented languages and are avaiable in both Haxe and Python. In general, Laxe's classes have the same syntax as Python, but the special method names and `this` variable works more similarily to Haxe.

Using the `class` keyword, classes can be created using the following syntax:
```laxe
class MyClass:
	# variable members
	var memberNum: int
	var memberStr: str

	# methods
	def doSomething:
		trace("Did something.")
```

## Constructor

Constructors are the same as Haxe's. Creating a method named `new` will act as the constructor.
```laxe
class MyClass:
	def new:
		trace("Class was created")
```

An instance of a class can be made using the `new` keyword.
```laxe
var cls = new MyClass() # prints "Class was created"
```

## `self` Reference

Unlike Python, Laxe does not require an explicit `self` argument in methods. It is automatically available on all instance methods. (*Laxe also supports the `this` keyword, which acts as an alias for `self`.*)
```laxe
class MyClass:
	var member: int

	def new:
		self.member = 100
```

Also, Haxe can infer a variable or function as a class member without being explicitly accessed from `self`, so Laxe can do this as well.
```laxe
class MyClass:
	var member: int

	def new:
		# same as "self.setup()"
		setup()

	def setup:
		# same as "self.member = 100"
		member = 100
```

## Inheritance

Classes can be [inherited](https://haxe.org/manual/types-class-inheritance.html) using the `extends` keyword.
```laxe
class MySubClass extends MyClass:
	# constructor already defined in MyClass

	# "member" variable already defined in MyClass
	def incrementMember(amount: int = 1):
		member += amount
