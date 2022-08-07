# Variables

Unlike Python, Laxe uses a Haxe-like syntax for declaring new variables. `var` is used for new mutable variables, while `const` is used for immutable variables.
```laxe
var a = 164 # declared
a = 0       # reassigned

b = 12      # error: b is not defined

const c = "test"
c = "fail"  # error: c is final variable
```

## Variable Type

To provide a type to the variable declaration, the same syntax for Haxe and Python is used (`varName : Type`). This is usually optional, as Laxe can rely upon Haxe's variable inference capabilities, but still necessary for variables without an assigned value. 
```laxe
var p: Player;

if self.hasEntities():
	p = self.getFirstEntity()
```
