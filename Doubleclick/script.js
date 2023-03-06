let h1 = document.getElementById("click")
let p1 = document.getElementById("para")
h1.addEventListener('dblclick', myfunction)

function myfunction() {
    p1.style.display = "block";
}