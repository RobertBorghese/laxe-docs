mdbook build
copy "custom_syntax/highlight.js" "book/highlight.js"
more "custom_syntax/haxe.min.js" >> "book/highlight.js"
more "custom_syntax/laxe.js" >> "book/highlight.js"