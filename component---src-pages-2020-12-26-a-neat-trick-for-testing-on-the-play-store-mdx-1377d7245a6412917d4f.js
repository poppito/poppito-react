(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{zLVn:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,o={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return a}))},zyWp:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return w})),n.d(e,"default",(function(){return k}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),s=n("VdIK"),i=n.n(s),r=n("3nlD"),l=n.n(r),c=n("nfPp"),b=n.n(c),u=n("a7rO"),h=n.n(u),p=n("bHFS"),d=n.n(p),g=n("FXXZ"),m=n.n(g),O=n("jrkP"),j=n.n(O),y=["components"],w={slug:"2020-12-26-A-neat-trick-for-testing-on-the-Play-Store",title:"A neat trick for testing on the Play store",date:"2020-12-26T00:00:00.000Z"},f={_frontmatter:w};function k(t){var e=t.components,n=Object(a.a)(t,y);return Object(o.b)("wrapper",Object.assign({},f,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"blogpage"},Object(o.b)("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),Object(o.b)("div",{className:"blogText"},Object(o.b)("h1",null,"A neat trick for testing on the Play store"),Object(o.b)("p",null,"Hope you've had a Merry Christmas 🎄 and kept safe in these COVID-19 times!"),Object(o.b)("br",null),Object(o.b)("h2",null,"Recap"),Object(o.b)("p",null,"Firstly, let's do a quick recap of how test apk and aab distribution works on the Play store:"),Object(o.b)("p",null,"Usually when we setup Internal and Alpha testers (testers within our own organisation), we add said testers' Google emails to a\ndistribution list on the Play Console, like so"),Object(o.b)("div",{className:"selectableImg"},Object(o.b)("img",{className:"image",src:i.a,width:"800"})),Object(o.b)("p",null,"Once this is set up, the user then goes to the internal or alpha testing link generated for the said track on the Play console:"),Object(o.b)("div",{className:"selectableImg"},Object(o.b)("img",{className:"image",src:l.a,width:"300"})),Object(o.b)("p",null,"When the user goes to the opt-in URL on their device, they can opt into testing the app like so"),Object(o.b)("p",null,"For more information about tracks, distribution lists and opt-in urls, I previously wrote ",Object(o.b)("a",{href:"/2019-09-28-Relasing-an-app",smooth:!0,duration:1e3},"this post")),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h2",null,"But what if..."),Object(o.b)("p",null,"Ok so your tester distribution list is receiving your binaries and testing's going real smooth. Glad to hear it. Because the tester distribution list\nuses the Play Store app to download test binaries there is a bit of a conundrum. Suppose they want to do a quick comparison with the current production app.\nDoes that mean they now have to go through the opt-out process? So everytime they want to switch between the alpha/beta tracks and the production trackc, this\nwould be super tedious, right? Sure would!"),Object(o.b)("p",null,"Well, here's a neat trick."),Object(o.b)("p",null,"You might already know that the Play Store app allows multiple login accounts. These can be switched by tapping the Avatar picture of your account:"),Object(o.b)("img",{className:"image",src:b.a,width:"500"}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,"Before doing this though, you need to clear the cache of the Play Store app. This is done by going to the Play Store's app's settings."),Object(o.b)("img",{className:"image",src:h.a,height:"500"}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{className:"image",src:d.a,height:"500"}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,"Now if you switch accounts to an account that is NOT on the tester distribution list, you should be able to download the production binary!"),Object(o.b)("img",{className:"image",src:m.a,height:"300"}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h1",null,"A quick gotcha"),Object(o.b)("p",null,"If you get a warning such as the one below -- the Play store cache has not been cleared properly! This means Play Store is remembering that one\nof your accounts is on the tester distribution list! Just follow the steps above to clear the cache and data for the Play Store app!ß"),Object(o.b)("img",{className:"image",src:j.a,height:"500"})))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-2020-12-26-a-neat-trick-for-testing-on-the-play-store-mdx-1377d7245a6412917d4f.js.map