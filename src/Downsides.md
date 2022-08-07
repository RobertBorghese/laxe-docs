# Downsides

There are a couple downsides/non-goals of Laxe that should be noted.

## No Macro Interoperability

Unfortunately, Laxe is limited by what's possible with `Context.defineModule`. One of those things is a lack of support for Haxe `macro` functions. Since Laxe AST needs to be parsed and ready within the initialization phase of Haxe's compilation, it has no way to using Haxe-specific `macro` functions.

Fortunately, Laxe provides its own metaprogramming features, one of those being its own system for `macro` functions. So while it's more than capable of using compile-time features, it simply lacks compatibility with ones defined in the Haxe context (and vise-versa). More details about this can be found later in the metaprogramming section.

## Laxe Feature Restrictions

The other weakness of Laxe is that it relies upon the Haxe compiler's typing. Haxe's typing system is brilliant, allowing the AST to provide specific positional information for every piece of it. This allows Laxe to rely upon Haxe's error reporting, since it can associate typing issues with file-positions of Laxe source code. But leaving everything to the Haxe compiler does have some detriments.

Because Laxe uses the same typing system of Haxe, there are no plans to independently type the Laxe code. As a result, Laxe is unable to provide any additional syntax/typing features that are not already available in Haxe. An example of this would be that Haxe requires a keyword to distinguish between a variable initialization and assignment. Therefore, a Python-like system that infers an initialization from an assignment is impossible because Laxe is unable to tell whether a variable name has already been defined in a specific context. Another example is Laxe cannot differentiate between a function name and class name, so creating a class instance requires the explicit `new` keyword as opposed to Python's dynamic inference. 

Laxe does have a limited typing system for features and concepts exclusive to Laxe, such as `decorators`. Furthermore, there are some creative ways Laxe type features can be transformed into consistent, valid Haxe types by generating additional declarations (like generating Haxe generic classes for Laxe tuples or wrapping a Haxe type in an `abstract` to type a Laxe `const` type).
