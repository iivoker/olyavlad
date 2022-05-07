const man = document.getElementById("man")
const rip = document.getElementById("rip")
const love = document.getElementById("love")

document.addEventListener("keydown",function(event){
jump();
});

function jump () {
man.classList.add("jump")
if (man.classList!= "jump"){
man.classList.add("jump")
}
setTimeout (function()
{man.classList.remove("jump")
},300)
}
let isAlive = setInterval ( function() {
    let manTop = parseInt(window.getComputedStyle(man).getPropertyValue("top"));
    let ripLeft = parseInt(window.getComputedStyle(rip).getPropertyValue("left"));

if (ripLeft < 70 && ripLeft > 0 && manTop >= 500) {
 alert("</3 :(")
    }
}, 10)
