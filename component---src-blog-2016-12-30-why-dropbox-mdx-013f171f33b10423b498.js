(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n("Fobl");function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},BdtC:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("qhky"),i=n("Wbzz");var l=function(e){var t=e.children,n=e.color,a=e.pageContext.header;return r.a.createElement(i.StaticQuery,{query:"3649515864",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{title:e.site.siteMetadata.title},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{className:"blogpage"},r.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),r.a.createElement("div",{className:"blogText"},r.a.createElement("h1",{title:a,color:n}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Questions? Suggestions? Compliments? Tips to make this post better? I'd love to hear your thoughts! ",r.a.createElement("a",{href:"https://twitter.com/overjeer"},"tweet to me")," on the ol' Twitter!"))))}})};t.a=function(e){return r.a.createElement(l,Object.assign({},e,{color:"#f9f9f9"}))}},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n("q1tI"),i=(a=o)&&a.__esModule?a:{default:a};var l=i.default.createContext({}),c=l.Provider,s=l.Consumer;t.withMDXComponents=function(e){return function(t){return i.default.createElement(s,null,(function(n){return i.default.createElement(e,r({},t,{components:t.components||n}))}))}};t.default=function(e){return i.default.createElement(c,{value:e.components},e.children)}},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n("q1tI"),l=(a=i)&&a.__esModule?a:{default:a},c=n("Fobl");function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,i=e.children,c=e.components,s=void 0===c?{}:c,u=e.Layout,m=e.layoutProps,d=s[n+"."+t]||s[t]||p[t]||t;return u?l.default.createElement(u,r({components:s},m),l.default.createElement(d,o,i)):l.default.createElement(d,o,i)}}]),t}(i.Component);t.default=(0,c.withMDXComponents)(m)},wq35:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("zLVn"),r=n("dI71"),o=n("q1tI"),i=n.n(o),l=n("6qfE"),c=n("BdtC"),s=["components"],u={},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=c.a,n}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=Object(a.a)(e,s);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,n),components:t},i.a.createElement(l.MDXTag,{name:"h1",components:t},"Why Dropbox?"),i.a.createElement(l.MDXTag,{name:"p",components:t},"Well, it is official. I am killing the backend for my contact sync ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://play.google.com/store/apps/details?id=com.noni.embryio&hl=en"}},"app"),". When I first built it, in early 2014, I was teaching myself to code both in Java and in Python.\nI had also just applied to get into an accelerator - unfortunately which I got rejected from. I then applied to be a part of Microsoft's ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://bizspark.com"}},"Bizspark")," program, and it kinda worked! I got in.\nThat was pretty rad because I got a lot of Windows Azure credit. Life was awesome. Unfortunately, and I didn't realise at that time but I was taking on too much. I was trying to learn stuff,\nI was working full time and I was building stuff that probably needed someone to work full time on. Eventually, I kinda ended up changing careers and taking quite a bit of a paycut so unfortunately I cannot keep funding Azure compute as it is a sizeable cost every month."),i.a.createElement(l.MDXTag,{name:"p",components:t},"The main aim of the app was to give users total control of their contact data and also giving them a delete button to remove all traces of data that was being backed up - so eventually it only really\nmade sense to use a backup services provider that was:"),i.a.createElement(l.MDXTag,{name:"ul",components:t},i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"li"},"free.")),i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"li"},"offered oauth2.")),i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"li"},"let the user delete app data and revoke app permissions whenever they wanted.")),i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"li"},"popular. So, fewer users actually have to register for a new account."))),i.a.createElement(l.MDXTag,{name:"p",components:t},"And, so today, as I have just finished building the Address book sync Dropbox integration, I figured I'd try and provide some clarification around why the changes.These changes are pretty transparent and there is actually no change in functionality of the app.\nI am also kinda relieved because patching and updating servers, libraries and ensuring that Azure connectivity does not die is kind of a full-time DevOps role and I\nam very short on time. The app however is and will always remain free. Thanks for your understanding."))},t}(i.a.Component);p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-blog-2016-12-30-why-dropbox-mdx-013f171f33b10423b498.js.map