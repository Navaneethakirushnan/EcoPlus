function calculateFootprint() {

    let electricity = Number(document.getElementById("electricity").value);
    let vehicle = Number(document.getElementById("vehicle").value);
    let lpg = Number(document.getElementById("lpg").value);
    let transport = Number(document.getElementById("transport").value);

    let carbon = (electricity * 0.82) +
                 (vehicle * 0.21) +
                 (lpg * 42) -
                 (transport * 0.05);

    if (carbon < 0) {
        carbon = 0;
    }

    document.getElementById("result").innerHTML =
        carbon.toFixed(2) + " kg CO2/month";

    if (carbon <= 100) {
        document.getElementById("message").innerHTML =
        " Excellent! Your carbon footprint is low.";
    }

    else if (carbon <= 250) {
        document.getElementById("message").innerHTML =
        " Good! There is room for improvement.";
    }

    else {
        document.getElementById("message").innerHTML =
        " Consider reducing electricity use and choosing sustainable transport more often.";
    }

}