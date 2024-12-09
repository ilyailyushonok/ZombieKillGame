let randomIndex
let hit = true
let isStarted=false
let interval

const items=document.querySelectorAll(".item")
const startBtn = document.getElementById("start-btn")

function getRandomIndex(array){
    return Math.floor(Math.random() * array.length)
}


const missCounter  = document.getElementById("miss-counter")
const zombieImg = document.createElement("img")
zombieImg.src="CSS/images/zombie.png"

const bu = document.getElementById("sound-bu")
const soundBtn = document.getElementById("sound-btn")

const hitImg = document.createElement("img")
hitImg.src = "CSS/images/blood.png"

const shot = document.getElementById("sound-shot")

const hitCounter =document.getElementById("hit-counter")

startBtn.onclick =function(){
if(!isStarted){
    //запустить
isStarted = true
playGame()
startBtn.innerText="STOP"
}
else{
    //остановить
isStarted=false
clearInterval(interval)
startBtn.innerText="START"
hitCounter.innerText=0
missCounter.innerText=0
zombieImg.remove()
hitImg.remove()
}
}
//game

function playGame(){

randomIndex=getRandomIndex(items)
items[randomIndex].append(zombieImg)

interval= setInterval(function() {
if(hit=== true){
hit = false
}
else {
missCounter.innerText++
}
randomIndex=getRandomIndex(items)
items[randomIndex].append(zombieImg)
hitImg.remove()
}, 1000)

}


soundBtn.onclick = function(){
if(bu.currentTime) {
bu.pause()
bu.currentTime = 0
soundBtn.innerHTML = "SOUND ON"
}
else{
bu.play()
soundBtn.innerHTML = "SOUND OFF"
}
}





zombieImg.onclick = function () {
hit=true
shot.currentTime = 0
shot.play()
zombieImg.remove()
items[randomIndex].append(hitImg)
hitCounter.innerText++

}