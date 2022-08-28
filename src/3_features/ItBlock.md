# It Block

The "it" block is a very unique feature provided by Laxe. It's similar to a `block` statement, but instead of using a specific keyword, it can be invoked by adding a colon to the end of any arbitrary expression (with some restrictions). After adding a colon, code can be added underneath like with other control flow statements, only in the code scope, the `it` variable can be used to access the result of the expression that invoked the block.

```
<expression>:
	# "it" == <expression>
	<expression 1>
	<expression 2>
	...
	<result value>
```

While it may appear to be a somewhat niche feature, it can be used to construct sectioned, readable code. An example would be a function that initializes a bunch of different components, a constructor call with some extra field configuration, or even just to alias long variable names.
```laxe
class Player extends GameEntity:
	var texture: Texture

	def createComponents:
		# If the resulting value is going to be stored somewhere anyway,
		# it's nice to simply focus on it in its own little scope
		self.addComponent() as Texture:
			it.path = "img/Player.png"
			it.scale.set(2)
			it.alpha = 0.5
			self.texture = it

		self.addComponent() as CollisionRect:
			it.rect = [0, 0, 100, 250]
			it.weight = 25

		self.addComponent() as Controllable:
			it.allowKeyboardControls()
			it.allowGamepadControls()
```

```laxe
def getConfig:
	# Instead of unnecessarily storing File object,
	# the desired data can be obtained in sub-block and stored instead.
	var data = new File("Data.ini"):
		it.type = "READONLY"
		it.format = "txt"
		if it.exists():
			it.readFile()
		else:
			null

	# prints text of Data.ini or null if it doesn't exist
	trace(data)
```

```laxe
# Might be a pain to write that name 3 times.
minotaurPreventionThreshold:
	if it > 1000:
		reduceMinotaurs(it - 100)
		onMinotaursChanged(it)
```
