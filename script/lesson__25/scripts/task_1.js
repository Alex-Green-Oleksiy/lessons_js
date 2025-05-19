"use strict"
class ImageRender {
    render(src, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found');
            return;
        }

        // Спочатку показуємо лоадер
        const loader = document.querySelector('.loader');
        loader.style.display = 'block';

        // Створюємо зображення
        const img = document.createElement("img");
        img.src = src;
        img.className = "img-block";
        img.onload = () => {
            // При завантаженні зображення приховуємо лоадер
            loader.style.display = 'none';
            container.innerHTML += `<div class="image-wrapper">${img.outerHTML}</div>`;
        };
        img.onerror = () => {
            // При помилці завантаження приховуємо лоадер
            loader.style.display = 'none';
            container.innerHTML = '<div class="error-message">Помилка завантаження зображення</div>';
        };
    }
}

class ImageFetch {
    constructor(url, containerId) {
        this.url = url;
        this.containerId = containerId;
        this.intervalId = null;
    }

    async getImage() {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const imageUrl = data.message;
            const renderer = new ImageRender();
            renderer.render(imageUrl, this.containerId);
        } catch (error) {
            console.error('Error:', error);
            const container = document.getElementById(this.containerId);
            if (container) {
                container.innerHTML = '<div class="error-message">Помилка завантаження зображення</div>';
            }
        }
    }

    startAutoUpdate() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            this.getImage();
        }, 40);
    }

    stopAutoUpdate() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}

const imgFetch = new ImageFetch("https://dog.ceo/api/breeds/image/random", "result");
imgFetch.startAutoUpdate();