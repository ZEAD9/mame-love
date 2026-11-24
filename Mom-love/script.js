
const heart = document.getElementById("heart3d");

if (heart) {
    let rotateX = -10;
    let rotateY = 0;

    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    function updateHeart() {
        heart.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    heart.addEventListener("pointerdown", (e) => {
        dragging = true;
        lastX = e.clientX;
        lastY = e.clientY;

        heart.setPointerCapture(e.pointerId);
        heart.style.cursor = "grabbing";
    });

    heart.addEventListener("pointermove", (e) => {
        if (!dragging) return;

        const moveX = e.clientX - lastX;
        const moveY = e.clientY - lastY;

        rotateY += moveX * 0.9;
        rotateX -= moveY * 0.9;

        lastX = e.clientX;
        lastY = e.clientY;

        updateHeart();
    });

    function stopDragging() {
        dragging = false;
        heart.style.cursor = "grab";
    }

    heart.addEventListener("pointerup", stopDragging);
    heart.addEventListener("pointercancel", stopDragging);

    updateHeart();
}

const openGift = document.getElementById("openGift");

if (openGift) {
    openGift.addEventListener("click", () => {
        document.getElementById("gift").textContent = "💝";

        document.getElementById("surpriseMessage").style.display = "none";

        openGift.style.display = "none";

        document.getElementById("finalMessage").style.display = "block";
    });
}
