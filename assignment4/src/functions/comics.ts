import { Comic } from "../interfaces/comic";
import { formatDistanceToNow } from 'date-fns';

export function showComic() {
    const email: string = "a.galiev@innopolis.university";
    const api: string = 'https://fwd.innopolis.university/api/hw2';
    const comicUrl: string = 'https://fwd.innopolis.university/api/comic';

    const content = document.querySelector(".comics_content") as HTMLElement;

    async function getComicsId(): Promise<number | undefined> {
        try {
            const params = new URLSearchParams({email: email});
            const response = await fetch(`${api}?${params.toString()}`);
            if (!response.ok) {
                throw new Error("Network isn't ok!");
            }
            const data: number = await response.json();
            console.log('Api response:', data);
            return data;
        } catch (error) {
            console.error("Error fetching id", error);
            alert("Look to console");
            return undefined;
        }
    }

    async function getComics(comicId: number): Promise<Comic | undefined> {
        try {
            const response = await fetch(`${comicUrl}?id=${comicId}`);
            if (!response.ok) {
                throw new Error("Network isn't ok!");
            }
            const comicsData: Comic = await response.json();
            console.log('Comic Data:', comicsData);
            return comicsData;
        } catch (error) {
            console.error("Error fetching data", error);
            alert("Look to console");
            return undefined;
        }
    }

    function display(comics: Comic) {
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
        const date = new Date(parseInt(comics.year), parseInt(comics.month) - 1, parseInt(comics.day));
        dateElem.textContent = formatDistanceToNow(date, {addSuffix: true});
        dateElem.dateTime = date.toLocaleDateString() + " " + date.toISOString().split("T")[0] || "";
        comicElem.appendChild(dateElem);

        const transcript = document.createElement("p");
        parseAndAppendText(comics.transcript, transcript);
        comicElem.appendChild(transcript);

        content.appendChild(comicElem);
    }

    function parseAndAppendText(text: string, parentElement: HTMLElement): void {
        const regex: RegExp = /(\{{2}[^}]+\}{2})|(\[{2}[^]]+\]{2})|(\n)|([^{\[]+)/g;
        let match: RegExpExecArray | null;

        while ((match = regex.exec(text)) !== null) {
            if (match[1]) {
                const italicText = document.createElement("em");
                italicText.textContent = match[1].slice(2, -2);
                parentElement.appendChild(italicText);
            } else if (match[2]) {
                const boldText = document.createElement("strong");
                boldText.textContent = match[2].slice(2, -2);
                parentElement.appendChild(boldText);
            } else if (match[3]) {
                parentElement.appendChild(document.createElement("br"));
            } else if (match[4]) {
                parentElement.appendChild(document.createTextNode(match[4]));
            }
        }
    }

    async function loadComics(): Promise<void> {
        const comicsId = await getComicsId();
        if (comicsId) {
            const comicsData = await getComics(comicsId);
            if (comicsData) {
                display(comicsData);
            }
        }
    }

    loadComics();
}