# Problem Description
I am developping a music player app with react and cordova using the official cordova media plugin. 
Whenever a track is finished, the success callback gets executed, where the next track should get fetched. This is an asynchronous javascript operation. 

However, after being approximately 5 mins in the background, the app doesn't execute the asnychronous tasks anymore and just hangs. If there is only "normal" javascript in the callback and no awaits, it executes without problems even in the background.

To demonstrate the problem, I created this mini test app that shows the same behaviour.
This is the log:

**Log at the beginning**
1) Start fetching next track
2) Returned from fetching next track

_... track is playing ..._

3) Track is finished

**Log after being in the background for approximately 5mins**
1) Start fetching next track

_... app hangs forever ..._

# How to run the app
1) Execute ```npm run prepare``` and then ```npm run run``` to start up the app
2) Open the app, the music will start playing
3) Put the app in the background and wait for approx. 5mins - the music will stop
