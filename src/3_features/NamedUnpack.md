# Named Unpack

While positional unpacking works well for tuples, it is not that great for most normal types. In situations where variables should be assigned based on the field names of the resulting expression, named unpacking is a much better option.

Named unpack works very similarly to positional unpack, only the values each variable is given is the field name of the variable. The syntax is the same, only the initialized variables must be surronded with curly brackets. The following example provides a good demonstration.
```laxe
class Armor:
	var name: str
	var weight: float
	var strength: int

	def new(name: str, weight: float, strength: int):
		self.name = name; self.weight = weight; self.strength = strength

# ---

var armor = new Armor("Boots", 37.2, 20)

var { weight, name } = armor
trace(weight) # prints 37.2
trace(name) # prints "Boots"
```

As demonstrated above, the order of the variables does not matter. However, the variable names must match a name of a variable or property within the type.
```laxe
# error, power is not a member of Armor
var { power } = armor
```

On the other hand, named unpack is much more powerful than the positional variation, as it has immediate compatibility with all types.
```laxe
var { length } = [2, 5, 7]
trace(length) # prints 3

# ---

var { pow } = Math
trace(pow(3, 3)) # prints 27
