let btnAzul = document.getElementById('btnAzul'),
   btnAmarillo = document.getElementById('btnAmarillo'),
   btnRojo = document.getElementById('btnRojo');
function obtenerFechaYHora () {
    //Traigo los elementos html
let fecha = document.getElementById(`fecha`);
let hora = document.getElementById(`hora`);


//funciones de tiempo
let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getFullYear());
console.log(fechaActual.getMonth());
console.log(fechaActual.getDate());
console.log(fechaActual.getDay());
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());
let dias = [`Domingo`,`Lunes`,`Martes`,`Miercoles`,`Jueves`,`Viernes`,`Sabado`];
let mes=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];
//Pj Jueves x de abril de x año

    fecha.innerHTML = `${dias[fechaActual.getDay()]} ${fechaActual.getDate()} de ${mes[fechaActual.getMonth()]} de ${fechaActual.getFullYear()}`;
    let horaActual = fechaActual.getHours(),
    minutosActuales = fechaActual.getMinutes(),
    segundosActuales =fechaActual.getSeconds()
    if(segundosActuales<10){
        segundosActuales='0'+segundosActuales;
    }
    if(minutosActuales<10){
        minutosActuales='0'+minutosActuales;
    }
    if(horaActual<10){
        horaActual='0'+horaActual;
    }
    hora.innerHTML = `${horaActual}:${minutosActuales}:${segundosActuales}`;
    
}
function cambiarEstilo(color){
    let section = document.getElementById('contenedorPrincipal');
    section.className = 'fs-1 ' + color;
}
setInterval(obtenerFechaYHora,1000);
btnAzul.addEventListener("click", () => cambiarEstilo(`text-blue`));
btnRojo.addEventListener("click", () => cambiarEstilo(`text-red`));
btnAmarillo.addEventListener("click", () => cambiarEstilo(`text-yellow`));