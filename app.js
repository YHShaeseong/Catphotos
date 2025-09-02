
document.querySelectorAll('.cat').forEach(img => {
    img.addEventListener('click', (e) => {
        // 🎵 소리 재생
        const audio = new Audio('./cat meow/meow.mp3');
        audio.play();
        
        // 🖼️ meow 이미지 생성
        const meowImg = document.createElement('img');
        meowImg.src = './cat images/meow.png';
        meowImg.className = 'meow-effect';
        
        // 📍 클릭한 위치에 배치
        const rect = e.target.getBoundingClientRect();
        meowImg.style.left = rect.left + 'px';
        meowImg.style.top = rect.top + 'px';

        document.body.appendChild(meowImg);
        
        // ⏰ 1.5초 후 제거
        setTimeout(() => meowImg.remove(), 1500);
        
        console.log('야옹! 🐱');
    });
});