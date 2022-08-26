# Functions

The following functions can be used using the `--macro` feature on the Haxe command line or in an .hxml file.

<table>
  <tr>
    <th style="width: 25%; padding: 12px;">Function Name</th>
    <th style="width: 75%;">Description</th>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">laxe.Laxe.DisallowHaxeClassPaths()</code></td>
    <td>If this function is called, Laxe will not check for <code class="hljs">.lx</code> source files in the Haxe class paths (<code class="hljs">-cp</code>). Instead, a Laxe class path must be defined using the <code class="hljs">laxe-cp</code> define.</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">laxe.Laxe.AddClassPath(path: String)</code></td>
    <td>This function provides the ability to add a class path exclusively for Laxe source files. It can be called multiple times to add multiple paths.</td>
  </tr>
</table>

