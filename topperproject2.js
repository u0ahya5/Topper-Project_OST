function playAudio() {
    console.log("playAudio()");
    var audio = document.getElementById('audio-player');
    audio.style.display = 'block'; // 오디오 플레이어를 표시
    audio.play().catch(function(error) {
        console.log('Autoplay was prevented:', error);
    });
}

// 버튼 클릭 시 오디오 재생
document.querySelector('.button').addEventListener('click', playAudio);

function playAudio() {
    console.log("playAudio()");
    var audio = document.getElementById('audio-player');
    audio.style.display = 'block'; // 오디오 플레이어를 표시
    audio.play().catch(function(error) {
        console.log('Autoplay was prevented:', error);
    });
}
