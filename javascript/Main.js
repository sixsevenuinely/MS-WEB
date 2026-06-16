const EmailButton = document.getElementById("EmailButton");
const EmailURL = "mailto:reception@mscentrebedsandnorthants.com";

function OpenMailApp() {
    window.location.href = EmailURL;
}

if (EmailButton) {
    EmailButton.addEventListener("click", OpenMailApp);
}

