const butn = document.getElementById ("btn");

const redLight = document.getElementById ("red-light");
const yellowLight = document.getElementById ("yellow-light");
const greenLight = document.getElementById ("green-light");

const bodyStyle = document.getElementById("body-style");
redLight.style.backgroundColor = "red";

let x = 1;
butn.onclick = function () {
    x++;
    if (x === 4) {
        x = 1;
    }
    switch (x) {
        case 1:
            redLight.style.backgroundColor = "red";
            greenLight.style.backgroundColor = null;
            break;
        case 2:
            redLight.style.backgroundColor = null;
            yellowLight.style.backgroundColor = "yellow";
             break;
        case 3:
            yellowLight.style.backgroundColor = null;
            greenLight.style.backgroundColor = "green";
             break;
    }
}

butn.onmouseover = function () {
    butn.innerHTML = "Click";
}

butn.onmouseleave = function () {
    butn.innerHTML = "Change";
}
