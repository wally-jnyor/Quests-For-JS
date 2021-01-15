var blueButton = document.getElementById('buttonBlue');
var redButton = document.getElementById('buttonRed');
var bodyHtml = document.querySelector('body');

blueButton.onclick = () => {
    bodyHtml.className = "fundoBlue";
}

redButton.onclick = () => {
    bodyHtml.className = "fundoRed";
}

