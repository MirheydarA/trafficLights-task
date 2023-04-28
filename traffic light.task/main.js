const btn = document.getElementsByTagName("button")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const green = document.getElementById("green");
function trafficLight() {

    green.classList.remove("active-green")
    setTimeout(function() {
        red.classList.add("active-red")
        yellow.classList.remove("active-yellow")
        green.classList.remove("active-green")
    }, 3000)

    setTimeout(function() {
        red.classList.remove("active-red")
        yellow.classList.add("active-yellow")
        green.classList.remove("active-green")
    }, 6000)

    setTimeout(function() {
        red.classList.remove("active-red")
        yellow.classList.remove("active-yellow")
        green.classList.add("active-green")
    }, 9000)


}



var timer = setInterval(function(){trafficLight()}, 10000)
trafficLight()

btn.addEventListener("click", (e) =>{
    e.target
} )
