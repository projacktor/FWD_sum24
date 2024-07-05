import {useState} from "react";

export function useGalleryScroller(totalItems: number) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveLeft = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
    };

    const moveRight = () => {
        setCurrentIndex(prevIndex => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
    };

    return { currentIndex, moveLeft, moveRight };
}

export function changeScrollerColor(currentIndex: number, setCircleColors: React.Dispatch<React.SetStateAction<string[]>>): void {
    // This function will update the circle colors based on currentIndex
    const updatedColors = ["#DDDDDD", "#DDDDDD", "#DDDDDD", "#DDDDDD"]; // Initialize with default colors
    updatedColors[currentIndex] = "#FF00FF"; // Update the color at currentIndex to highlight it

    setCircleColors(updatedColors);
}
