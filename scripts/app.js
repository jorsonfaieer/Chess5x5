const casillas = document.querySelectorAll('#casilla');

// Agrega los peones en la posicion inicial del juego
for (let i = 0; i < casillas.length; i++) {
    let peon = document.createElement("img");
    peon.classList.add('pieza');

    if (i > 4 && i < 10) {
    peon.src = "./images/peon-negro.svg";
    casillas[i].appendChild(peon);
  }

  if (i > 14 && i < 20) {
    peon.src = "./images/peon-blanco.svg";
    casillas[i].appendChild(peon);
  }
}

// Agrega la propiedad cursor pointer a las casillas que contienen piezas
for (let i = 0; i < casillas.length; i++){
    if(casillas[i].childElementCount != 0){
        casillas[i].style.cursor='pointer';
    }
}
