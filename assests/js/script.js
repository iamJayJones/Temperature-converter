function fahtocelc() {
  let celc = Number(prompt("Type Your Fahrenheit number"));
  let converted = ((celc - 32) * 5) / 9;
  if (celc == Number(celc)) {
    document.getElementById("celcbox").innerHTML =
      converted + " Degree Celcius";
  } else {
    document.getElementById("celcbox").innerHTML = "Enter Numbers only";
  }
}

function celctofah() {
  let fah = Number(prompt("Type Your Celcius number"));
  let converted = fah * 1.8 + 32;
  if (fah == Number(fah)) {
    document.getElementById("fahrbox").innerHTML = converted + " Fahrenheit";
  } else {
    document.getElementById("fahrbox").innerHTML = "Enter Numbers only";
  }
}
