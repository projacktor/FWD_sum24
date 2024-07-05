import {useState} from "react";

export function useGalleryScroller(totalItems: number) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
    };

    const moveRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
    };

    return {currentIndex, moveLeft, moveRight};
}

export function showItem(index: number, headers: HTMLElement[], images: HTMLElement[], descriptions: HTMLElement[]): void {

        headers.forEach((header, i) => {
            header.style.display = (i === index) ? 'block' : 'none';
        });

        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });

        descriptions.forEach((desc, i) => {
            desc.style.display = (i === index) ? 'block' : 'none';
        });
}

export function changeScrollerColor(currentIndex: number, circles: SVGCircleElement[]): void {
        circles.forEach((circle, index) => {
            if (index === currentIndex) {
                circle.setAttribute("fill", "#FF00FF")
            } else {
                circle.setAttribute("fill", "#DDDDDD")
            }
        })
}
