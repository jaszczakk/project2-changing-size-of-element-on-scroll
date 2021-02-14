const squere = document.createElement('div');
document.body.appendChild(squere);

let grow = true; //flaga, która daje nam wartości boolen, dzięki czemu będziemy mogli nie tylko zwiększać element, ale także zmiejszać

let size = 100; //wielkość kwadratu (wystarczy size, bo to kwadrat / przy prostokącie: width, height)
squere.style.width = size + "px"; //konkatenacja
squere.style.height = size + "px";

//maksymalna wielkość kwadratu
//window.innerWidth*0.5

window.addEventListener("scroll", function () {

    //pierwsza instrukcja warunkowa będzie zmieniać flagę
    if (size >= window.innerWidth / 2) {
        grow = !grow //negacja logiczna- to samo co: grow = false
    }
    else if (size == 0) {
        grow = !grow; //grow był false, ale przy osiągnięciu size==0 chcemy go znowu odwrócić, czyli grow=!grow -> grow=true
    }

    //druga instrukcja warunkowa dotyczy tego czy element ma rosnąć/maleć i wszystko zależne od flagi 
    if (grow) {
        size += 5; //za każdym razem zwiększy się size o 5px
        squere.style.width = size + "px" //za każdym razem też w css chcemy, aby ta wartość się zmieniła
        squere.style.height = size + "px";
    }
    else {
        size -= 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }

})