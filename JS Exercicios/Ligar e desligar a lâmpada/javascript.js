// Desafio - Ligar/Desligar Lâmpada

var lampStatus = false;

function toggleLamp() {
    var lampImage = document.getElementById("lamp");
    lampStatus = !lampStatus;

    if (lampStatus) {
        lampImage.src = "lamp_on.png";
    } else {
        lampImage.src = "lamp_off.png";
    }
}
