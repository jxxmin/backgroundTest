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

    playTrack();
}

let media = null;

async function playTrack() {
    console.log('1) Start fetching next track');
    await fetchNextTrack();
    console.log('2) Returned from fetching next track');

    media = new Media(
        'file:///android_asset/www/test.mp3',
        () => {
            // Success callback after track is finished
            console.log('3) Track is finished\n-----------------------');
            if (media) {
                media.release();
            }

            playTrack();
        },
    );

    media.play();
}

/**
 * Simulates fetching the next track asynchronously
 */
async function fetchNextTrack() {
    return new Promise(resolve => setTimeout(resolve, 5000));
}
