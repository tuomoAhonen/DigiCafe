function navbarmobile() {
    var x = document.getElementsByClassName("navbar-mobile-button");
    var y = document.getElementsByClassName("navbar-mobile");
    y[0].style.backgroundColor = "#82b74b";
    y[0].style.border = "5px solid #82b74b";
    x[0].style.marginTop = "8px";
    x[1].style.marginTop = "5px";
    x[2].style.marginTop = "5px";
    x[3].style.marginTop = "5px";

    for (var i = 0; i < x.length; i++){
        if (x[i].style.display === "block") {
            x[i].style.display = "none";
            y[0].style.backgroundColor = "#405d27";
            y[0].style.border = "5px solid #405d27";
        } else {
            x[i].style.display = "block";
            x[i].style.position = "relative";
            x[i].style.backgroundColor = "#405d27";
        }
    }
}

function navbarmobileclose() {
    var x = document.getElementsByClassName("navbar-mobile-button");
    var y = document.getElementsByClassName("navbar-mobile");
    y[0].style.backgroundColor = "#405d27";
    y[0].style.border = "5px solid #405d27";
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";
    x[3].style.display = "none";
}