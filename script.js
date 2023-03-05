const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "green";
});



function myfunction() {
    document.getElementById("music").innerText = "audio is paused"
}
function myfunction2() {
    document.getElementById("music").innerText = "audio is playing"
}

document.addEventListener("click",hello);
function hello() {
    document.getElementById("js").innerText = "Namaste";
}

function hey(){
    document.getElementById("btn").innerText = "namaste";
    document.getElementById("btn").style.color = "green";
    document.getElementById("btn").style.padding = "25px";
    document.getElementById("btn").style.backgroundColor = "blue"
    document.getElementById("btn").style.borderRadius = "10px"
    
}