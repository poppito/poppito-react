(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{Fwcw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n("zLVn"),a=(n("q1tI"),n("7ljp")),o=n("B0wC"),r=n.n(o),l=["components"],s={slug:"2020-08-22-In-App-Reviews-PlayCore-API",title:"Finally! In-App Reviews for Android using Playcore",date:"2020-08-22 14:00 +1100",categories:"blog"},b={_frontmatter:s};function p(e){var t=e.components,n=Object(i.a)(e,l);return Object(a.b)("wrapper",Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"blogpage"},Object(a.b)("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),Object(a.b)("div",{className:"blogText"},Object(a.b)("h1",null,"Finally! In-App Reviews for Android using Playcore"),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("p",null,"One of the coolest things about writing iOS apps are it's high-level APIs, for example one of my favourite things is how you can prompt the user to leave a review\nwithout getting them to ever leave your app. The best part of this? The code to request a review is ALSO super concise, like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"import StoreKit\n\nclass SomeViewController: UIViewController {\n        override func viewDidLoad() {\n        super.viewDidload()\n        if (shouldShowRatingDialog) {\n            //does anyone even still run iOS 10.3? 🤔\n            if #available( iOS 10.3,*){\n                SKStoreReviewController.requestReview()\n            }\n        }\n    }\n}\n")),Object(a.b)("p",null,"See how easy that is 🤩"),Object(a.b)("p",null,"Well, until just recently this was not even possible in Android. But with the new Playcore API, this is totally doable and even though not as easy as it's iOS counterpart, it's not super difficult. ✅"),Object(a.b)("p",null,"To get started, we first pull in the ",Object(a.b)("inlineCode",{parentName:"p"},"PlayCore")," library into our app level ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle"),"'s dependencies block. This can of course be different if you define your dependencies elsewhere."),Object(a.b)("h3",null,"Gradle dependency"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"implementation 'com.google.android.play:core:1.8.0'\n")),Object(a.b)("p",null,"Next steps include thinking about how this screen can be presented to the end users. For example - presenting this option excessively might drive users away from reviewing your app, or worse yet, away from your app. The good thing about the StoreKit API on iOS is, you can just make the call to present the ",Object(a.b)("inlineCode",{parentName:"p"},"SKStoreReviewController")," and it automatically caps how often it appears for the user. Well, fret not, even the PlayCore In-app reviews API does this for us! This however, is a double-edged sword because when we first implement areas in our apps or games to prompt the user for a review, we want to ensure that it works! Well, on iOS the ",Object(a.b)("inlineCode",{parentName:"p"},"SKStoreReviewController")," actually always appears in a test build of the app, however on Android it's a little bit more complicated. More on that when we get to ",Object(a.b)("inlineCode",{parentName:"p"},"Testing")," below."),Object(a.b)("h3",null,"Implementation"),Object(a.b)("p",null,"To show users the prompt, I create a blocking ",Object(a.b)("inlineCode",{parentName:"p"},"ProgressBar"),", contained within a ",Object(a.b)("inlineCode",{parentName:"p"},"Framelayout")," like so. This is just an example, but it makes sense because the API is asynchronous, so there is a little bit of waiting for the user before the prompt can appear."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'<FrameLayout\n        android:layout_width="match_parent"\n        android:layout_height="match_parent">\n\n        <ProgressBar\n            android:id="@+id/progress_vocab_term"\n            android:layout_width="48dp"\n            android:layout_height="48dp"\n            android:layout_gravity="center"\n            android:visibility="gone" />\n    </FrameLayout>\n')),Object(a.b)("p",null,"As a rule of thumb, this can be presented when the user is already waiting for a screen to load within a game - such as a transition between level ups, or in my case, a slang term to finish loading! "),Object(a.b)("p",null,"The Playcore API gives us a ",Object(a.b)("inlineCode",{parentName:"p"},"ReviewManagerFactory")," to create an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"ReviewManager"),"."),Object(a.b)("p",null,"Called within an activity or a fragment, we can either use ",Object(a.b)("inlineCode",{parentName:"p"},"this")," (Activity) or ",Object(a.b)("inlineCode",{parentName:"p"},"requireContext()")," (Fragment)"),Object(a.b)("p",null,"Once available, we can ",Object(a.b)("inlineCode",{parentName:"p"},"requestReviewFlow()")," and add a ",Object(a.b)("inlineCode",{parentName:"p"},"completionListener")," as this is a deferred ",Object(a.b)("inlineCode",{parentName:"p"},"Task"),", because of asynchronous nature. This is also about the time you would show a blocking ",Object(a.b)("inlineCode",{parentName:"p"},"ProgressBar"),"."),Object(a.b)("p",null,"This can be abstracted into a function that takes a boolean like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"fun toggleProgressBar(visible: Boolean) {\n    if (visible) {\n        progress_bar.visibility = View.Visible\n        content_view.visibility = View.Gone\n    } else {\n        progress_bar.visibility = View.Gone\n        contente_view.visibility = View.Visible\n    }\n}\n")),Object(a.b)("p",null,"Now we can start our In-app Review flow, first by grabbing the ",Object(a.b)("inlineCode",{parentName:"p"},"ReviewManager")," then requesting a ",Object(a.b)("inlineCode",{parentName:"p"},"ReviewInfo")," object by calling ",Object(a.b)("inlineCode",{parentName:"p"},"requestReviewFlow()"),", then passing it to ",Object(a.b)("inlineCode",{parentName:"p"},"launchReviewFlow()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"        val reviewManager = ReviewManagerFactory.create(this)\n        toggleProgressBar(visible = true)\n        reviewManager.requestReviewFlow().addOnCompleteListener {\n            if (it.isComplete) {\n                val info = it.result //your reviewInfo object\n                reviewManager.launchReviewFlow(this, info).addOnCompleteListener { \n                    //the flow completed successfully. The user either left you a review 👍🏽 or dismissed the review prompt 🙀\n                    toggleProgressBar(visible = false) \n                }\n            } else {\n                //something went wrong, the review flow couldn't be completed\n                toggleProgressBar(visible = false)\n            }\n        }\n")),Object(a.b)("h3",null,"Testing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Testing this behaviour is a little bit tricky. The easiest way is to create an ",Object(a.b)("inlineCode",{parentName:"p"},"Internal Testing Track")," build and rollout to your internal testers. I know this sounds like a bit of work but in practice this is super quick! Internal testing builds are available to testers within a few minutes of uploading (unless it's the first ever build, which can take up to 48 hours!). 👋")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Once the tester gets the build, you can ",Object(a.b)("strong",{parentName:"p"},"run local builds"),"! 👏")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In the testing track builds the review prompt has no quotas so test away! 🚗")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If a testing user leaves a review during the test, the prompt ",Object(a.b)("strong",{parentName:"p"},"won't")," show again. But the tester can just as easily go to the Play store ",Object(a.b)("inlineCode",{parentName:"p"},"Internal Testing")," build and remove their review to re-enable the prompt! 🤝")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"I would not recommend creating an ",Object(a.b)("inlineCode",{parentName:"p"},"Alpha")," track build! These go through reviews! And of course ",Object(a.b)("inlineCode",{parentName:"p"},"Beta")," track is open to everyone in the world, so definitely also not recommended. 🚫"))),Object(a.b)("div",{align:"center"},Object(a.b)("video",{width:"30%",controls:!0,autostart:!0,autoPlay:!0,src:r.a,type:"video/mp4"}))))}p.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=component---src-pages-2020-08-22-in-app-reviews-play-core-api-mdx-090f7c45237fdd959d45.js.map