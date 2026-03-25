// 1. Footer Dates
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// 2. Wind Chill Calculation logic
const temp = 8; // Static temperature value (°C)
const windSpeed = 10; // Static wind speed value (km/h)

const calculateWindChill = (t, s) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16));

const displayWindChill = () => {
    const wcElement = document.getElementById('windchill');

    // Requirements: Temp <= 10°C AND Wind > 4.8 km/h
    if (temp <= 10 && windSpeed > 4.8) {
        const result = calculateWindChill(temp, windSpeed);
        wcElement.textContent = `${result.toFixed(1)} °C`;
    } else {
        wcElement.textContent = "N/A";
    }
};

// Call function on load
window.addEventListener('load', displayWindChill);