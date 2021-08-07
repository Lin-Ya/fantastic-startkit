"use strict";(self.webpackChunkfantastic_template_docs=self.webpackChunkfantastic_template_docs||[]).push([[369],{3888:(e,a,t)=>{t.r(a),t.d(a,{data:()=>s});const s={key:"v-9d56c238",path:"/build.html",title:"构建与预览",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"构建",slug:"构建",children:[]},{level:2,title:"预览",slug:"预览",children:[]},{level:2,title:"压缩",slug:"压缩",children:[]},{level:2,title:"其它设置",slug:"其它设置",children:[]}],filePathRelative:"build.md",git:{updatedTime:1627204102e3,contributors:[{name:"hooray",email:"304327508@qq.com",commits:2}]}}},4880:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var s=t(9599);const n=(0,s.uE)('<h1 id="构建与预览" tabindex="-1"><a class="header-anchor" href="#构建与预览" aria-hidden="true">#</a> 构建与预览</h1><h2 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h2><p>项目开发完成之后，可以执行 <code>pnpm build</code> 命令进行构建，构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件。</p><p>如果是需要构建测试环境，则执行 <code>pnpm build:test</code> 命令，对应会在根目录生成 dist-test 文件夹。</p><h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2><p>生成好的 dist 文件夹一般需要部署至服务器才算部署发布成功，但为了保证构建出来的文件能正常运行，开发者通常希望能在本地先预览一下，可执行 <code>pnpm serve</code> 或 <code>pnpm serve:test</code> 命令预览不同环境构建出的文件夹。</p><h2 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h2><p>在环境配置文件里设置 <code>VITE_BUILD_COMPRESS</code> 即可在构建时生成 <code>.gz</code> 或 <code>.br</code> 文件。</p>',8),l=(0,s.Wm)("div",{class:"language-dot ext-dot"},[(0,s.Wm)("pre",{class:"language-dot"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token node"},"VITE_BUILD_COMPRESS"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token operator"},"="),(0,s.Uk)(),(0,s.Wm)("span",{class:"token attr-value"},"gzip"),(0,s.Uk)("\n")])])],-1),o=(0,s.Wm)("div",{class:"language-dot ext-dot"},[(0,s.Wm)("pre",{class:"language-dot"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token node"},"VITE_BUILD_COMPRESS"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token operator"},"="),(0,s.Uk)(),(0,s.Wm)("span",{class:"token attr-value"},"brotli"),(0,s.Uk)("\n")])])],-1),d=(0,s.Wm)("div",{class:"language-dot ext-dot"},[(0,s.Wm)("pre",{class:"language-dot"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token node"},"VITE_BUILD_COMPRESS"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token operator"},"="),(0,s.Uk)(),(0,s.Wm)("span",{class:"token attr-value"},"gzip"),(0,s.Wm)("span",{class:"token punctuation"},","),(0,s.Wm)("span",{class:"token node"},"brotli"),(0,s.Uk)("\n")])])],-1),c=(0,s.uE)('<p>brotli 是比 gzip 压缩率更高的算法，可以与 gzip 共存不会冲突。</p><p>两者均需要 nginx 安装指定模块并开启后才会生效。</p><h2 id="其它设置" tabindex="-1"><a class="header-anchor" href="#其它设置" aria-hidden="true">#</a> 其它设置</h2><p>在环境配置文件里除了可以设置压缩选项，还可设置：</p><div class="language-dot ext-dot"><pre class="language-dot"><code><span class="token comment"># 是否在打包时生成 sourcemap</span>\n<span class="token attr-name">VITE_BUILD_SOURCEMAP</span> <span class="token operator">=</span> <span class="token attr-value">true</span>\n<span class="token comment"># 是否在打包时删除 console 代码</span>\n<span class="token attr-name">VITE_BUILD_DROP_CONSOLE</span> <span class="token operator">=</span> <span class="token attr-value">true</span>\n</code></pre></div>',5),p={render:function(e,a){const t=(0,s.up)("CodeGroupItem"),p=(0,s.up)("CodeGroup");return(0,s.wg)(),(0,s.j4)(s.HY,null,[n,(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(t,{title:"开启 gzip"},{default:(0,s.w5)((()=>[l])),_:1}),(0,s.Wm)(t,{title:"开启 brotli"},{default:(0,s.w5)((()=>[o])),_:1}),(0,s.Wm)(t,{title:"同时开启 gzip 和 brotli"},{default:(0,s.w5)((()=>[d])),_:1})])),_:1}),c],64)}}}}]);