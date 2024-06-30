document.addEventListener("DOMContentLoaded", () => {
    const leftMover = document.querySelector(".moveLeft") as HTMLElement;
    const rightMover = document.querySelector(".moveRight") as HTMLElement;
    const scroller = document.querySelector(".scroller") as HTMLElement;

    let currentIndex = 0;

    function showItem(index: number): void {
        const headers = document.querySelectorAll(".gallery_heads .gallery_header") as NodeListOf<HTMLElement>;
        const images = document.querySelectorAll(".gallery_pictures .gallery_img") as NodeListOf<HTMLElement>;
        const descriptions = document.querySelectorAll(".gallery_desc .gallery_para") as NodeListOf<HTMLElement>;

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

    function moveLeft(): void {
        const totalItems: number = document.querySelectorAll(".gallery_heads .gallery_header").length;
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        showItem(currentIndex);
        changeScrollerColor();
    }

    function moveRight(): void {
        const totalItems: number = document.querySelectorAll(".gallery_heads .gallery_header").length;
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        showItem(currentIndex);
        changeScrollerColor();
    }

    function changeScrollerColor(): void {
        const circles = scroller.querySelectorAll("circle") as NodeListOf<SVGCircleElement>;
        circles.forEach((circle, index) => {
            if (index === currentIndex) {
                circle.setAttribute("fill", "#FF00FF")
            } else {
                circle.setAttribute("fill", "#DDDDDD")
            }
        })
    }

    leftMover.addEventListener("click", moveLeft);
    rightMover.addEventListener("click", moveRight);

    showItem(currentIndex);
    changeScrollerColor();
});
