let i = document.getElementById("inc")
let d = document.getElementById("dec")
let r = document.getElementById("reset")
let t = document.getElementById("input")
i.addEventListener("click", myfunction1)
d.addEventListener("click",myfunction2)
r.addEventListener("click",myfunction3)

function myfunction1() {
    const value = Number(t.innerText);
    if (value >= 20) {
      alert("10+ values are not allowed");
    } else {
      t.innerText = value + 1;
    }
}
function myfunction2() {
    const value = Number(t.innerText);
    if (value > 0) {
      t.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
}
function myfunction3() {
    t.innerText = 0;

}