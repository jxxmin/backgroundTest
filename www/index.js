document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Create foreground service
    MusicControls.create(
        {
            track:     'The track',
            artist:    'The artist',
            album:     'The album',
            isPlaying: true,
        }
    );

    startNextTrack();
}

let media = null;

async function startNextTrack() {
    console.log('Starting next track');

    // Simulate asynchronously fetching the next track
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Promise is resolved');

    media = new Media(
        'file:///android_asset/www/test.mp3',
        () => {
            console.log('Media: Success callback');
            if (media) {
                media.release();
            }
            startNextTrack();
        },
    );

    media.play();
}
