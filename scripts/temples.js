const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.textContent = "☰";

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    
    if (navigation.classList.contains("open")) {
        hamButton.textContent = "❌";
    } else {
        hamButton.textContent = "☰";
    }
});