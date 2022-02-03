(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{yGTq:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return s}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=["components"],i={slug:"2017-01-21-Programmatic-button-generation",title:"Programmatically generating a button in Android",date:"2017-01-03 20:58 +1100",categories:"post"},l={_frontmatter:i};function s(t){var e=t.components,n=Object(a.a)(t,r);return Object(o.b)("wrapper",Object.assign({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"blogpage"},Object(o.b)("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),Object(o.b)("div",{className:"blogText"},Object(o.b)("h1",null,"Programmatically generating a button in Android"),Object(o.b)("p",null,"Sometimes your android app needs to forego of xml layouts and programmatically generate views instead. This particular example will deal with generating a simple button. Short post because I am tired and I just want to make sure that this is preserved somewhere for me to come back to later."),Object(o.b)("p",null,"But, first lets just talk about this really quickly. Why would we need to do this? There's at least a couple of scenarios where this would be required, actually."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You want to create a template Button class that you can then provide to all your activities. Or several Button classes with different ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/themes.html"},"Themes"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Or, you're trying to provide Buttons from an API from a web-based backend server. Attributes are being sent through and you need to generate Views from these attributes."))),Object(o.b)("p",null,"Anyway here's the code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"//Generally define a method that returns a Button object.\n    private Button addButton(Context context, String label, String tag) {\n    Button button = new Button(context);\n    button.setWidth(getPx(320, context.getResources()));\n    button.setHeight(getPx(50, context.getResources()));\n    button.setText(label);\n    button.setTag(tag);\n    button.setOnClickListener(this); //this refers to the calling activity.\n    return button;\n  }\n")),Object(o.b)("p",null,"You will need a ViewGroup object obviously that will need add this as a child View. To be able to detect when this Button is clicked, we check for the tag from the View Object passed to the onClickListener callback by calling the ",Object(o.b)("inlineCode",{parentName:"p"},"View.getTag()")," method.")))}s.isMDXComponent=!0},zLVn:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-2017-01-21-programmatic-button-generation-mdx-66cb9cf9e66d87876973.js.map