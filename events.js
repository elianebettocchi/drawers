
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('events').addEventListener('click', function () {
        let rolledValue = Math.floor(Math.random() * 45)
        document.getElementById('events').src = `./events/${rolledValue}.png`

    })

    addEventListener('click', function () {
        allRolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    })
})

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
}  