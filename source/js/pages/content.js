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
  
  if(valor == "03092015"){
  
    seccionLogin.style.display = "none";
    seccionInvitado.style.display = "flex";
    invitado.innerHTML =  "ERIKA FERNANDA SUAREZ MORENO <BR> LEYSON FABIAN CASTAÑO PEREZ";
    
    
  } else {
    invitado.innerHTML = "Codigo equivocado";
    
  }
}

function nombreInvitado(){
    console.log("hola desde nombreInvitado");
    invitado = document.getElementById('invitado');invitado
    invitado.innerHTML =  "desde la funcion";
}