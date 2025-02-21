const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');

function isLampBroken(){
    return lamp.src.indexOf('quebrada')> -1
}
function LampOn(){
    if(!isLampBroken()){
        lamp.src= 'ligada.jpg';
    }
}
function LampOff(){
    if(!isLampBroken()){
        lamp.src= 'desligada.jpg';
    }
}
turnOn.addEventListener('click',LampOn);
turnOff.addEventListener('click',LampOff);