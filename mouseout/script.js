let p = document.getElementById("image")
p.addEventListener("mouseover",myfunction1)
p.addEventListener("mouseout",myfunction2)
function myfunction1() {
    p.style.width = "400px"
    p.style.height = "400px"
}
function myfunction2() {
    p.style.width = "300px"
    p.style.height = "300px"
}