var bodyHtml = document.querySelector('body');
var blueButton = document.getElementById('buttonBlue');
var redButton = document.getElementById('buttonRed');
var changePage = document.getElementById('Bchange')

blueButton.onclick = () => {
    bodyHtml.className = "fundoBlue";
}

redButton.onclick = () => {
    bodyHtml.className = "fundoRed";
}


// PAGE 2

if (document.getElementById('Bchange')) {
    changePage.onclick = () => {
        window.location.href = "index2.html"
    }
}


