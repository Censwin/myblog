(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{524:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),a("p",[t._v("web 应用的生命周期往往从用户输入一串url按下回车或点击一个链接开始，那么当我们输入内容后一般会有两种情况：")]),t._v(" "),a("ol",[a("li",[t._v("输入内容不符合url规则，那么此时浏览器进程会自动生成一个带关键字的url并自动跳转")]),t._v(" "),a("li",[t._v("输入内容符合url规则，自动添加协议头并进行跳转")])]),t._v(" "),a("p",[t._v("值得注意的是跳转前 浏览器会执行 "),a("code",[t._v("onbeforeunload")]),t._v(" 可用于提示用户，具体用法如下")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用法1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onbeforeunload")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("return test()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v('\n    function test(){\n        return "页面即将跳转";\n    }\n')]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用法2")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onbeforeunload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"页面即将跳转"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用法3 react")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beforeunload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beforeunload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h2",{attrs:{id:"网络请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络请求"}},[t._v("#")]),t._v(" 网络请求")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("查找缓存")]),t._v(" "),a("p",[t._v("浏览器进程通过IPC将请求提交给网络进程，此时网络进程会开始查找强缓存，如果缓存在有效期内则直接返回。")])]),t._v(" "),a("li",[a("p",[t._v("DNS解析")]),t._v(" "),a("p",[t._v("通过DNS解析url获得具体请求IP地址，值得注意的是DNS同样有缓存，存在缓存则直接返回，如果不指定端口则添加默认端口，http默认端口为80，https端口为443")])]),t._v(" "),a("li",[a("p",[t._v("建立TCP连接")]),t._v(" "),a("p",[t._v("通过三次握手建立TCP连接，注意：由于同源机制，chrome 只能建立不超过6个TCP连接（各家浏览器各不相同）。")]),t._v(" "),a("p",[t._v("关于这一块的知识点另开一篇详细介绍")])]),t._v(" "),a("li",[a("p",[t._v("建立TLS连接（使用 https 的情况下）")])]),t._v(" "),a("li",[a("p",[t._v("发送http请求")]),t._v(" "),a("p",[t._v("http请求包含 请求行[方法、URL、协议]、请求头 Cookie 等、请求体 （get请求除外），这里不再赘述。")])]),t._v(" "),a("li",[a("p",[t._v("接收响应")]),t._v(" "),a("p",[t._v("响应包含 响应行[协议、状态码、状态消息]、响应头、响应体等")]),t._v(" "),a("p",[t._v("在众多 状态码 中我们需要特别注意的是 301(临时) / 302(永久) 这两个重定向状态码，当网络进程发现该状态码后，会在相应头中查找 "),a("code",[t._v("location")]),t._v(" 字段，然后获取该字段的值直接进行跳转，此时尚未轮到 "),a("code",[t._v("渲染进程")]),t._v(" 开始工作，所以从 "),a("code",[t._v("js")]),t._v(" 的层面来说我们无法拦截301 / 302 状态，除了一种情况：响应头中没有"),a("code",[t._v("location")]),t._v("此时会直接进行下一步工作。")])]),t._v(" "),a("li",[a("p",[t._v("完成了网络请求和响应，如果响应头中"),a("code",[t._v("Content-Type")]),t._v("的值是"),a("code",[t._v("text/html")]),t._v("，那么接下来就是浏览器的"),a("code",[t._v("解析")]),t._v("和"),a("code",[t._v("渲染")]),t._v("工作了")])])]),t._v(" "),a("h2",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("构建DOM树")]),t._v(" "),a("p",[t._v("由于浏览器无法理解HTML字符串，因此会将其转换为有意义且便于操作的数据结构，这种数据结构就是"),a("code",[t._v("DOM树")]),t._v(",在控制台输入"),a("code",[t._v("document")]),t._v("即可查看构建后的"),a("code",[t._v("DOM树")])])]),t._v(" "),a("li",[a("p",[t._v("样式计算")]),t._v(" "),a("p",[t._v("由于浏览器同样无法识别CSS样式文本，所以同样会将其转换为一种结构化对象，机构化处理过程有属性值标准化，每个节点具体样式（继承、层叠），最后输出 "),a("code",[t._v("styleSheet")]),t._v("在控制台输入"),a("code",[t._v("styleSheet")]),t._v(" 即可看到结构化后的CSS")])]),t._v(" "),a("li",[a("p",[t._v("生成布局树(DOM 树中元素的计划位置)")]),t._v(" "),a("p",[t._v("现在已经生成了"),a("code",[t._v("DOM树")]),t._v("和"),a("code",[t._v("styleSheet")]),t._v("，接下来则是计算可见元素的坐标位置，并生成一棵"),a("code",[t._v("布局树")]),t._v("(Layout Tree)")]),t._v(" "),a("ul",[a("li",[t._v("遍历生成的DOM树节点，将可见元素添加到布局树中")]),t._v(" "),a("li",[t._v("计算布局树各个节点的坐标位置")])])])]),t._v(" "),a("h2",{attrs:{id:"渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染"}},[t._v("#")]),t._v(" 渲染")]),t._v(" "),a("p",[t._v("在构建完布局树之后并不能直接进入渲染流程，开始进入"),a("code",[t._v("图层树生成")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("图层树生成")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1.1 渲染对象")]),t._v(" "),a("p",[t._v("从浏览器的渲染过程中我们知道，页面 HTML 会被解析成 DOM 树，每个 HTML 元素对应了树结构上的一个 node 节点，每个节点都会对应一个"),a("code",[t._v("渲染对象（RenderObject）")])])]),t._v(" "),a("li",[a("p",[t._v("2.1 渲染层")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("渲染对象")]),t._v("处于相同的坐标空间(Z轴坐标)时，都将归并到同一个"),a("code",[t._v("渲染层")]),t._v("中，渲染层将保证页面元素以正确的顺序堆叠，不同坐标空间的的渲染对象将形成多个渲染层，以体现它们的层叠关系。同时对于满足"),a("code",[t._v("BFC")]),t._v("条件的渲染对象，同样会创建新的渲染层。触发条件包括但不限于：")]),t._v(" "),a("ul",[a("li",[t._v("根元素()")]),t._v(" "),a("li",[t._v("有明确的定位属性（relative、fixed、sticky、absolute）")]),t._v(" "),a("li",[t._v("opacity < 1")]),t._v(" "),a("li",[t._v("有 CSS fliter 属性")]),t._v(" "),a("li",[t._v("有 CSS transform 属性且值不为 none")]),t._v(" "),a("li",[t._v("有对于 opacity、transform、fliter、backdrop-filter 应用动画")]),t._v(" "),a("li",[t._v("overflow 不为 visible")])]),t._v(" "),a("p",[t._v("DOM 节点和渲染对象是一一对应的，满足以上条件的渲染对象就能拥有独立的渲染层。但并不代表着它们完全独享了渲染层，由于不满足上述条件的渲染对象将会与其第一个拥有渲染层的父元素共用同一个渲染层，因此实际上，这些渲染对象会与它的部分子元素共用这个渲染层。")])]),t._v(" "),a("li",[a("p",[t._v("2.2 合成层")]),t._v(" "),a("p",[t._v("满足某种条件的渲染层，将会被提升为"),a("code",[t._v("合成层")]),t._v("，硬件加速的关键点就在于 "),a("strong",[t._v("合成层将独享一个图形层（GraphicsLayer）")]),t._v("，而其他普通渲染层将与其第一个拥有图形层的渲染层共用一个。合成层的触发条件包括但不限于：")]),t._v(" "),a("ul",[a("li",[t._v("3D transforms：translate3d、translateZ 等")]),t._v(" "),a("li",[t._v("video、canvas、iframe 等元素")]),t._v(" "),a("li",[t._v("通过 СSS 动画实现的 opacity 动画转换")]),t._v(" "),a("li",[t._v("position: fixed")]),t._v(" "),a("li",[t._v("具有 will-change 属性")]),t._v(" "),a("li",[t._v("animation 或者 transition 应用了 opacity、transform、fliter、backdropfilter")])])]),t._v(" "),a("li",[a("p",[t._v("2.3 图形层")]),t._v(" "),a("p",[t._v("图形层是一个负责生成最终准备呈现的内容图形的层模型，它拥有一个图形上下文，图形上下文会负责输出该层的位图。存储在共享内存中的位图将作为纹理上传到 GPU，最后由 GPU 将多个位图进行合成，然后绘制到屏幕上")])]),t._v(" "),a("li",[a("p",[t._v("3.1 利用合成层优化动画")]),t._v(" "),a("p",[t._v("我们可以使用 "),a("code",[t._v("will-change: transform")]),t._v(" 或者 "),a("code",[t._v("transform: translateZ(0)")]),t._v(" 来生成一个新的合成层，从而将CPU消耗高的元素通过GPU加速来达到优化的目的")]),t._v(" "),a("p",[t._v("同时也要注意避免隐式合成所导致的"),a("code",[t._v("层爆炸")])])])])]),t._v(" "),a("li",[a("p",[t._v("生成绘制列表")]),t._v(" "),a("p",[t._v("接下来渲染引擎会将图层的绘制拆分成一个个绘制指令，如绘制背景、绘制边框、填充颜色等等，然后将指令按顺序组合成一个待绘制列表并提交给"),a("code",[t._v("合成线程")])])]),t._v(" "),a("li",[a("p",[t._v("光栅化")]),t._v(" "),a("p",[t._v("绘制列表只是用来记录绘制顺序和绘制指令的列表，而实际上绘制操作是由渲染引擎中的合成线程来完成的")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1 分块")]),t._v(" "),a("p",[t._v("合成线程会将图层划分为图块（tile），这些图块的大小通常是 256x256 或者 512x512，然后"),a("strong",[t._v("合成线程会按照视口附近的图块来优先生成位图")]),t._v("，实际生成位图的操作是由栅格化来执行的")])]),t._v(" "),a("li",[a("p",[t._v("2 光栅化")]),t._v(" "),a("p",[t._v("渲染进程中专门维护了一个"),a("strong",[t._v("栅格化线程池")]),t._v("，专门负责把"),a("strong",[t._v("图块")]),t._v("转换为"),a("strong",[t._v("位图数据")]),t._v("，然后合成线程会选择视口附近的"),a("strong",[t._v("图块")]),t._v("，把它交给"),a("strong",[t._v("栅格化线程池")]),t._v("生成位图，生成位图的过程实际上都会使用 GPU 进行加速，生成的位图最后发送给"),a("code",[t._v("合成线程")]),t._v("。")])])])]),t._v(" "),a("li",[a("p",[t._v("合成与显示")]),t._v(" "),a("p",[t._v("一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程。浏览器进程里面有一个叫 viz 的组件，用来接收合成线程发过来的 DrawQuad 命令，然后根据 DrawQuad 命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);