(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n("Fobl");function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},"9OPa":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("zLVn"),o=n("dI71"),r=n("q1tI"),i=n.n(r),c=n("6qfE"),l=n("spDf"),p=n.n(l),u=["components"],s=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=null,n}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.components;Object(a.a)(e,u);return i.a.createElement(c.MDXTag,{name:"wrapper",components:t},i.a.createElement("div",{className:"blogpage"},i.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),i.a.createElement("div",{className:"blogText"},i.a.createElement(c.MDXTag,{name:"h2",components:t},"Android Q Beta."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Its super easy to just ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.google.com/android/beta"}},"opt-in")," into the Android Beta program and test out the Android Q Beta! But if you're without a Pixel device, pretty much good luck. Nah, I sussed it out."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Steps:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Get the Android Studio 3.4 (current RC is ok).")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Get the Android Q SDK (it will probably say Android Q Preview).")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"In your app level ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build.gradle"),", change your ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"compileSdkVersion 'android-Q'")," and your\n",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"targetSdkVersion 'Q'")," (Why are these TWO DIFFERENT VALUES!?!? SUPER CONFUSING!)")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Update the emulator to 29+")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Profit.")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Now you're ready to test out some of the new features. Let's try ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SettingsPanel"),"s - a new feature that lets users change OS level settings within your app."))),i.a.createElement(c.MDXTag,{name:"p",components:t},"In an activity, define a button of sorts. In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onClickListener")," go:"),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"Intent intent = new Intent(Settings.Panel.ACTION_VOLUME);\nstartActivity(intent);\n")),i.a.createElement(c.MDXTag,{name:"p",components:t},"Here's what it looks like. Basically, the sound is not turned on, so when you tap on the pronunciation button, it doesn't work. Settings panels to the rescue! (even though the collapsible animation is super dodgey), you turn the volume on within the app and voila! it works. Sweet as!"),i.a.createElement("div",{align:"center"},i.a.createElement("video",{width:"30%",controls:!0,autostart:!0,autoPlay:!0,src:p.a}))))},t}(i.a.Component);s.isMDXComponent=!0},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n("q1tI"),i=(a=r)&&a.__esModule?a:{default:a};var c=i.default.createContext({}),l=c.Provider,p=c.Consumer;t.withMDXComponents=function(e){return function(t){return i.default.createElement(p,null,(function(n){return i.default.createElement(e,o({},t,{components:t.components||n}))}))}};t.default=function(e){return i.default.createElement(l,{value:e.components},e.children)}},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n("q1tI"),c=(a=i)&&a.__esModule?a:{default:a},l=n("Fobl");function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return p(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,r=void 0===a?{}:a,i=e.children,l=e.components,p=void 0===l?{}:l,u=e.Layout,m=e.layoutProps,d=p[n+"."+t]||p[t]||s[t]||t;return u?c.default.createElement(u,o({components:p},m),c.default.createElement(d,r,i)):c.default.createElement(d,r,i)}}]),t}(i.Component);t.default=(0,l.withMDXComponents)(m)},spDf:function(e,t,n){e.exports=n.p+"static/elbow-2404fea15d18c6488eb3494ed7d2b2a9.webm"},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-blog-2019-03-18-testing-android-q-beta-without-an-actual-pixel-device-is-hard-mdx-82ca954cc8963947de6f.js.map