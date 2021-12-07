(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{399:function(t,s,a){"use strict";a.r(s);var i=a(54),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第13章-二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第13章-二叉树"}},[t._v("#")]),t._v(" 第13章 二叉树")]),t._v(" "),a("h2",{attrs:{id:"二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),a("h3",{attrs:{id:"二叉树的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的概念"}},[t._v("#")]),t._v(" 二叉树的概念")]),t._v(" "),a("p",[t._v("如果树中的每一个节点最多只能由两个子节点，这样的树就称为二叉树；")]),t._v(" "),a("h4",{attrs:{id:"二叉树的组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的组成"}},[t._v("#")]),t._v(" 二叉树的组成")]),t._v(" "),a("ul",[a("li",[t._v("二叉树可以为空，也就是没有节点；")]),t._v(" "),a("li",[t._v("若二叉树不为空，则它由根节点和称为其左子树 TL 和右子树 TR 的两个不相交的二叉树组成；")])]),t._v(" "),a("h4",{attrs:{id:"二叉树的五种形态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的五种形态"}},[t._v("#")]),t._v(" 二叉树的五种形态")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/JavaScript-数据结构与算法/image.15ycsg4fqoio.png",alt:"image"}})]),t._v(" "),a("p",[t._v("上图分别表示：空的二叉树、只有一个节点的二叉树、只有左子树 TL 的二叉树、只有右子树 TR 的二叉树和有左右两个子树的二叉树。")]),t._v(" "),a("h3",{attrs:{id:"二叉树的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的特性"}},[t._v("#")]),t._v(" 二叉树的特性")]),t._v(" "),a("ul",[a("li",[t._v("一个二叉树的第 i 层的最大节点树为："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mrow",[a("mi",[t._v("i")]),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^{i-1}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8247em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8247em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mbin mtight"},[t._v("−")]),a("span",{staticClass:"mord mtight"},[t._v("1")])])])])])])])])])])])]),t._v("，i >= 1；")]),t._v(" "),a("li",[t._v("深度为 k 的二叉树的最大节点总数为："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mrow",[a("mi",[t._v("k")]),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^{k-1}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8491em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8491em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mbin mtight"},[t._v("−")]),a("span",{staticClass:"mord mtight"},[t._v("1")])])])])])])])])])])])]),t._v(" ，k >= 1；")]),t._v(" "),a("li",[t._v("对任何非空二叉树，若 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("n")]),a("mn",[t._v("0")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n_{0}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.5806em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[a("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("0")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),t._v(" 表示叶子节点的个数，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("n")]),a("mn",[t._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n_{2}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.5806em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[a("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),t._v("表示度为 2 的非叶子节点个数，那么两者满足关系："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("n")]),a("mn",[t._v("0")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n_{0}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.5806em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[a("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("0")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),t._v(" = "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("n")]),a("mn",[t._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n_{2}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.5806em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[a("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),t._v(" + 1；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/dragon-liu/picBed@master/img/image.1l60fwgpefog.png",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"特殊的二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊的二叉树"}},[t._v("#")]),t._v(" 特殊的二叉树")]),t._v(" "),a("h4",{attrs:{id:"完美二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完美二叉树"}},[t._v("#")]),t._v(" 完美二叉树")]),t._v(" "),a("p",[t._v("完美二叉树（Perfect Binary Tree）也成为满二叉树（Full Binary Tree），在二叉树中，除了最下一层的叶子节点外，每层节点都有 2 个子节点，这就构成了完美二叉树。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/dragon-liu/picBed@master/img/image.3zc4cgezhm00.png",alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"完全二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完全二叉树"}},[t._v("#")]),t._v(" 完全二叉树")]),t._v(" "),a("p",[t._v("完全二叉树（Complete Binary Tree）:")]),t._v(" "),a("ul",[a("li",[t._v("除了二叉树最后一层外，其他各层的节点数都达到了最大值；")]),t._v(" "),a("li",[t._v("并且，最后一层的叶子节点从左向右是连续存在，只缺失右侧若干叶子节点；")]),t._v(" "),a("li",[t._v("完美二叉树是特殊的完全二叉树；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/dragon-liu/picBed@master/img/image.1lbmhmuki04g.png",alt:"image"}})]),t._v(" "),a("p",[t._v("上图不是完全二叉树, 因为D节点还没有右结点, 但是E节点就有了左右节点.")]),t._v(" "),a("h3",{attrs:{id:"二叉树的数据存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的数据存储"}},[t._v("#")]),t._v(" 二叉树的数据存储")]),t._v(" "),a("p",[t._v("常见的二叉树存储方式为数组和链表：")]),t._v(" "),a("h4",{attrs:{id:"使用数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用数组"}},[t._v("#")]),t._v(" 使用数组")]),t._v(" "),a("ul",[a("li",[t._v("完全二叉树：按从上到下，从左到右的方式存储数据。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/JavaScript-数据结构与算法/image.29w4k62b51og.png",alt:"image"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("节点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("E")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("F")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("I")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("9")])])])]),t._v(" "),a("p",[t._v("使用数组存储时，取数据的时候也十分方便：左子节点的序号等于父节点序号乘以2，右子节点的序号等于父节点序号*2 + 1 。")]),t._v(" "),a("ul",[a("li",[t._v("非完全二叉树：非完全二叉树需要转换成完全二叉树才能按照上面的方案存储，这样会浪费很大的存储空间。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/JavaScript-数据结构与算法/image.4jgiq6r2xee0.png",alt:"image"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("节点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("F")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("M")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("13")])])])]),t._v(" "),a("h4",{attrs:{id:"使用链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用链表"}},[t._v("#")]),t._v(" 使用链表")]),t._v(" "),a("p",[t._v("二叉树最常见的存储方式为链表：每一个节点封装成一个 Node，Node 中包含存储的数据、左节点的引用和右节点的引用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/JavaScript-数据结构与算法/image.2mlscfad5420.png",alt:"image"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);