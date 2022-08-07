# Installation

Laxe is built on top of Haxe and functions as a noncommittal alternative for writing source code. Using it is as simple as [creating a Haxe project](https://haxe.org/documentation/platforms/python.html) and installing the `laxe` library from `haxelib`. 

First, install the library using `haxelib`.
```
haxelib install laxe
```

Next, add the library to your `.hxml` file.
```
-lib laxe
```

And... you're done! All you need to do now is create files with a `.lx` extension in your source code directory, and the Laxe library will read and compile them while the Haxe code is also being compiled!
