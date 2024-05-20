const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval (function time(){
    let dateToday = new Date();
    let hor = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hor < 10) hor = '0' + hor;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    
    horas.textContent = hor;
    minutos.textContent = min;
    segundos.textContent = sec;

})