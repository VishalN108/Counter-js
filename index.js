let count = 0;
function counter() {
    document.getElementById("count").innerHTML = count;
    count = count + 1;
    delay= 5000;
    setTimeout(counter, 100);
}
counter();

let count2 = 0;
function counter2() {
    document.getElementById("count2").innerHTML = count2;
    count2 = count2 + 1;
    delay= 5000;
    setTimeout(counter2, 300);
}
counter2();
let count3 = 0;
function counter3() {
    document.getElementById("count3").innerHTML = count3;
    count3 = count3 + 1;
    delay= 5000;
    setTimeout(counter3, 500);
}
counter3();
let count4 = 0;
function counter4() {
    document.getElementById("count4").innerHTML = count4;
    count4 = count4 + 1;
    delay= 5000;
    setTimeout(counter4, 700);
}
counter4();
