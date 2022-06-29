var usuario = "default";

const input = document.querySelector('input');
input.addEventListener('input', updateValue);

var seccionLogin = document.getElementById('login');
var seccionInvitado = document.getElementById('invitacion');
seccionInvitado.style.display = "none";

var invitado = document.getElementById('invitado');

function updateValue(e) {
  console.log("hola desde javascript");
  let valor = e.srcElement.value;
  let codigoCorrecto = false;
  
  if(valor == "03092015"){
    invitado.innerHTML =  "ERIKA FERNANDA SUAREZ MORENO <br>  LEYSON FABIAN CASTAÑO PEREZ";
    codigoCorrecto = true;
  } 

  if(valor == "11111111"){
    invitado.innerHTML =  "NORA ALBA PEREZ LOZANO";
    codigoCorrecto = true;
  } 

  if(valor == "00000000"){
    invitado.innerHTML =  "SANDRA PATRICIA MORENO";
    codigoCorrecto = true;
  } 
  

  if(codigoCorrecto == true){
    seccionLogin.style.display = "none";
    seccionInvitado.style.display = "flex";
  } else {
    invitado.innerHTML = "Codigo equivocado";
  }
}

function nombreInvitado(){
    console.log("hola desde nombreInvitado");
    invitado = document.getElementById('invitado');invitado
    invitado.innerHTML =  "desde la funcion";
}