(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{189:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),n("p",[t._v("实体类自带一个根据主键查询的方法，不论主键字段名以及类型")]),t._v(" "),t._m(4),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"./../cache/single-cache.html"}},[t._v("单体缓存")]),t._v("适用于需要单行数据查询的场合，比如用户表等。")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"./../cache/entity-cache.html"}},[t._v("实体缓存")]),t._v("适用于系统参数表、栏目分类表等。")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"查询数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 查询数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("本节介绍XCode查询数据的各种方法")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据主键查找")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindByKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FindByKey：{0}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带条件查找")]),t._v("\n            student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Sex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" SexKinds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("男"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Find：{0}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单对象缓存查找")]),t._v("\n            student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Meta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SingleCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SingleCache：{0}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带分页查找")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" page "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageParameter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Desc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Sort "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PageIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PageSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FirstOrDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FindAll：{0}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" student"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手写SQL查找")]),t._v("\n            student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Select * From  Student"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FirstOrDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FindAll SQL：{0}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" student"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实体缓存查找")]),t._v("\n            student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Meta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entities"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FirstOrDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FindAll Cache：{0}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" student"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"根据主键查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据主键查询","aria-hidden":"true"}},[this._v("#")]),this._v(" 根据主键查询")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 缓存")])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);