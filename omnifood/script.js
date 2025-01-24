
// Listening to menu open and close clicks
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".header").style.left = "-100%";
    document.querySelector(".hamburger").style.display = "inline";
});

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".header").style.left = "0%";
    document.querySelector(".hamburger").style.display = "none";
});

