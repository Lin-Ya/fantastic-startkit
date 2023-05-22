import{_ as e,o as a,c as s,O as t}from"./chunks/framework.3225270e.js";const u=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start.md","filePath":"guide/start.md"}'),o={name:"guide/start.md"},l=t(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-label="Permalink to &quot;开发环境&quot;">​</a></h2><p>使用本套件前，需要在本地依次安装好 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">Node.js</a>, <a href="https://pnpm.io/zh/" target="_blank" rel="noreferrer">pnpm</a>, <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a> 和 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a>。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Node.js 需要使用 14.18+ / 16+ 版本，建议为 18.12+ 版本。</p></div><p>然后在 Visual Studio Code 里安装好以下扩展：</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noreferrer">EditorConfig for VS Code</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noreferrer">DotENV</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer">ESLint</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noreferrer">stylelint</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=vue.volar" target="_blank" rel="noreferrer">Vue Language Features</a></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>以上 5 个为 Visual Studio Code 必备扩展，以下则是作者建议安装的扩展，安装它们将在一定程度上提升开发效率。</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans" target="_blank" rel="noreferrer">Chinese (Simplified) Language Pack for Visual Studio Code</a> 中文语言包</li><li><a href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight" target="_blank" rel="noreferrer">Color Highlight</a> 在代码中高亮颜色</li><li><a href="https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag" target="_blank" rel="noreferrer">Highlight Matching Tag</a> 高亮显示匹配的标签</li><li><a href="https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview" target="_blank" rel="noreferrer">Image preview</a> 图片预览</li><li><a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank" rel="noreferrer">indent-rainbow</a> 彩虹缩进提示</li></ul></div><p>除此之外，还需要准备好开发使用的浏览器，推荐使用 <a href="https://www.google.cn/chrome/" target="_blank" rel="noreferrer">Chrome</a> ，并且在 Chrome 里安装好 <a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd" target="_blank" rel="noreferrer">Vue.js devtools</a> 扩展，这一步很重要，安装 Vue 官方提供的调试工具将大大提升解决 bug 的效率。</p><p>不过由于安装 Vue.js devtools 需要访问 Chrome 应用商店，如果在大陆地区访问，需要自行准备相关<strong>可访问外网</strong>的工具。如果不具备该条件，也可访问 <a href="https://devtools.vuejs.org/" target="_blank" rel="noreferrer">Vue.js devtools</a> 官网了解本地构建或者下载支持 Firefox 的 Vue.js devtools 。</p><h2 id="拉取代码" tabindex="-1">拉取代码 <a class="header-anchor" href="#拉取代码" aria-label="Permalink to &quot;拉取代码&quot;">​</a></h2><p>做好准备工作后，依次执行下面的命令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 克隆项目（如果本地已有源码，可跳过这步）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可选择从 github 或 gitee 克隆 example 分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/hooray/fantastic-startkit.git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/hooray/fantastic-startkit.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入项目目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fantastic-startkit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装项目依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 运行</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><p>运行成功后，会自动访问页面，默认情况下，地址为 <code>http://127.0.0.1:5173</code></p><p>如果你已经了解本套件的特性，我们推荐你通过拉取默认 <code>master</code> 分支进行项目开发，该分支不含任何示例代码。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 可选择从 github 或 gitee 克隆</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/hooray/fantastic-startkit.git</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/hooray/fantastic-startkit.git</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>由于框架有使用到 simple-git-hooks 这个依赖包，所以请确保在安装依赖前，已经使用 <code>git init</code> 对项目进行过 git 环境初始化，如果你在安装依赖后再初始化了 git 环境，请在 git 环境初始化之后再执行一遍 <code>pnpm install</code> 安装命令。</p><p>了解更多请阅读《<a href="./coding-standard.html#simple-git-hooks-lint-staged">代码规范 - simple-git-hooks &amp; lint-staged</a>》。</p><p>此外，如果 git 仓库目录和框架目录并非同一个，则需要在 <code>package.json</code> 中修改 <code>postinstall</code> 脚本，切换到 git 所在目录。例如 git 目录是 <code>project/</code> ，而框架目录是 <code>project/fantastic-admin/</code> ，则在 <code>package.json</code> 里找到 <code>&quot;postinstall&quot;: &quot;simple-git-hooks&quot;</code> 并修改为 <code>&quot;postinstall&quot;: &quot;cd .. &amp;&amp; simple-git-hooks&quot;</code> 即可。</p></div><div class="warning custom-block"><p class="custom-block-title">报错</p><p>安装依赖时提示 404 ，或者安装结束后，运行时提示「 &#39;vite&#39; 不是内部或外部命令，也不是可运行的程序或批处理文件 」，都些都是依赖未安装成功导致的。可以尝试执行 <code>pnpm config set registry https://registry.npmmirror.com/</code> 切换为国内淘宝源（也可以使用 <a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm</a> 一键切换源），然后删除根目录下 <code>/node_modules</code> 文件夹并重新安装依赖。</p><p>如果依旧无法运行（基本不太可能），可尝试删除根目录下 <code>/node_modules</code> 文件夹与 <code>pnpm-lock.yaml</code> 文件后，再删除 <code>package.json</code> 中 <code>&quot;preinstall&quot;: &quot;npx only-allow pnpm&quot;</code> 这句脚本，最后使用 <code>npm / yarn</code> 进行安装依赖。但需要清楚一点，这样操作后，将无法与官方环境锁定的依赖包版本保持一致，可能会出现无法预知的问题，非必要情况下，请勿使用该方案。</p></div><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><p>了解并熟悉本套件使用到的技术栈，能让你更得心应手。</p><ul><li><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vite</a></li><li><a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">Vue 3</a> (<a href="https://v3-migration.vuejs.org/" target="_blank" rel="noreferrer">v3 迁移指南</a>)</li><li><a href="https://next.router.vuejs.org/zh/" target="_blank" rel="noreferrer">Vue Router 4</a></li><li><a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a></li></ul>`,20),n=[l];function r(i,p,c,d,h,m){return a(),s("div",null,n)}const f=e(o,[["render",r]]);export{u as __pageData,f as default};
