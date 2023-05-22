import{_ as s,o as n,c as a,O as l}from"./chunks/framework.3225270e.js";const C=JSON.parse('{"title":"移动端支持","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mobile-support.md","filePath":"guide/mobile-support.md"}'),p={name:"guide/mobile-support.md"},o=l(`<h1 id="移动端支持" tabindex="-1">移动端支持 <a class="header-anchor" href="#移动端支持" aria-label="Permalink to &quot;移动端支持&quot;">​</a></h1><p>本套件支持使用 vw/vh 做为移动端的布局单位，并默认集成了 <a href="https://github.com/sexyHuang/postcss-px2vp" target="_blank" rel="noreferrer">postcss-px2vp</a> 插件。</p><p>使用也很简单，只需将根目录下 <code>postcss.config.js</code> 文件里的注释代码开启即可：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">postcss-px2vp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 需要转换的单位，默认为&quot;px&quot;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">unitToConvert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 设计稿的视口宽度</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">viewportWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">320</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 单位转换后保留的精度</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">unitPrecision</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 能转化为 vw 的属性列表</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">propList</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 希望使用的视口单位</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">viewportUnit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vw</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 字体使用的视口单位</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">fontViewportUnit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vw</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 需要忽略的 CSS 选择器，不会转为视口单位，使用原有的 px 等单位</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">selectorBlackList</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">minPixelValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 媒体查询里的单位是否需要转换单位</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">mediaQuery</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 是否直接更换属性值，而不添加备用属性</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">replace</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 忽略某些文件夹下的文件或特定文件，例如 &#39;node_modules&#39; 下的文件</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">autoprefixer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>最后在开发中就可以直接使用 px 了，最终输出就是 vw 。</p>`,5),e=[o];function t(c,r,i,D,y,F){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{C as __pageData,A as default};
