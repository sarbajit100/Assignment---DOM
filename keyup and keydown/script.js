let i = document.getElementById("input1")
let j = document.getElementById("input2")
i.addEventListener("keyup",myfunction1)
j.addEventListener("keydown",myfunction2)
function myfunction1() {
   i.value = i.value.toUpperCase();
   i.style.color = "blue"
}
function myfunction2() {
    j.value = j.value.toLowerCase();
    j.style.color = "red"
 }