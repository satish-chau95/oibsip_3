function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Check if temperature is a valid number
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid temperature.");
      return;
    }

    // Convert temperature
    var temperature = parseFloat(temperatureInput);
    var convertedTemp;

    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        convertedTemp = (temperature * 9 / 5) + 32;
      } else if (toUnit === "kelvin") {
        convertedTemp = temperature + 273.15;
      } else {
        convertedTemp = temperature;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        convertedTemp = (temperature - 32) * 5 / 9;
      } else if (toUnit === "kelvin") {
        convertedTemp = (temperature + 459.67) * 5 / 9;
      } else {
        convertedTemp = temperature;
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        convertedTemp = temperature - 273.15;
      } else if (toUnit === "fahrenheit") {
        convertedTemp = (temperature * 9 / 5) - 459.67;
      } else {
        convertedTemp = temperature;
      }
    }

    // Display result
    var resultElement = document.getElementById("result");
    resultElement.textContent = convertedTemp.toFixed(2) + " " + toUnit;
  }