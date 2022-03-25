var min = 00
var seg = 00
var mile = 00
var minutos = document.querySelector("#minutos")
var segundos = document.querySelector("#segundos")
var milesimos = document.querySelector("#milesimos")
var botaoStart = document.querySelector("#button-start")
var botaoStop = document.querySelector("#button-stop")
var botaoReset = document.querySelector("#button-reset")
var Interval;

/* Antigo formato que fiz
botaoStart.onclick = function () {
   clearInterval(Interval)
   Interval = setInterval(startTime, 10)

}

botaoStop.onclick = function () {
   clearInterval(Interval)
}

botaoReset.onclick = function () {
   clearInterval(Interval)
   min = "00"
   seg = "00"
   mile = "00"
   minutos.innerHTML = min
   segundos.innerHTML = seg
   milesimos.innerHTML = mile
}
*/


botaoStart.addEventListener("click", function() {
   clearInterval(Interval)
   Interval = setInterval(startTime, 10)
})

botaoStop.addEventListener("click", function() {
   clearInterval(Interval)
})

botaoReset.addEventListener("click", function() {
   clearInterval(Interval)
   reset()
})

function startTime() {
   mile++
   if (mile < 9) {
      milesimos.innerHTML = "0" + mile
   }
   if (mile > 9) {
      milesimos.innerHTML = mile
   }
   if (mile > 99) {
      seg++
      segundos.innerHTML = "0" + seg
      mile = 0
      milesimos.innerHTML = "0" + 0
   }
   if (seg > 9)
      segundos.innerHTML = seg

   if (seg > 59) {
      min++
      minutos.innerHTML = "0" + min
      seg = 0
      segundos.innerHTML = "0" + 0
   }
   
}

function reset(){
   min = "00"
   seg = "00"
   mile = "00"
   minutos.innerHTML = min
   segundos.innerHTML = seg
   milesimos.innerHTML = mile
}