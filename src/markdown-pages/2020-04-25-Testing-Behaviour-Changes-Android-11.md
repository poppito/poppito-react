---
slug: "/blog/testing-android-11-behaviour-changes"
title:  "Testing behaviour changes in Android 11"
date:   2020-04-25 19:00 +1100
categories: post
---

Android 11’s dev preview 3 came out yesterday! Usually I ALWAYS get new previews and betas and do a quick compatibility test for apps I support, but with everything that’s been going on, its been super hectic! 😷

Steps usually involve:
- Getting an emulator image for the preview 🤖
- Get the latest preview SDK 💽
- Change target and compile SDK versions ⌨️
- Read up on EVERY behaviour change that might impact your app. 📚

For Android 11 (or Android R specifically as it appears in the download manager), there are really only two subtle changes in your app level ```build.gradle```

```
android {
    compileSdkVersion 'android-R'
    ...

    defaultConfig {
        targetSdkVersion 'R'
        ...
    }
}
```

However, with this preview, I was pleasantly surprised to see targeting Android 11 and testing for app compatibility is SUPER easy. There’s a new dev option where you get to granularly turn on / turn off each behaviour change! 👏 

Quick example video: If you target Android 11, your app won’t be able to show toasts with custom UI from the background (heh, I am sure you’ve migrated your toast messages to snackbars by now, 😬) but to test this behaviour, there’s a nifty little dev option under “App compatibility changes” and it provides a switch to turn this behaviour change ON or OFF 🕹


<p align="center">
<iframe width="414" height="711" src="/images/behaviour_changes.webm" frameborder="0"> </iframe>
</p>