const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');

function isLampBroken(){
    return lamp.scr.indexOff('quebrada')> -1
}
function LampOn(){
    if(!isLampBroken()){
        lamp.scr= '.ligada.jpg';
    }
}
function LampOff(){
    if(!isLampBroken()){
        lamp.scr= '.desligada.jpg';
    }
}