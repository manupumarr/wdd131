const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const tempValue = 10;
const windValue = 5;

function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}

if (tempValue <= 10 && windValue > 4.8) {
    const chill = calculateWindChill(tempValue, windValue);

    document.querySelector("#chill").textContent = `${chill.toFixed(1)} °C`;
} else {
    document.querySelector("#chill").textContent = "N/A";
}