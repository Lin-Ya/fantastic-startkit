"use strict";(self.webpackChunkfantastic_template_docs=self.webpackChunkfantastic_template_docs||[]).push([[501],{6967:(e,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-4697bf92",path:"/coding-standard.html",title:"代码规范",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"IDE 编辑器",slug:"ide-编辑器",children:[]},{level:2,title:"husky & lint-staged",slug:"husky-lint-staged",children:[]},{level:2,title:"配置代码规范",slug:"配置代码规范",children:[]},{level:2,title:"关闭代码规范",slug:"关闭代码规范",children:[]}],filePathRelative:"coding-standard.md",git:{updatedTime:1627204102e3,contributors:[{name:"hooray",email:"304327508@qq.com",commits:2}]}}},5051:(e,n,s)=>{s.r(n),s.d(n,{default:()=>U});var t=s(9599);const a=(0,t.Wm)("h1",{id:"代码规范",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#代码规范","aria-hidden":"true"},"#"),(0,t.Uk)(" 代码规范")],-1),i=(0,t.Wm)("h2",{id:"ide-编辑器",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#ide-编辑器","aria-hidden":"true"},"#"),(0,t.Uk)(" IDE 编辑器")],-1),l={class:"custom-container tip"},r=(0,t.Wm)("p",{class:"custom-container-title"},"TIP",-1),c=(0,t.Uk)("请确保已阅读《"),d=(0,t.Uk)("准备工作 - 开发环境"),o=(0,t.Uk)("》，并且按照文档说明安装好相关软件及扩展。"),p=(0,t.Uk)("为保证代码风格统一，请使用 "),u={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("Visual Studio Code"),h=(0,t.Uk)(" 做为开发 IDE ，模板源码里已提供相关配置文件，可直接测试效果：在保存代码时，会自动对当前文件进行代码格式化操作。"),b=(0,t.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>无法实现自动格式化代码的效果，请随便打开一个 <code>.js</code> 或 <code>.vue</code> 文件，检查编辑器右下角的 ESLint 是否显示为✔️，如果显示为🚫，则需要点击并选择“Allow”。</p><p><img src="/fantastic-template/eslint1.png" alt=""><img src="/fantastic-template/eslint2.png" alt=""><img src="/fantastic-template/eslint3.png" alt=""></p></div><h2 id="husky-lint-staged" tabindex="-1"><a class="header-anchor" href="#husky-lint-staged" aria-hidden="true">#</a> husky &amp; lint-staged</h2>',2),g=(0,t.Uk)("IDE 能做的事比较有限，仅对代码的写法规范进行格式化，对于用户没发现的错误代码，则需要借助 "),k={href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("husky"),f=(0,t.Uk)(" 和 "),y={href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},x=(0,t.Uk)("lint-staged"),W=(0,t.Uk)(" 这两个依赖来解决，模板已默认集成该依赖。"),E=(0,t.uE)('<p>在提交代码时，husky 会通过 lint-staged 对 <code>./src</code> 目录下的 js vue scss 文件进行分别进行 eslint 和 stylelint 检测，如果有报错，则会阻止本次代码提交，直到开发者修改完所有错误代码后，才允许提交到 git 仓库。</p><p>这样可以确保 git 仓库里的代码不会有语法错误，在多人协作开发时尤为重要。</p><div class="custom-container tip"><p class="custom-container-title">更多</p><p>可通过修改 <code>.eslintignore</code> 和 <code>.stylelintignore</code> 忽略无需做代码规范校验的文件，例如在项目中引用了一些第三方的插件或组件，我们就可以将其进行忽略。</p></div><h2 id="配置代码规范" tabindex="-1"><a class="header-anchor" href="#配置代码规范" aria-hidden="true">#</a> 配置代码规范</h2><p>配置文件主要有 3 处，分别为 IDE 配置（<code>.editorconfig</code>）、ESLint 配置（<code>.eslintrc.js</code> 和 <code>.eslintignore</code>）、StyleLint 配置（<code>.stylelintrc</code> 和 <code>.stylelintignore</code>）。</p><p>以代码缩进举例，模板默认是以 4 空格进行缩进，如果要调整为 2 空格，则需要在 <code>.editorconfig</code> 里修改：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>indent_size = 2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 <code>.eslintrc.js</code> 里修改：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;indent&#39;: [2, 2, {\n    &#39;SwitchCase&#39;: 1\n}],\n\n...\n\n&#39;vue/html-indent&#39;: [2, 2],\n\n...\n\n&#39;vue/script-indent&#39;: [2, 2, {\n    &#39;switchCase&#39;: 1\n}]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在 <code>.stylelintrc</code> 里修改：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;indentation&quot;: 2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>修改完毕后，再分别执行下面两句命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> run lint:eslint\n<span class="token function">pnpm</span> run lint:stylelint\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>该操作会将代码进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。以上面的例子，当缩进规则调整后，我们无需手动去每个文件调整，通过命令可以自动应用新的缩进规则。</p><h2 id="关闭代码规范" tabindex="-1"><a class="header-anchor" href="#关闭代码规范" aria-hidden="true">#</a> 关闭代码规范</h2><p>如果不想使用 ESLint 和 stylelint 强制规范代码，可将 <code>src/</code> 目录分别加入 <code>.eslintignore</code> 和 <code>.stylelintignore</code> 进行忽略即可。</p>',16),U={render:function(e,n){const s=(0,t.up)("RouterLink"),U=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[a,i,(0,t.Wm)("div",l,[r,(0,t.Wm)("p",null,[c,(0,t.Wm)(s,{to:"/start.html#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83"},{default:(0,t.w5)((()=>[d])),_:1}),o])]),(0,t.Wm)("p",null,[p,(0,t.Wm)("a",u,[m,(0,t.Wm)(U)]),h]),b,(0,t.Wm)("p",null,[g,(0,t.Wm)("a",k,[v,(0,t.Wm)(U)]),f,(0,t.Wm)("a",y,[x,(0,t.Wm)(U)]),W]),E],64)}}}}]);