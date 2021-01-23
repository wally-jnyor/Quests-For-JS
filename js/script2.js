
var backPage = document.getElementById('GoBack')

if (document.getElementById('GoBack')) {
    backPage.onclick = () => {
        window.location.href = "index.html"
    }
}