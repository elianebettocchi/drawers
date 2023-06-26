
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cards').addEventListener('click', function () {
        let rolledValue = Math.floor(Math.random() * 48)
        document.getElementById('cards').src = `./cards/${rolledValue}.png`

    })
    addEventListener('click', function () {
        // Reset the rolls values to zeroes
        allRolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        // Update the scoreboard
        //updateScoreboard()
    })
})
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 