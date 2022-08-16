// 4- Crear una web con un reloj que muestre la siguiente información:
function obtenerHora() {
    let fechaActual = new Date();
  
    let diaSemanas = [
      "Domingo",
      "Lunes",
      "Martes",
      " Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
  
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    //   console.log(diaSemanas[fechaActual.getDay()]);
    //   console.log(meses[fechaActual.getMonth()]);
  
    //   <p>Jueves 11 de Agosto de 2022</p>
  
    let parrafoFecha = document.querySelector("#fecha");
  
    parrafoFecha.innerHTML = `${
      diaSemanas[fechaActual.getDay()]
    } ${fechaActual.getDate()} de ${
      meses[fechaActual.getMonth()]
    } del ${fechaActual.getFullYear()}`;
  
    let parrafoHora = document.querySelector("#hora");
  
    let segundos = fechaActual.getSeconds()
    if(segundos <10){
      segundos = '0'+ segundos
    }
  
    parrafoHora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${segundos} `;  }
  setInterval(obtenerHora, 1000);
  