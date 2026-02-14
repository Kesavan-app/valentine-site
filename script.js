const textEl = document.getElementById("valentineText");
const noButton = document.querySelector(".no-button");

function handleYesClick() {
    // Redirect to yes.html
    window.location.href = "yes.html";
}

function moveNoButton() {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX) - noButton.offsetLeft;
    const randomY = Math.floor(Math.random() * maxY) - noButton.offsetTop;

    const randomScale = 1 + Math.random() * 0.5;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
}

// Mouse hover (desktop)
noButton.addEventListener("mouseenter", moveNoButton);

// Touch (mobile)
noButton.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Avoid triggering click after touch
    moveNoButton();
});
