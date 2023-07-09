const CelsiusEl = document.getElementById("Celcius");
const FahrenheitEl = document.getElementById("Fahrenheit");
const KelvinEl = document.getElementById("Kelvin");

function computeTemp() {
    // Add +  to avoid string Problem
    const currentvalue = +event.target.value;

    switch (event.target.name) {
        case "Celcius":
        KelvinEl.value = currentvalue + 273.15;
        FahrenheitEl.value = currentvalue * 1.8 + 32;
        break;
        case "Fahrenheit":
        KelvinEl.value = (currentvalue - 32) / 1.8 + 237.15;
        CelciusEl.value = (currentvalue - 32) / 1.8;
        break;
        case "Kelvin":
        CelciusEl.value = currentvalue - 273.15;
        FahrenheitEl.value = (currentvalue - 273.15) * 1.8 + 32;
        break;

        default:
        break;
    }
}