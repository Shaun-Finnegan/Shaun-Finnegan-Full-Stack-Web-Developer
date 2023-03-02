const textDisplay = document.getElementById('text');
const phrases = ["Hi", "I'm Shaun", "A Full Stack Web Developer", "from the U.K"];
let textPosition = 0;
let speed = 0;

function output(){
    textDisplay.innerHTML = phrases[0].substring(0, textPosition) + "<span>/u25ae</span>";

    if(textPosition++ != phrases[0].length){
        setTimeout(output, speed)
    }
}

window.addEventListener('load', output);