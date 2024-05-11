let casa1 = 0;
let casa2 = 0;
let casa3 = 0;
let casa4 = 0;
let casa5 = 0;
let casa6 = 0;
let casa7 = 0;
let casa8 = 0;
let casa9 = 0;
let checarTurno = true;

function selecionarCasa(event) {
  const elemento = event.target;
  const id = elemento.id;
  if (id == "sCasa1" && casa1 == 0) {
    alert("Foi clicada");
    casa1 = 1;
    sCasa1.style.background = "white";
    if (checarTurno) {
      sCasa1.textContent = "X";
      checarTurno = false;
      sJogadorDaVez.textContent = "O";
      verificarVitoria();
    } else {
      sCasa1.textContent = "O";
      checarTurno = true;
      sJogadorDaVez.textContent = "X";
      verificarVitoria();
    }

  }
  else if (id == "sCasa2" && casa2 == 0) {
    alert("Foi clicada");
    casa2 = 1;
    sCasa2.style.background = "white";
    if (checarTurno) {
      sCasa2.textContent = "X";
      checarTurno = false;
      sJogadorDaVez.textContent = "O";
      verificarVitoria();
    } else {
      sCasa2.textContent = "O";
      checarTurno = true;
      sJogadorDaVez.textContent = "X"
      verificarVitoria();
    }
  }
  else if (id == "sCasa3" && casa3 == 0) {
    alert("Foi clicada");
    casa3 = 1;
    sCasa3.style.background = "white";
    if (checarTurno) {
      sCasa3.textContent = "X";
      checarTurno = false;
      sJogadorDaVez.textContent = "O"
      verificarVitoria();
    } else {
      sCasa3.textContent = "O";
      checarTurno = true;
      sJogadorDaVez.textContent = "X"
      verificarVitoria();
    }
  }
  else if (id == "sCasa4" && casa4 == 0) {
    alert("Foi clicada");
    casa4 = 1;
    sCasa4.style.background = "white";
    if (checarTurno) {
      sCasa4.textContent = "X";
      checarTurno = false;
      sJogadorDaVez.textContent = "O";
      verificarVitoria();
    } else {
      sCasa4.textContent = "O";
      checarTurno = true;
      sJogadorDaVez.textContent = "X";
      verificarVitoria();
    }
  }
  else if (id == "sCasa5" && casa5 == 0) {
    alert("Foi clicada");
    casa5 = 1;
    sCasa5.style.background = "white";
    if (checarTurno) {
      sCasa5.textContent = "X";
      checarTurno = false;
      sJogadorDaVez.textContent = "O";
      verificarVitoria();
    } else {
      sCasa5.textContent = "O";
      checarTurno = true;
      sJogadorDaVez.textContent = "X";
      verificarVitoria();
    }
  }
  else if (id == "sCasa6" && casa6 == 0) {
    alert("Foi clicada");
    casa6 = 1;
    sCasa6.style.background = "white";
    if (checarTurno) {
      sCasa6.textContent = "X";
      checarTurno = false;
      sJogadorDaVez.textContent = "O";
      verificarVitoria();
    } else {
      sCasa6.textContent = "O";
      checarTurno = true;
      sJogadorDaVez.textContent = "X";
      verificarVitoria();
    }

  }
  else if (id == "sCasa7" && casa7 == 0) {
    alert("Foi clicada");
    casa7 = 1;
    sCasa7.style.background = "white";
    if (checarTurno) {
      sCasa7.textContent = "X";
      checarTurno = false;
      sJogadorDaVez.textContent = "O";
      verificarVitoria();
    } else {
      sCasa7.textContent = "O";
      checarTurno = true;
      sJogadorDaVez.textContent = "X";
      verificarVitoria();
    }
  }
  else if (id == "sCasa8" && casa8 == 0) {
    alert("Foi clicada");
    casa8 = 1;
    sCasa8.style.background = "white";
    if (checarTurno) {
      sCasa8.textContent = "X";
      checarTurno = false;
      sJogadorDaVez.textContent = "O";
      verificarVitoria();
    } else {
      sCasa8.textContent = "O";
      checarTurno = true;
      sJogadorDaVez.textContent = "X";
      verificarVitoria();
    }
  }
  else if (id == "sCasa9" && casa9 == 0) {
    alert("Foi clicada");
    casa9 = 1;
    sCasa9.style.background = "white";
    if (checarTurno) {
      sCasa9.textContent = "X";
      checarTurno = false;
      sJogadorDaVez.textContent = "O";
      verificarVitoria();
    } else {
      sCasa9.textContent = "O";
      checarTurno = true;
      sJogadorDaVez.textContent = "X";
      verificarVitoria();
    }
  }
  else {
    alert("Não pode ser clicada");
  }

}


function verificarVitoria() {
  if (sCasa1.textContent == "X" && sCasa2.textContent == "X" && sCasa3.textContent == "X") {
    alert('Jogador X ganhou!!!!');
    sCasa1.style.background = "red";
    sCasa2.style.background = "red";
    sCasa3.style.background = "red";
  } else if (sCasa1.textContent == "O" && sCasa2.textContent == "O" && sCasa3.textContent == "O") {
    alert('Jogador O ganhou!!!!');
    sCasa1.style.background = "red";
    sCasa2.style.background = "red";
    sCasa3.style.background = "red";
  } else if (sCasa4.textContent == "X" && sCasa5.textContent == "X" && sCasa6.textContent == "X") {
    alert('Jogador X ganhou!!!!');
    sCasa4.style.background = "red";
    sCasa5.style.background = "red";
    sCasa6.style.background = "red";
  } else if (sCasa4.textContent == "O" && sCasa5.textContent == "O" && sCasa6.textContent == "O") {
    alert('Jogador O ganhou!!!!');
    sCasa4.style.background = "red";
    sCasa5.style.background = "red";
    sCasa6.style.background = "red";
  } else if (sCasa7.textContent == "X" && sCasa8.textContent == "X" && sCasa9.textContent == "X") {
    alert('Jogador X ganhou!!!!');
    sCasa7.style.background = "red";
    sCasa8.style.background = "red";
    sCasa9.style.background = "red";
  } else if (sCasa7.textContent == "O" && sCasa8.textContent == "O" && sCasa9.textContent == "O") {
    alert('Jogador O ganhou!!!!');
    sCasa7.style.background = "red";
    sCasa8.style.background = "red";
    sCasa9.style.background = "red";
  }

  else if (sCasa1.textContent == "X" && sCasa4.textContent == "X" && sCasa7.textContent == "X") {
    alert('Jogador X ganhou!!!!');
    sCasa1.style.background = "red";
    sCasa4.style.background = "red";
    sCasa7.style.background = "red";
  } else if (sCasa1.textContent == "O" && sCasa4.textContent == "O" && sCasa7.textContent == "O") {
    alert('Jogador O ganhou!!!!');
    sCasa1.style.background = "red";
    sCasa4.style.background = "red";
    sCasa7.style.background = "red";
  } else if (sCasa2.textContent == "X" && sCasa5.textContent == "X" && sCasa8.textContent == "X") {
    alert('Jogador X ganhou!!!!');
    sCasa2.style.background = "red";
    sCasa5.style.background = "red";
    sCasa8.style.background = "red";
  } else if (sCasa2.textContent == "O" && sCasa5.textContent == "O" && sCasa8.textContent == "O") {
    alert('Jogador O ganhou!!!!');
    sCasa2.style.background = "red";
    sCasa5.style.background = "red";
    sCasa8.style.background = "red";
  } else if (sCasa3.textContent == "X" && sCasa6.textContent == "X" && sCasa9.textContent == "X") {
    alert('Jogador X ganhou!!!!');
    sCasa3.style.background = "red";
    sCasa6.style.background = "red";
    sCasa9.style.background = "red";
  } else if (sCasa3.textContent == "O" && sCasa6.textContent == "O" && sCasa9.textContent == "O") {
    alert('Jogador O ganhou!!!!');
    sCasa3.style.background = "red";
    sCasa6.style.background = "red";
    sCasa9.style.background = "red";
  }

  else if (sCasa1.textContent == "X" && sCasa5.textContent == "X" && sCasa9.textContent == "X") {
    alert('Jogador X ganhou!!!!');
    sCasa1.style.background = "red";
    sCasa5.style.background = "red";
    sCasa9.style.background = "red";
  } else if (sCasa1.textContent == "O" && sCasa5.textContent == "O" && sCasa9.textContent == "O") {
    alert('Jogador O ganhou!!!!');
    sCasa1.style.background = "red";
    sCasa5.style.background = "red";
    sCasa9.style.background = "red";
  } else if (sCasa3.textContent == "X" && sCasa5.textContent == "X" && sCasa7.textContent == "X") {
    alert('Jogador X ganhou!!!!');
    sCasa3.style.background = "red";
    sCasa5.style.background = "red";
    sCasa7.style.background = "red";
  } else if (sCasa3.textContent == "O" && sCasa5.textContent == "O" && sCasa7.textContent == "O") {
    alert('Jogador O ganhou!!!!');
    sCasa3.style.background = "red";
    sCasa5.style.background = "red";
    sCasa7.style.background = "red";
  }



}
