(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n("Fobl");function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},BdtC:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("qhky"),i=n("Wbzz");var c=function(e){var t=e.children,n=e.color,a=e.pageContext.header;return o.a.createElement(i.StaticQuery,{query:"3649515864",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.b,{title:e.site.siteMetadata.title},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:"blogpage"},o.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),o.a.createElement("div",{className:"blogText"},o.a.createElement("h1",{title:a,color:n}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"Questions? Suggestions? Compliments? Tips to make this post better? I'd love to hear your thoughts ",o.a.createElement("a",{href:"https://twitter.com/overjeer"},"on twitter")))))}})};t.a=function(e){return o.a.createElement(c,Object.assign({},e,{color:"#f9f9f9"}))}},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n("q1tI"),i=(a=r)&&a.__esModule?a:{default:a};var c=i.default.createContext({}),s=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){return i.default.createElement(l,null,(function(n){return i.default.createElement(e,o({},t,{components:t.components||n}))}))}};t.default=function(e){return i.default.createElement(s,{value:e.components},e.children)}},IRa9:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("zLVn"),o=n("dI71"),r=n("q1tI"),i=n.n(r),c=n("6qfE"),s=n("Zwh+"),l=n.n(s),m=n("BdtC"),p=["components"],u={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.a,n}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=Object(a.a)(e,p);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,n),components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"A background on background work in Android"),i.a.createElement(c.MDXTag,{name:"p",components:t},"When I first got into Android development, background services were kinda ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://android-developers.googleblog.com/2010/02/service-api-changes-starting-with.html"}},"unrestricted")),i.a.createElement(c.MDXTag,{name:"p",components:t},"Because the Services API is so ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"powerful")," and being able to do things in the background while persisting the app's ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://proandroiddev.com/android-internals-101-how-android-os-starts-you-application-e1c98a014c05#:~:text=According%20to%20dictionary%20definition%3A%20Zygote,thus%20achieving%20fast%20app%20launches."}},"process")," can\nactually affect the device's performance due to contention (Memory, CPU) and usage (battery), developers certainly have a responsibility to use services wisely."),i.a.createElement(c.MDXTag,{name:"p",components:t},"One more thing to note is progressive restrictions from Android 8.0's ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.android.com/about/versions/oreo/background"}},"background execution limits")),i.a.createElement(c.MDXTag,{name:"p",components:t},"My favourite API to do long running background processing in Android is thusly ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.android.com/topic/libraries/architecture/workmanager/advanced/long-running"}},"WorkManager")),i.a.createElement(c.MDXTag,{name:"h1",components:t},"Foreground services and notifications"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Of course Android supports long running operations that the user explicitly requests. These are run by posting status bar notifications and using ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.android.com/guide/components/foreground-services#notification-immediate"}},"foreground services")),i.a.createElement(c.MDXTag,{name:"p",components:t},"The rationale behind this is that"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"The user has explicitly requested a long running operation that can persist outside of the app being killed.")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"The notification is visible to the user throughout the duration of this long running operation."))),i.a.createElement(c.MDXTag,{name:"p",components:t},"So, I suppose the question here to ask is ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"what would happen if the user has explicitly turned off ALL notifications in the app's settings?")),i.a.createElement(c.MDXTag,{name:"p",components:t},"Let's find out by creating a sample app that does this."),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"First we create a Service and declare it in the app's ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"AndroidManifest.xml"))),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'    <service\n            android:name=".SomeService"\n            android:enabled="true"\n            android:exported="false" />\n')),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Create ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"SomeService"))),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'    class SomeService : Service() {\n\n        companion object {\n            const val CHANNEL_NAME = "serviceChannel"\n            const val CHANNEL_ID = "channelId"\n            const val TITLE = "SomeService up"\n            const val MESSAGE = "SomeService is now running"\n            val targetActivity = HomeActivity::class.java\n            const val NOTIFICATION_ID = 0\n        }\n\n        override fun onBind(intent: Intent): IBinder? = null\n\n        override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {\n            val target = Intent(this, targetActivity)\n            val targetIntent =\n                PendingIntent.getActivity(this, 1, target, PendingIntent.FLAG_UPDATE_CURRENT)\n\n            val notificationManager =\n                getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager\n            val notification = NotificationCompat.Builder(this, CHANNEL_ID)\n                .setContentTitle(TITLE)\n                .setContentText(MESSAGE)\n                .setNotificationSilent()\n                .setSmallIcon(R.drawable.ic_launcher_foreground)\n                .setContentIntent(targetIntent)\n                .build()\n\n            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\n                val channel = NotificationChannel(\n                    CHANNEL_ID,\n                    CHANNEL_NAME,\n                    NotificationManager.IMPORTANCE_DEFAULT\n                )\n                notificationManager.createNotificationChannel(channel)\n            }\n\n            if (Build.VERSION.SDK_INT >= 29) {\n                startForeground(startId, notification, ServiceInfo.FOREGROUND_SERVICE_TYPE_NONE)\n            } else {\n                startForeground(startId, notification)\n            }\n\n            serviceStarted = true\n            return START_NOT_STICKY\n        }\n\n        override fun stopService(name: Intent?): Boolean {\n            serviceStarted = false\n            return super.stopService(name)\n        }\n    }\n')),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"ServiceNotifier")," is a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Singleton")," that sets/unsets the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"serviceStarted")," flag. This is just for us to debug ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"SomeService")," when notifications are turned off.")),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"    object ServiceStartedNotifier {\n        var serviceStarted = false   \n    }\n")),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"HomeActivity")," is just the launcher activity.")),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'    class HomeActivity : AppCompatActivity() {\n        override fun onCreate(savedInstanceState: Bundle?) {\n            super.onCreate(savedInstanceState)\n            setContentView(R.layout.activity_main)\n\n            if (!serviceStarted) {\n                val serviceIntent = Intent(this, SomeService::class.java)\n                startService(serviceIntent)\n            }\n        \n        // poll for `SomeService` being up/ down.\n        val scope = CoroutineScope(Dispatchers.IO)\n        scope.launch {\n            while (true) {\n                delay(2000)\n                withContext(Dispatchers.Main) {\n                    txt_status.text = if (serviceStarted) "Service is up" else "Service is down"\n                }\n            }\n        }\n    }\n\n    // Not strictly required, but saves me from killing the service manually.\n    override fun onDestroy() {\n        super.onDestroy()\n        serviceStarted = false\n        stopService(Intent(this, SomeService::class.java))\n    }\n')),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"activity_main.xml")," is just an xml layout. I should probably have written this in Jetpack Compose!")),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'    <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"\n        xmlns:app="http://schemas.android.com/apk/res-auto"\n        xmlns:tools="http://schemas.android.com/tools"\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        tools:context=".HomeActivity">\n\n            <TextView\n            android:id="@+id/txt_status"\n            android:layout_width="match_parent"\n            android:layout_height="wrap_content"\n            android:layout_marginTop="16dp"\n            android:gravity="center"\n            android:textIsSelectable="true"\n            app:layout_constraintBottom_toBottomOf="parent"\n            app:layout_constraintEnd_toEndOf="parent"\n            app:layout_constraintStart_toStartOf="parent"\n            app:layout_constraintTop_toTopOf="parent" />\n    </androidx.constraintlayout.widget.ConstraintLayout>\n')),i.a.createElement("div",{align:"center"},i.a.createElement("h3",null," Ok, now for the big reveal"),i.a.createElement("video",{width:"30%",controls:!0,autostart:!0,autoPlay:!0,src:l.a,type:"video/mp4"}),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"That's right. For foreground services, if the user stops showing notifications, this just stops the service from posting notifications! However, the\nservice and its processing still seems to be working as normal")),i.a.createElement("img",{src:"https://media.giphy.com/media/aLdiZJmmx4OVW/giphy.gif"})))},t}(i.a.Component);d.isMDXComponent=!0},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n("q1tI"),c=(a=i)&&a.__esModule?a:{default:a},s=n("Fobl");function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p={inlineCode:"code",wrapper:"div"},u=function(e){function t(){return l(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,r=void 0===a?{}:a,i=e.children,s=e.components,l=void 0===s?{}:s,m=e.Layout,u=e.layoutProps,d=l[n+"."+t]||l[t]||p[t]||t;return m?c.default.createElement(m,o({components:l},u),c.default.createElement(d,r,i)):c.default.createElement(d,r,i)}}]),t}(i.Component);t.default=(0,s.withMDXComponents)(u)},"Zwh+":function(e,t,n){e.exports=n.p+"static/copy_pasta-a847dc822caecc2266a384fc0cc527fa.webm"}}]);
//# sourceMappingURL=component---src-blog-2022-04-18-the-curious-case-of-foreground-service-notifications-mdx-ccd753c62dc60ffd46a3.js.map