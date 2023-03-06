let h1 = document.getElementById("click")
let p1 = document.getElementById("para")
h1.addEventListener("mouseover", myfunction1)

function myfunction1() {
    p1.style.display = "block";
    h1.style.color = "red"
}
