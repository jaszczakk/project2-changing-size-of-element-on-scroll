document.body.style.height = 10000 + "px";

const bar = document.createElement('div');
document.body.appendChild(bar);

let grow = true; //flaga, służąca jako przełącznik w sytuacji gdy wysokość paska(bar) jest większa / mniejsza niż 50% strony

let size = 100;

function changeHeight() {
    if (size >= window.innerHeight / 2) {
        grow = false;
    }
    else if (size <= 0) {
        grow = true;
    }

    if (grow) {
        size += 10;
        bar.style.backgroundColor = "green";
    }
    else {
        size -= 10;
        bar.style.backgroundColor = "red";
    }

    //żeby nie dublować kodu możemy wyciągnąć poza instrukcję if else - style, które są stałe (dla bar > && < 50% wys. strony) 
    bar.style.height = size + "px";
    bar.style.width = 100 + "%";
    bar.style.position = "fixed";
    bar.style.left = 0;
    bar.style.top = 0;
}

window.addEventListener("scroll", changeHeight);
