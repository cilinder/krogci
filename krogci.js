last_clicked = 0;

function button(i) {
    var old = document.getElementById("krog" + last_clicked);
    if (old) old.style.display = "none";

    last_clicked = i;

    var now = document.getElementById("krog" + i);
    now.style.display = "block";
}