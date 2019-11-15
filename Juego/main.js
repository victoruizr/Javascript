import { tresEnRaya } from "./modulo.js";

var a = new tresEnRaya();
var i = 0;

//Crear botones
function botones() {
    var boton = document.createElement("button");
    boton.innerHTML = "Reiniciar";
    boton.id = "reiniciar";
    boton.addEventListener("click", inicializar);
    document.body.appendChild(boton);

    var boton = document.createElement("button");
    boton.innerHTML = "salir";
    boton.id = "salir";
    boton.addEventListener("click", salir);
    document.body.appendChild(boton);
}


//Con esta funcion creamos el tablero del juego y iniciamos el juego
function crearTablero() {
    var tabla = document.createElement("table");
    tabla.setAttribute("id", "tablero");
    document.getElementById("interfaz").appendChild(tabla);

    for (var filas = 0; filas < 3; filas++) {
        var fila = document.createElement("tr");
        document.getElementById("tablero").appendChild(fila);
        for (var columnas = 0; columnas < 3; columnas++) {
            var columna = document.createElement("td");
            columna.id = i;
            columna.addEventListener("click", Clickar);
            document.getElementById("tablero").appendChild(columna);
            i++;
        }
    }
    botones();
}


function inicializar() {

    for (var filas = 0; filas <= 8; filas++) {
        var columna = document.getElementsByTagName("td")[filas];
        columna.innerText = "";
        columna.style.pointerEvents = "auto";
        a.tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        a.jugador = 0;
    }
}

function bloquear() {
    for (let i = 0; i <= 8; i++) {
        var td = document.getElementsByTagName("td")[i];
        td.style.pointerEvents = "none";
    }
}


function comprobarGanador() {
    var win = a.ganador();
    if (win == 1) {
        alert("Gano la x");
        bloquear();
    } else if (win == 2) {
        alert("Gano la y");
        bloquear();
    }
}

function Clickar(e) {
    var z = event.target.id;
    a.rellenarCelda(z);
    comprobarGanador();
    if (a.jugador == 1) {
        var fila = document.getElementById(z);
        var imag = document.createElement("img");
        imag.id = "x";
        imag.src = "O.png";
        fila.appendChild(imag);
    } else if (a.jugador == 2) {
        var fila = document.getElementById(z);
        var imag = document.createElement("img");
        imag.id = "y";
        imag.src = "x.png";
        fila.appendChild(imag);
    }
}
crearTablero();


