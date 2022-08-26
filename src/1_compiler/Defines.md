# Defines

These can be defined using `-D <defineName>` in the Haxe command line or .hxml file.

<table>
  <tr>
    <th style="width: 25%; padding: 12px;">Define Name</th>
    <th style="width: 75%;">Description</th>
  </tr>
  <tr>
    <td style="padding: 12px;"><code class="hljs">laxe.meta.UseEvalMath</code></td>
    <td>C#, Python, and Lua have issues with Laxe's compile-time execution of <code class="hljs">macro</code> and <code class="hljs">decor</code> code. If the <code class="hljs">Math</code> class is used, it throws an error: <i>"You cannot access the [cs / python.lib.Math / lua.Math] package while in a macro"</i>.<br><br>If this define is enabled, it will resolve this issue by replacing all the <code class="hljs">Math</code> calls to their eval equivalent prior to executing.</td>
  </tr>
</table>
