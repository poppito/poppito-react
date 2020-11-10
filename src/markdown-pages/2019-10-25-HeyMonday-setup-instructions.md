---
slug: "/blog/hey-monday-setup"
title:  "HeyMonday - Setup"
date:   2019-10-20 13:42 +1100
categories: post
---

The setup for HeyMonday requires the same steps as any kind of CI that pushes binaries to the Play Console would.

To setup HeyMonday for your app you will need to go to your Play Console, go to Developer Account > API Access > Create a new Oauth client.

This will create a new Google API console project, either you can tap on "View in Google Developers Console" or browse to your API console and find the project that this created.

Once in there tap on "Credentials" and create an Oauth credential by adding the packagename - io.embry.heymonday and the SHA-1 signature provided.

Remember, you can always unlink the project or delete the API credential, you are always in total control.

<p align="center">
<iframe width="500" height="312" src="/images/heymonday.mp4" frameborder="0"> </iframe>
</p>