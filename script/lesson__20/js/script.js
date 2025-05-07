"use strict";
class Star {
    constructor(step, interval) {
        this.step = step;
        this.interval = interval;
        this.scale = 0.5;
        this.opacity = 1;
        this.brightness = 1;
        this.image = this.getRandomPlanetImage();
    }

    getRandomNum(max) {
        return Math.floor(Math.random() * max + 1);
    }

    getRandomPlanetImage() {
        const planets = [
            "url(./img/planet1.png)",
            "url(./img/planet2.png)",
            "url(./img/planet3.png)",
            "url(./img/planet4.png)"
        ];
        return planets[Math.floor(Math.random() * planets.length)];
    }

    setRandomPosition() {
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        this.starEl.style.left = `${posX}px`;
        this.starEl.style.top = `${posY}px`;
    }

    starSize() {
        const size = this.getRandomNum(10);
        this.starEl.style.width = `${size}px`;
        this.starEl.style.height = `${size}px`;
    }

    starsUpdate() {
        this.scale += 0.1;
        this.opacity -= 0.05;
        this.brightness = 0.8 + Math.random() * 0.4;

        if (this.scale >= this.step) {
            this.scale = 4;
            this.opacity = 1;
            this.starEl.style.transform = `scale(${this.scale})`;
            this.starEl.style.opacity = this.opacity;
            this.starEl.style.filter = `brightness(${this.brightness})`;

            this.setRandomPosition();
        }

        this.starEl.style.transform = `scale(${this.scale})`;
        this.starEl.style.opacity = this.opacity;
        this.starEl.style.filter = `brightness(${this.brightness})`;
    }

    render() {
        const starEl = document.createElement("div");
        this.starEl = starEl;

        starEl.classList.add("star");
        starEl.style.backgroundImage = this.image;
        starEl.style.transform = `scale(${this.scale})`;
        starEl.style.opacity = this.opacity;
        document.body.appendChild(starEl);

        this.starSize();
        this.setRandomPosition();

        setInterval(() => {
            this.starsUpdate();
        }, this.getRandomNum(this.interval));
    }
}

for (let i = 0; i < 300; i++) {
    const star = new Star(1, Math.random() * 10000 + 30000);
    star.render();
}


///музика
// const audio = document.getElementById('bgMusic');
// const button = document.getElementById('toggleMusic');

button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().then(() => {
            button.textContent = '🔊 Вимкнути звук';
        }).catch(error => {
            console.log('Error playing audio:', error);
            button.textContent = '🔇 Увімкнути звук';
        });
    } else {
        audio.pause();
        button.textContent = '🔇 Увімкнути звук';
    }
});