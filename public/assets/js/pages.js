var usuario = "default";

const input = document.querySelector('input');
input.addEventListener('input', updateValue);

var seccionLogin = document.getElementById('login');
var seccionInvitado = document.getElementById('invitacion');
seccionInvitado.style.display = "none";

var invitado = document.getElementById('invitado');

window.addEventListener('scroll', function()  {

  let screenSize = window.innerHeight;

  let imgCronograma = document.getElementById('imgCronograma');
  let txtCronograma = document.getElementById('txtCronograma');

  let imgMisa = document.getElementById('imgMisa');
  let txtMisa = document.getElementById('txtMisa');

  let imgRecepcion = document.getElementById('imgRecepcion');
  let txtRecepcion = document.getElementById('txtRecepcion');

  let imgProtocolo = document.getElementById('imgProtocolo');

  let imgAsistencia = document.getElementById('imgAsistencia');
  
  if(txtCronograma.getBoundingClientRect().top < screenSize) {
    imgCronograma.classList.add('visible');
    txtCronograma.classList.add('visible');
  } else {
    imgCronograma.classList.remove('visible');
    txtCronograma.classList.remove('visible');
  }
  
  if(txtMisa.getBoundingClientRect().top < screenSize) {
    imgMisa.classList.add('visible');
    txtMisa.classList.add('visible');
  } else {
    imgMisa.classList.remove('visible');
    txtMisa.classList.remove('visible');
  }
  
  if(txtRecepcion.getBoundingClientRect().top < screenSize) {
    imgRecepcion.classList.add('visible');
    txtRecepcion.classList.add('visible');
  } else {
    imgRecepcion.classList.remove('visible');
    txtRecepcion.classList.remove('visible');
  }
  
  if(imgProtocolo.getBoundingClientRect().top < (screenSize - 200)) {
    imgProtocolo.classList.add('visible');
  } else {
    imgProtocolo.classList.remove('visible');
  }

  if(imgAsistencia.getBoundingClientRect().top < screenSize) {
    imgAsistencia.classList.add('visible');
  } else {
    imgAsistencia.classList.remove('visible');
  }

});

function updateValue(e) {
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
  
  if(valor == "0001"){
    invitado.innerHTML =  "GLORIA AMPARO LOPEZ ESCUDERO";
    codigoCorrecto = true;
  } 

  if(codigoCorrecto == true){
    seccionLogin.style.display = "none";
    seccionInvitado.style.display = "flex";
  } else {
    invitado.innerHTML = "Codigo equivocado";
  }
}

