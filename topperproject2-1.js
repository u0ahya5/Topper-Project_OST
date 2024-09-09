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
// 사진 눌렀을때 오디오 재생
const images = document.querySelectorAll('.ostplayer img');
const audios = document.querySelectorAll('audio');

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        // 모든 오디오 정지 및 초기화
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });

        // 클릭한 이미지의 오디오 자동 재생
        const audio = document.getElementById(`audio${index + 1}`);
        audio.play();

        // 이미지 아래로 이동 애니메이션
        img.classList.add('move-down');
    });
});