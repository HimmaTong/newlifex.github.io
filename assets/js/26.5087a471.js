(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{166:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"缓存架构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存架构设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存架构设计")]),t._v(" "),s("p",[t._v("核心原则："),s("code",[t._v("读多写少的数据，缓存起来，减少数据库访问，提升性能")])]),t._v(" "),s("h2",{attrs:{id:"单对象缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单对象缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 单对象缓存")]),t._v(" "),s("p",[t._v("单对象缓存就是"),s("code",[t._v("以主键字典逐行缓存数据")]),t._v("，常用于需要单行数据查询的场合，比如用户表等。"),s("br"),t._v("\n可以看做是一个字典，以主键为Key，实体对象为Value。每次查询先在字典里面搜索，找到则返回，找不到则去数据库查，缓存起来后再返回。"),s("br"),t._v("\n实体类内使用"),s("code",[t._v("Meta.SingleCache[key]")]),t._v("即可启用单对象缓存。")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("FindByID")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("Int32")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Meta"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SingleCache"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("缓存默认过期时间"),s("code",[t._v("60秒")]),t._v("，过期后更新。"),s("br"),t._v("\n任何添删改等改动数据库的操作，都将会清空缓存。")]),t._v(" "),s("h2",{attrs:{id:"缓存更新策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存更新策略","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存更新策略")]),t._v(" "),s("p",[t._v("在没有使用事务时，对数据表的任何添删改，将会让该表的实体缓存马上过期，以及清空单对象缓存。"),s("br"),t._v("\n使用事务时，每一个添删改操作仅修改缓存，直到事务提交或回滚才清空缓存。")])])}],!1,null,null,null);e.options.__file="SingleCache.md";a.default=e.exports}}]);