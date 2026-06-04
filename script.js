let horasInput = document.querySelector("#horas");
let minutosInput = document.querySelector("#minutos");
let segundosInput = document.querySelector("#segundos");

setInterval(() => {
    let date = new Date();

    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    horasInput.innerHTML = horas < 10 ? `0${horas}` : horas;
    minutosInput.innerHTML = minutos < 10 ? `0${minutos}` : minutos;
    segundosInput.innerHTML = segundos < 10 ? `0${segundos}` : segundos;

}, 1000);
