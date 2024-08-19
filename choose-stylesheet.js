function toggleStyleSheet() {
    var currentStyle = document.getElementById("stylesheet");

    var currentStyleFile = currentStyle.getAttribute("href");

    if (currentStyleFile != null && currentStyleFile == "style-default.css") {
        currentStyleFile = "style-alternate.css";
    } else {
        currentStyleFile = "style-default.css";
    }

    currentStyle.setAttribute("href", currentStyleFile);
    localStorage.setItem("stylesheet", currentStyleFile);
}

window.onload = function() {
    var currentStyleFile = localStorage.getItem("stylesheet");
    var currentStyle = document.getElementById("stylesheet");
    if (currentStyleFile != null) {
        currentStyle.setAttribute("href", currentStyleFile);
    }
}
