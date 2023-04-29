const btn = document.querySelector(".button")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const green = document.getElementById("green");
function trafficLight() {

    green.classList.remove("active-green")
    setTimeout(function() {
        red.classList.add("active-red")
        yellow.classList.remove("active-yellow")
        green.classList.remove("active-green")
    }, 1000)

    setTimeout(function() {
        red.classList.remove("active-red")
        yellow.classList.add("active-yellow")
        green.classList.remove("active-green")
    }, 2000)

    setTimeout(function() {
        red.classList.remove("active-red")
        yellow.classList.remove("active-yellow")
        green.classList.add("active-green")
    }, 3000)


}




    btn.addEventListener('click',  () => {
       
            var timer = setInterval(function(){trafficLight()}, 4000)
            trafficLight()
            btn.classList.add("lightsOn")  
        

        
    })


