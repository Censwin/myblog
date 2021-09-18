(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{542:function(t,s,n){"use strict";n.r(s);var e=n(6),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("众所周知react16.3及以上版本中废除了原有的"),n("code",[t._v("componentWillMount()")]),t._v("、"),n("code",[t._v("componentWillUpdate()")]),t._v("以及"),n("code",[t._v("componentWillReceiveProps()")]),t._v("三个生命周期函数。取而代之的是"),n("code",[t._v("static getDerivedStateFromProps()")]),t._v("以及"),n("code",[t._v("getSnapshotBeforeUpdate()")]),t._v("。")]),t._v(" "),n("p",[t._v("被废除的三个生命周期函数均出现在render之前")]),t._v(" "),n("h2",{attrs:{id:"componentwillmount"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#componentwillmount"}},[t._v("#")]),t._v(" componentWillMount")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("willMount中请求数据以优化白屏")]),t._v(" "),n("p",[t._v("在此生命周期进行请求数据来解决首页白屏问题，但是并没有解决掉，由于JavaScript中异步事件的性质，当您启动API调用时，浏览器会在此期间返回执行其他工作。当React渲染一个组件时，它不会等待"),n("code",[t._v("componentWillMount")]),t._v("它完成任何事情 - React继续前进并继续"),n("code",[t._v("render")]),t._v(",没有办法“暂停”渲染以等待数据到达。")]),t._v(" "),n("p",[t._v("你可能会误以为"),n("code",[t._v("componentWillMount")]),t._v("在 render 之前执行，早一点执行就早拿到请求结果；但是其实不管你请求多快，都赶不上首次 render，页面首次渲染依旧处于没有获取异步数据的状态。")])]),t._v(" "),n("li",[n("p",[t._v("服务端渲染重复执行")]),t._v(" "),n("p",[n("code",[t._v("componentWillMount")]),t._v("是服务端渲染唯一会调用的生命周期函数，如果你在此方法中请求数据，那么服务端渲染的时候，在服务端和客户端都会分别请求两次相同的数据")]),t._v(" "),n("p",[t._v("特别是有了 React Fiber，更有机会被调用多次，故请求不应该放在"),n("code",[t._v("componentWillMount")]),t._v("中，完全可由conductor或componentDidMount替代")])]),t._v(" "),n("li",[n("p",[t._v("利用componentWillMount以及componentWillUnmount对称性来进行订阅取消事件")]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("componentWillMount")]),t._v("中订阅事件，并在"),n("code",[t._v("componentWillUnmount")]),t._v("中取消掉相应的事件订阅。事实上只有调用"),n("code",[t._v("componentDidMount")]),t._v("后，React 才能保证稍后调用"),n("code",[t._v("componentWillUnmount")]),t._v("进行清理。而且服务端渲染时不会调用"),n("code",[t._v("componentWillUnmount")]),t._v("，可能导致内存泄露")])])]),t._v(" "),n("h2",{attrs:{id:"componentwillreceiveprops"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#componentwillreceiveprops"}},[t._v("#")]),t._v(" componentWillReceiveProps")]),t._v(" "),n("p",[t._v("官方说法是 无论props是否修改，只要父组件render就会执行该函数。")]),t._v(" "),n("p",[t._v("还有一点是如果组件自身的某个 state 跟父组件传入的 props 密切相关的话，那么可以在该方法中判断前后两个 props 是否相同，如果不同就根据 props 来更新组件自身的 state。")]),t._v(" "),n("p",[t._v("新生命周期方法"),n("code",[t._v("static getDerivedStateFromProps(props, state)")]),t._v("怎么用呢？")]),t._v(" "),n("blockquote",[n("p",[t._v("getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。")])]),t._v(" "),n("p",[t._v("从函数名字就可以看出大概意思：使用 props 来派生/更新 state。这就是重点了，但凡你想使用该函数，都必须出于该目的，使用它才是正确且符合规范的。")]),t._v(" "),n("p",[n("code",[t._v("getDerivedStateFromProps")]),t._v("在挂载和更新阶段都会执行，因为更新 state 这种需求不仅在 props 更新时存在，在 props 初始化时也是存在的。")]),t._v(" "),n("p",[t._v("而且"),n("code",[t._v("getDerivedStateFromProps")]),t._v("在组件自身 state 更新也会执行而"),n("code",[t._v("componentWillReceiveProps")]),t._v("方法执行则取决于父组件的是否触发重新渲染，也可以看出"),n("code",[t._v("getDerivedStateFromProps")]),t._v("并不是 "),n("code",[t._v("componentWillReceiveProps")]),t._v("方法的替代品.")]),t._v(" "),n("p",[t._v("值得注意的是 "),n("code",[t._v("componentWillReceiveProps")]),t._v(" 是一个静态函数，并不依赖于实例，也就无法在该生命周期中使用如: "),n("code",[t._v("this.fetch")]),t._v(" "),n("code",[t._v("this.setState")]),t._v(" 等操作，这也从某种意义上防止了死循环的产生，也从而避免对生命周期的滥用。")]),t._v(" "),n("p",[t._v("React 官方也是通过该限制，尽量保持生命周期行为的可控可预测，根源上帮助了我们避免不合理的编程方式，即一个 API 要保持单一性，做一件事的理念。")]),t._v(" "),n("p",[t._v("如下例子：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// before")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillReceiveProps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLogin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLogin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      isLogin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nextProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLogin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLogin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleClose")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDerivedStateFromProps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLogin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" prevState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLogin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被对比的props会被保存一份在state里")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      isLogin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nextProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLogin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getDerivedStateFromProps 的返回值会自动 setState")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("prevState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLogin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLogin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleClose")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br")])]),n("h2",{attrs:{id:"componentwillupdate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#componentwillupdate"}},[t._v("#")]),t._v(" componentWillUpdate")]),t._v(" "),n("ol",[n("li",[t._v("跟上面两个函数一样，该函数也发生在 render 之前，也存在一次更新被调用多次的可能")]),t._v(" "),n("li",[t._v("该方法常见的用法是在组件更新前，读取当前某个 DOM 元素的状态，并在 "),n("code",[t._v("componentDidUpdate")]),t._v(" 中进行相应的处理。但 React 16 版本后有 suspense、异步渲染机制等等，render 过程可以被分割成多次完成，还可以被暂停甚至回溯，这导致 "),n("code",[t._v("componentWillUpdate")]),t._v(" 和 "),n("code",[t._v("componentDidUpdate")]),t._v(" 执行前后可能会间隔很长时间，这导致 DOM 元素状态是不安全的，因为这时的值很有可能已经失效了。而且足够使用户进行交互操作更改当前组件的状态，这样可能会导致难以追踪的 BUG。")])]),t._v(" "),n("h4",{attrs:{id:"getsnapshotbeforeupdate-prevprops-prevstate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate-prevprops-prevstate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate(prevProps, prevState)")]),t._v(" "),n("p",[n("code",[t._v("getSnapshotBeforeUpdate")]),t._v(" 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为第三个参数传入"),n("code",[t._v("componentDidUpdate(prevProps, prevState, snapshot)")]),t._v(", 然后我们就可以根据返回值在cDU中更新组件状态，而不是直接在gSBU中直接更新组件状态。避免了 "),n("code",[t._v("componentWillUpdate")]),t._v(" 和 "),n("code",[t._v("componentDidUpdate")]),t._v(" 配合使用时将组件临时的状态数据存在组件实例上浪费内存，"),n("code",[t._v("getSnapshotBeforeUpdate")]),t._v(" 返回的数据在 "),n("code",[t._v("componentDidUpdate")]),t._v(" 中用完即被销毁，效率更高。"),n("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate",target:"_blank",rel:"noopener noreferrer"}},[t._v("看一个官方示例"),n("OutboundLink")],1)]),t._v(" "),n("img",{attrs:{src:t.$withBase("/react/reactLifecycle.png"),alt:"foo"}}),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("参考文献：")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/reactjs/rfcs/blob/main/text/0006-static-lifecycle-methods.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("rfrc"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://jacky-summer.github.io/2020/11/30/%E8%B0%88%E8%B0%88%E5%AF%B9-React-%E6%96%B0%E6%97%A7%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%9A%84%E7%90%86%E8%A7%A3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jacky-summer"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);