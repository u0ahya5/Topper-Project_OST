document.addEventListener('DOMContentLoaded', function() {
    const albums = document.querySelectorAll('.album');
    const audioPlayer = document.getElementById('audio-player');

    albums.forEach(album => {
        album.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio');
            audioPlayer.src = audioSrc;
            audioPlayer.play();
        });
    });
});
