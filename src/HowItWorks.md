# How it Works

Laxe is only possible to due the brillant, god-like metaprogramming capabilities of Haxe. Haxe has multiple phases of compile-time metaprogramming that can be used to rewrite Haxe code using itself. Laxe takes advantage of the earliest stage, running an [initialization macro](https://haxe.org/manual/macro-initialization.html) that reads the Laxe code and handles it accordingly!

The Laxe code is parsed into valid Haxe AST, which is then defined into the project using [Context.defineModule](https://api.haxe.org/haxe/macro/Context.html). This all happens before the typing phase of Haxe's compilation, so both Laxe and Haxe code is typed together. This results in unparalleled interoperability between two languages with completely different syntaxes. Definitions in Haxe or Laxe can be referenced as if they're both written in the same language!
