// Function to convert temperature
function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var unitFrom = document.getElementById("unitFrom").value;
  var unitTo = document.getElementById("unitTo").value;
  var result;

  if (unitFrom === unitTo) {
    result = temperature; // No conversion needed
  } else if (unitFrom === "celsius") {
    if (unitTo === "fahrenheit") {
      result = (temperature * 9 / 5) + 32;
    } else if (unitTo === "kelvin") {
      result = temperature + 273.15;
    }
  } else if (unitFrom === "fahrenheit") {
    if (unitTo === "celsius") {
      result = (temperature - 32) * 5 / 9;
    } else if (unitTo === "kelvin") {
      result = (temperature + 459.67) * 5 / 9;
    }
  } else if (unitFrom === "kelvin") {
    if (unitTo === "celsius") {
      result = temperature - 273.15;
    } else if (unitTo === "fahrenheit") {
      result = (temperature * 9 / 5) - 459.67;
    }
  }

  document.getElementById("result").innerHTML = result.toFixed(2);
}

// Function to clear the input and result
function clearInput() {
  document.getElementById("temperature").value = "";
  document.getElementById("unitFrom").selectedIndex = 0;
  document.getElementById("unitTo").selectedIndex = 0;
  document.getElementById("result").innerHTML = "";
}

// Event listeners for the buttons
document.getElementById("convertBtn").addEventListener("click", convertTemperature);
document.getElementById("clearBtn").addEventListener("click", clearInput);
