
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('status').addEventListener('click', function () {
        let drawValue = Math.floor(Math.random() * 12)
        document.getElementById('status').src = `./status/${drawValue}.png`

    })

    addEventListener('click', function () {
        allDraws = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
})
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 