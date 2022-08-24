# Primitives

As you may have noticed so far, while Laxe is typed by Haxe, it uses primitive type names based on Python. This is because Laxe provides aliases for various, common Haxe types like `Int`, `String`, `Bool`, etc. Laxe supports both the original names from Haxe or the Python-based aliases.

## Type-Aliases

<table>
  <tr>
    <th style="width: 25%; padding: 12px;">Laxe Type</th>
    <th style="width: 25%;">Haxe Equivalent</th>
    <th style="width: 50%;">Description</th>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">int</code></td>
    <td><code class="hljs">Int</code></td>
    <td>The basic integer type.</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">float</code></td>
    <td><code class="hljs">Float</code></td>
    <td>The basic floating-point type.</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">bool</code></td>
    <td><code class="hljs">Bool</code></td>
    <td>A binary type that stores either <code class="hljs">true</code> or <code class="hljs">false</code>.</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">str</code></td>
    <td><code class="hljs">laxe.stdlib.String</code></td>
    <td>The string type (wraps Haxe's <code class="hljs">String</code> class).</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">void</code></td>
    <td><code class="hljs">Void</code></td>
    <td>A type used to describe "no-type" in special cases.</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">dyn</code></td>
    <td><code class="hljs">Dynamic</code></td>
    <td>Haxe's special <a href="https://haxe.org/manual/types-dynamic.html">Dynamic</a> type.</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">any</code></td>
    <td><code class="hljs">Any</code></td>
    <td>Haxe's special <a href="https://haxe.org/manual/types-dynamic-any.html">Any</a> type.</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">expr`</code></td>
    <td><code class="hljs">laxe.stdlib.LaxeExpr</code></td>
    <td>Shorthand for Laxe wrapper of Haxe's <code class="hljs">haxe.macro.Expr</code> type.</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">typeDef`</code></td>
    <td><code class="hljs">laxe.stdlib.LaxeTypeDefinition</code></td>
    <td>Shorthand for Laxe wrapper of Haxe's <code class="hljs">haxe.macro.TypeDefinition</code> type.</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">field`</code></td>
    <td><code class="hljs">laxe.stdlib.LaxeField</code></td>
    <td>Shorthand for Laxe wrapper of Haxe's <code class="hljs">haxe.macro.Field</code> type.</td>
  </tr>
</table>
