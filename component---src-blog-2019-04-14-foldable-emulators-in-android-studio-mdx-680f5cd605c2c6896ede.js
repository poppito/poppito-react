(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n("Fobl");function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},BdtC:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("qhky"),l=n("Wbzz");var c=function(e){var t=e.children,n=e.color,a=e.pageContext.header;return r.a.createElement(l.StaticQuery,{query:"3649515864",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{title:e.site.siteMetadata.title},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{className:"blogpage"},r.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),r.a.createElement("div",{className:"blogText"},r.a.createElement("h1",{title:a,color:n}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Questions? Suggestions? Compliments? Tips to make this post better? I'd love to hear your thoughts ",r.a.createElement("a",{href:"https://twitter.com/overjeer"},"on twitter")))))}})};t.a=function(e){return r.a.createElement(c,Object.assign({},e,{color:"#f9f9f9"}))}},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n("q1tI"),l=(a=o)&&a.__esModule?a:{default:a};var c=l.default.createContext({}),i=c.Provider,u=c.Consumer;t.withMDXComponents=function(e){return function(t){return l.default.createElement(u,null,(function(n){return l.default.createElement(e,r({},t,{components:t.components||n}))}))}};t.default=function(e){return l.default.createElement(i,{value:e.components},e.children)}},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n("q1tI"),c=(a=l)&&a.__esModule?a:{default:a},i=n("Fobl");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,l=e.children,i=e.components,u=void 0===i?{}:i,s=e.Layout,p=e.layoutProps,f=u[n+"."+t]||u[t]||m[t]||t;return s?c.default.createElement(s,r({components:u},p),c.default.createElement(f,o,l)):c.default.createElement(f,o,l)}}]),t}(l.Component);t.default=(0,i.withMDXComponents)(p)},Sivg:function(e,t,n){e.exports=n.p+"static/foldable_emulators-636a6ab0313ca282cb55a78c39a56a38.mp4"},i12v:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("zLVn"),r=n("dI71"),o=n("q1tI"),l=n.n(o),c=n("6qfE"),i=n("Sivg"),u=n.n(i),s=n("BdtC"),m=["components"],p={},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=s.a,n}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=Object(a.a)(e,m);return l.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},l.a.createElement(c.MDXTag,{name:"h2",components:t},"Foldable emulators in Android Studio - or as I like to call it, the beginning of the end"),l.a.createElement(c.MDXTag,{name:"p",components:t},"I have been thinking about how one can test apps on foldables - there's no way I am going to invest in $2000+ on a handset - in fact I distinctly recall my first macbook pro was only really about $1600 (after some work discounts of course)."),l.a.createElement(c.MDXTag,{name:"p",components:t},"Anyway, looks like foldable emulators are available on Android Studio now (requires time investment), so I don't have to. Plus Samsung eww."),l.a.createElement(c.MDXTag,{name:"p",components:t},"Steps:"),l.a.createElement(c.MDXTag,{name:"ul",components:t},l.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Get AS 3.5 canary 10 or above.")),l.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Update the emulator to 29+")),l.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Get the latest Android Q beta")),l.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Create a new AVD by using the available 7.3” or 8” foldables.")),l.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Profit.")),l.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Bonus! apply changes (the new instant run) looks available in this version of AS also! (But that might warrant a different post)"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{align:"center"},l.a.createElement("h3",null," Here's what it looks like: "),l.a.createElement("video",{width:"30%",controls:!0,autostart:!0,autoPlay:!0,src:u.a,type:"video/mp4"})))},t}(l.a.Component);f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-blog-2019-04-14-foldable-emulators-in-android-studio-mdx-680f5cd605c2c6896ede.js.map