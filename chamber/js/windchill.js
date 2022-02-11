let windchill = function (temp, windSpeed) {
    if (temp > 50) return -1.0;
    else if (windSpeed < 3) return -1.0;

    let chill = (35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16));
    return chill.toFixed(0);
}

const windSpeedSection = document.getElementById("wind-speed-value");
const tempSection = document.getElementById("temp-value");
let windSpeedVal = windSpeedSection.textContent;
windSpeedVal = parseInt(windSpeedVal);
let tempVal = tempSection.textContent;
tempVal = parseInt(tempVal);
console.log(windSpeedVal, tempVal)

let currentChill = windchill(tempVal, windSpeedVal);
if (currentChill === -1.0) {
    document.getElementById("windchill").textContent = "Windchill: N/A";
}
else {
    document.getElementById("windchill").textContent = `Windchill: ${currentChill}° F`;
}