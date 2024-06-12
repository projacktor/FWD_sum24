document.addEventListener("DOMContentLoaded", () => {
    const leftMover = document.querySelector(".moveLeft");
    const rightMover = document.querySelector(".moveRight");
    const scroller = document.querySelector(".scroller");

    let currentIndex = 0;

    function showItem(index) {
        const headers = document.querySelectorAll(".gallery_heads .gallery_header");
        const images = document.querySelectorAll(".gallery_pictures .gallery_img");
        const descriptions = document.querySelectorAll(".gallery_desc .gallery_para");

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

    function moveLeft() {
        currentIndex = (currentIndex === 0) ? document.querySelectorAll(".gallery_heads .gallery_header").length - 1 : currentIndex - 1;
        showItem(currentIndex);
        changeScrollerColor();
    }

    function moveRight() {
        currentIndex = (currentIndex === document.querySelectorAll(".gallery_heads .gallery_header").length - 1) ? 0 : currentIndex + 1;
        showItem(currentIndex);
        changeScrollerColor();
    }

    function changeScrollerColor() {
        const circles = scroller.querySelectorAll("circle"); // Adjust the selector to target the correct element inside your SVG
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
