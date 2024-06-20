document.addEventListener("DOMContentLoaded", () => {
    const email = "a.galiev@innopolis.university";
    const api = 'https://fwd.innopolis.university/api/hw2';
    const comicUrl = 'https://fwd.innopolis.university/api/comic';

    const content = document.querySelector(".comics_content");

    async function getComicsId() {
        try {
            const params = new URLSearchParams({ email: email });
            const response = await fetch(`${api}?${params.toString()}`);
            if (!response.ok) {
                throw new Error("Network isn't ok!");
            }
            const data = await response.json();
            console.log('Api response:', data);  // Для отладки
            return data;
        } catch (error) {
            console.error("Error fetching id", error);
            alert("Look to console");
        }
    }

    async function getComics(comicId) {
        try {
            const response = await fetch(`${comicUrl}?id=${comicId}`);
            if (!response.ok) {
                throw new Error("Network isn't ok!");
            }
            const comicsData = await response.json();
            console.log('Comic Data:', comicsData);  // Для отладки
            return comicsData;
        } catch (error) {
            console.error("Error fetching data", error);
            alert("Look to console");
        }
    }

    function display(comics) {
        const comicElem = document.createElement("div");
        comicElem.className = "comic";

        const title = document.createElement("h2");
        title.textContent = comics.safe_title;
        comicElem.appendChild(title);

        const imgElement = document.createElement('img');
        imgElement.src = comics.img;
        imgElement.alt = comics.alt;
        comicElem.appendChild(imgElement);

        const dateElem = document.createElement("time");
        const date = new Date(comics.year, comics.month - 1, comics.day);
        dateElem.textContent = date.toLocaleDateString();
        dateElem.dateTime = date.toISOString().split("T")[0];
        comicElem.appendChild(dateElem);

        const transcript = document.createElement("p");
        parseAndAppendText(comics.transcript, transcript);
        comicElem.appendChild(transcript);

        content.appendChild(comicElem);
    }

    function parseAndAppendText(text, parentElement) {
        const regex = /(\{{2}[^}]+\}{2})|(\[{2}[^]]+\]{2})|(\n)|([^{\[]+)/g;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match[1]) {
                const italicText = document.createElement("em");
                italicText.textContent = match[1].slice(2, -2); // убрал квадратные скобки здесь
                parentElement.appendChild(italicText);
            } else if (match[2]) {
                const boldText = document.createElement("strong");
                boldText.textContent = match[2].slice(2, -2); // убрал квадратные скобки здесь
                parentElement.appendChild(boldText);
            } else if (match[3]) {
                parentElement.appendChild(document.createElement("br"));
            } else if (match[4]) {
                parentElement.appendChild(document.createTextNode(match[4]));
            }
        }
    }



    async function loadComics() {
        const comicsId = await getComicsId();
        if (comicsId) {
            const comicsData = await getComics(comicsId);
            if (comicsData) {
                display(comicsData);
            }
        }
    }

    loadComics();
});
