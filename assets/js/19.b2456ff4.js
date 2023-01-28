(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{424:function(t,n,e){"use strict";e.r(n);var r=e(2),a=Object(r.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://juejin.cn/post/7164939151668674596",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章地址"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"起源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#起源"}},[t._v("#")]),t._v(" 起源")]),t._v(" "),n("p",[t._v("面试官：“知道防抖和节流吗，简单地说说。”")]),t._v(" "),n("p",[t._v("此时我心中窃喜，这么简单，有手就行。然后就开始介绍起防抖节流的知识点。")]),t._v(" "),n("p",[t._v("我：“防抖是....，然后节流是....，它们的应用场景在....”")]),t._v(" "),n("p",[t._v("能说的东西都说到了，能覆盖的知识点都覆盖到了，结果面试官来一句：“嗯嗯好，给我手写一下防抖节流。”")]),t._v(" "),n("p",[t._v("这一刻我愣住了：“让我手写这两个....，我不会呀....”")]),t._v(" "),n("p",[t._v("最后结果可想而知。")]),t._v(" "),n("p",[t._v("于是乎，我便重整旗鼓，来面对这两座对我之前而言的大山 — 防抖和节流。")]),t._v(" "),n("h2",{attrs:{id:"防抖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防抖"}},[t._v("#")]),t._v(" 防抖")]),t._v(" "),n("p",[t._v("顾名思义，我们可以将防抖理解为是防止抖动。当我们在频繁地触发一个事件时，会引起不必要的性能损失，那么我们需要做的是让事件在停止触发后再触发，以此减少性能损失。")]),t._v(" "),n("p",[t._v("防抖就是要延迟执行，我们一直操作触发事件并且不执行，只有当停止操作后等才会执行。")]),t._v(" "),n("p",[n("strong",[t._v("防抖函数")]),t._v("的作用是控制函数在一定时间内的执行次数。简单点说就是通过防抖函数让某个触发事件在 "),n("code",[t._v("n")]),t._v(" 秒内只会被执行一次。")]),t._v(" "),n("h2",{attrs:{id:"节流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#节流"}},[t._v("#")]),t._v(" 节流")]),t._v(" "),n("p",[t._v("节流是指绑定事件后，通过动作触发事件，在这段时间内，如果动作又发生，忽略该动作，一直到事件执行完后才能重新触发。通俗的说就是控制高频执行的次数。")]),t._v(" "),n("p",[n("strong",[t._v("节流函数")]),t._v("的作用是在一个单位时间内最多只能触发一次函数执行，如果这个单位时间内多次触发函数，只能有一次生效。")]),t._v(" "),n("h2",{attrs:{id:"应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),n("p",[t._v("可能这样描述对刚接触防抖节流的小伙伴来说会有些不好完全理解，接下来通过分析一下它们的应用场景来深化它们的概念。")]),t._v(" "),n("h3",{attrs:{id:"防抖应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防抖应用场景"}},[t._v("#")]),t._v(" 防抖应用场景")]),t._v(" "),n("p",[t._v("防抖适合多次事件一次响应的情况。")]),t._v(" "),n("p",[t._v("比较典型的有搜索事件，用户在不断输入值时，用防抖来节约请求资源，只有最后一次回车才能返回结果。还有按钮点击事件，为了防止用户多次重复提交也会使用防抖函数。最后就是部分的电话号码输入的验证，要等停止输入后才会进行一次验证。")]),t._v(" "),n("h3",{attrs:{id:"节流应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#节流应用场景"}},[t._v("#")]),t._v(" 节流应用场景")]),t._v(" "),n("p",[t._v("节流适合大量事件按时间做平均分配触发。")]),t._v(" "),n("p",[t._v("比较典型的有监听滚动或 "),n("code",[t._v("resize")]),t._v(" 事件，比如是否滑到底部自动加载更多，调整窗口大小。另外还有一个就是像掘金写文章这里一样，有自动保存功能，我们一边写，它可以一边保存。剩下就比如说 "),n("code",[t._v("DOM")]),t._v(" 元素拖拽，以及游戏中的刷新率都是会使用到节流函数的。")]),t._v(" "),n("h2",{attrs:{id:"手写防抖节流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手写防抖节流"}},[t._v("#")]),t._v(" 手写防抖节流")]),t._v(" "),n("p",[t._v("介绍了它们的理论基础知识和应用场景后，现在来手写一下它们吧。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 防抖（简单版本）\nfunction debounce(fn, delay) {\n    let timer = null;\n    clearTimeout(timer); // 下次调用时会清除上次的timer， 然后重新延迟\n    timer = setTimeout(function(){\n        fn();\n    }, delay);\n}\n\n// 防抖（立即执行版本）\nfunction debounce(fn, wait) {\n    let timer = null\n    return function () {\n        let args = arguments\n        let now = !timer\n        timer && clearTimeout(timer)\n        timer = setTimeout(() => {\n            timer = null\n        }, wait)\n        if (now) {\n            fn.apply(this, args)\n        }\n    }\n}\n\n// 节流（定时器版本）\nfunction throttle(fn, wait) {\n    let timer = null\n    return function () {\n        let context = this\n        let args = arguments\n        if (!timer) {\n            timer = setTimeout(() => {\n                timer = null\n                fn.apply(context, args)\n            }, wait)\n        }\n    }\n}\n")])])]),n("p",[t._v("防抖和节流的核心就是定时器，通过配合定时器来完成防抖节流函数的手写是很常见的方式。这里附上防抖函数的两种写法以及节流函数的一种写法，都可以参考研究。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[n("strong",[t._v("防抖和节流能有效减少浏览器引擎的损耗，防止出现页面堵塞卡顿现象，需要熟练掌握。")]),t._v(" 防抖和节流学习完后，还有其他的手写题等着我，接下来慢慢去学并记录下来。")])])}),[],!1,null,null,null);n.default=a.exports}}]);