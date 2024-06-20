document.addEventListener('DOMContentLoaded', function () {
    const email = 'a.galiev@innopolis.university';
    const apiUrl = 'https://fwd.innopolis.university/api/hw2';
    const comicUrl = 'https://fwd.innopolis.university/api/comic';
    const comicsContent = document.querySelector('.comics_content');

    // Функция для получения идентификатора комикса
    async function getComicId() {
        try {
            const params = new URLSearchParams({ email: email });
            const response = await fetch(`${apiUrl}?${params.toString()}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.comic_id;
        } catch (error) {
            console.error('Error fetching comic ID:', error);
        }
    }

    // Функция для получения данных комикса по идентификатору
    async function getComicData(comicId) {
        try {
            const response = await fetch(`${comicUrl}?id=${comicId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const comicData = await response.json();
            return comicData;
        } catch (error) {
            console.error('Error fetching comic data:', error);
        }
    }

    // Функция для отображения данных комикса на странице
    function displayComic(comic) {
        const comicElement = document.createElement('div');
        comicElement.className = 'comic';

        const titleElement = document.createElement('h2');
        titleElement.textContent = comic.title;
        comicElement.appendChild(titleElement);

        const imgElement = document.createElement('img');
        imgElement.src = comic.img;
        imgElement.alt = comic.alt;
        comicElement.appendChild(imgElement);

        const dateElement = document.createElement('p');
        const date = new Date(comic.date);
        dateElement.textContent = date.toLocaleDateString();
        comicElement.appendChild(dateElement);

        comicsContent.appendChild(comicElement);
    }

    // Основная функция для выполнения всех шагов
    async function loadComic() {
        const comicId = await getComicId();
        if (comicId) {
            const comicData = await getComicData(comicId);
            if (comicData) {
                displayComic(comicData);
            }
        }
    }

    loadComic();
});
