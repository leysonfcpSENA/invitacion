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
  
  if(txtMisa.getBoundingClientRect().top < (screenSize + 300)) {
    imgMisa.classList.add('visible');
    txtMisa.classList.add('visible');
  } else {
    imgMisa.classList.remove('visible');
    txtMisa.classList.remove('visible');
  }
  
  if(txtRecepcion.getBoundingClientRect().top < (screenSize + 300)) {
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


  if(valor == "MN0309"){
    invitado.innerHTML =  "NORA ALBA PEREZ LOZANO <br> MARIA NORA LOZANO <br> MAILYN JOHANA CASTAÑO PEREZ";
    codigoCorrecto = true;
  } 

  if(valor == "RM0309"){
    invitado.innerHTML =  "RUBEN DARIO CASTAÑO MANRIQUE <br> MILENA ";
    codigoCorrecto = true;
  } 

  if(valor == "JF0309"){
    invitado.innerHTML =  "JAIRO PEREZ LOZANO <br> FLOR DE MARIA MURIEL <br> JHON JAIRO PEREZ <br> ADRIANA RIOS <br> VALERY PEREZ <br> ANDRES PEREZ";
    codigoCorrecto = true;
  } 

  if(valor == "MP0309"){
    invitado.innerHTML =  "MARTHA PEREZ LOZANO <br> LINA MARCELA MARIN <br> GERONIMO ATHEORTUA";
    codigoCorrecto = true;
  } 

  if(valor == "AY0309"){
    invitado.innerHTML =  "ALEJANDRA PEREZ <br> YOVANY GRANADA <br> KELLY GRANADA <br> JOHAN ALEJANDRO GRANADA <br> JUAN PABLO ESCOBAR";
    codigoCorrecto = true;
  } 

  if(valor == "YM0309"){
    invitado.innerHTML =  "YOLENI PEREZ <br> MARIO <br> JUAN ESTEBAN <br> EVAN ";
    codigoCorrecto = true;
  } 

  if(valor == "MJ0309"){
    invitado.innerHTML =  "MARINA MANRIQUE <br> JUAQUIN CANO <br> GERALDINE CANO <br> YURI CANO <br> SANTIAGO";
    codigoCorrecto = true;
  } 

  if(valor == "JA0309"){
    invitado.innerHTML =  "LIZBETH <br> JUAN PEREZ <br> ANGELA";
    codigoCorrecto = true;
  } 

  if(valor == "TJ0309"){
    invitado.innerHTML =  "TERESA CASTAÑO <br> JORGE CIFUENTES <br> ANTONIO CIFUENTES <br> DAVID CIFUENTES <br> IVAN CIFUENTES <br> ANGEL CIFUENTES";
    codigoCorrecto = true;
  } 

  if(valor == "AP0309"){
    invitado.innerHTML =  "AUGUSTO PEREZ";
    codigoCorrecto = true;
  } 

  if(valor == "AD0309"){
    invitado.innerHTML =  "ALEX PEREZ <br> DEISY <br> JORGE PEREZ <br> ALEJANDRA PEREZ <br> DANA PEREZ <br> DYLAN PEREZ <br> ITAN PEREZ <br> IAN PEREZ ";
    codigoCorrecto = true;
  } 

  if(valor == "AJ0309"){
    invitado.innerHTML =  "ANIBAL PEREZ <br> JULIAN PEREZ";
    codigoCorrecto = true;
  } 

  if(valor == "SA0309"){
    invitado.innerHTML =  "SANDRA PATRICIA MORENO <br> AMPARO CARVAJAR <br> JHON FREDY MORENO <br> ANGIE PAOLA MORENO <br> ALBEIRO ARENAS";
    codigoCorrecto = true;
  } 

  if(valor == "DW0309"){
    invitado.innerHTML =  "DANIEL MORENO <br> WENDY PAEZ <br> ELIZABETH MORENO <br> GISELLA MOLANO <br> ERAIDEZ LOZANO";
    codigoCorrecto = true;
  } 

  if(valor == "LJ0309"){
    invitado.innerHTML =  "NOHEMI OSPINA <br> LILIANA MONCADA <br> LUISA GUEVARA <br> JAIRO GUEVARA";
    codigoCorrecto = true;
  } 

  if(valor == "MO0309"){
    invitado.innerHTML =  "MARIELA CARVAJAR <br> PAOLA CARVAJAR E HIJAS";
    codigoCorrecto = true;
  } 

  if(valor == "OO0309"){
    invitado.innerHTML =  "OSCAR OPINA";
    codigoCorrecto = true;
  } 

  if(valor == "CT0309"){
    invitado.innerHTML =  "CESAR OSPINA <br> TAVO OSPINA <br> JAIME OSPINA";
    codigoCorrecto = true;
  } 

  if(valor == "RC0309"){
    invitado.innerHTML =  "RIGO CARVAJAL Y ESPOSA";
    codigoCorrecto = true;
  } 

  if(valor == "JT0309"){
    invitado.innerHTML =  "JOSE TRUJILLO <br> JUAN CAMILO TRUJILLO <br> TATIANA TRUJILLO";
    codigoCorrecto = true;
  } 

  if(valor == "CE0309"){
    invitado.innerHTML =  "CIELO TRUJILLO Y ESPOSO";
    codigoCorrecto = true;
  } 

  if(valor == "CM0309"){
    invitado.innerHTML =  "CESAR SUAREZ Y ESPOSA";
    codigoCorrecto = true;
  } 

  if(valor == "RA0309"){
    invitado.innerHTML =  "LIBIA VALENCIA <br> RUBY SUAREZ <br> ADIELA SUAREZ <br> GLORIA SUAREZ <br> KATERINE SUAREZ <br> ALBA SUAREZ";
    codigoCorrecto = true;
  } 

  if(valor == "PG0309"){
    invitado.innerHTML =  "PATRICIA MONCADA <br> GABRIEL ISAZA  <br> NATALIA ISAZA";
    codigoCorrecto = true;
  } 

  if(valor == "KG0309"){
    invitado.innerHTML =  "KATERINE GUEVARA Y ESPOSO";
    codigoCorrecto = true;
  } 

  if(valor == "JK0309"){
    invitado.innerHTML =  "JULIAN ESTEBAN OROZCO <br> KELLY DUARTE";
    codigoCorrecto = true;
  } 

  if(valor == "MS0309"){
    invitado.innerHTML =  "MANUEL FELIPE ECHAVARRIA OROZCO <br> SHIRLEY SANCHEZ";
    codigoCorrecto = true;
  } 

  if(valor == "DA0309"){
    invitado.innerHTML =  "DEIVID ARIAS RAMIREZ";
    codigoCorrecto = true;
  } 

  if(valor == "RE0309"){
    invitado.innerHTML =  "RUBEN DARIO HERNANDEZ <br> ERIKA OLARTE <br> JUAN FERNANDO HERNANDEZ OLARTE";
    codigoCorrecto = true;
  } 

  if(valor == "GJ0309"){
    invitado.innerHTML =  "JUAN RAFAEL SANDOVAL <br> GLORIA AMPARO LOPEZ <br> ALEJANDRA SANDOVAL LOPEZ";
    codigoCorrecto = true;
  } 

  if(valor == "RS0309"){
    invitado.innerHTML =  "RICARDO SANCHEZ";
    codigoCorrecto = true;
  } 

  if(valor == "SL0309"){
    invitado.innerHTML =  "SEBASTIAN ARIAS WALTEROS <br> LUISA RODRIGUEZ";
    codigoCorrecto = true;
  } 

  if(valor == "JM0309"){
    invitado.innerHTML =  "JAVIER ARIAS <br> MERY WALTEROS <br> MIGUEL ANGEL ARIAS WALTEROS";
    codigoCorrecto = true;
  } 

  if(valor == "CO0309"){
    invitado.innerHTML =  "CAMILO OSORIO";
    codigoCorrecto = true;
  } 

  if(valor == "SC0309"){
    invitado.innerHTML =  "SERGIO ALEJANDRO AGUIRRE PARRA";
    codigoCorrecto = true;
  } 

  if(valor == "DY0309"){
    invitado.innerHTML =  "DIEGO ECHAVARRIA OROZCO <br> JESSICA ARIAS";
    codigoCorrecto = true;
  } 

  if(valor == "ER0309"){
    invitado.innerHTML =  "ELIANA RENDON";
    codigoCorrecto = true;
  } 

  if(valor == "NJ0309"){
    invitado.innerHTML =  "JHONATAN GOMEZ RAMIREZ <br> NATALIA CACERES";
    codigoCorrecto = true;
  } 

  if(valor == "BY0309"){
    invitado.innerHTML =  "BRAYAN TORO RAMIREZ <br> YESICA ACUÑA";
    codigoCorrecto = true;
  } 

  if(valor == "JO0309"){
    invitado.innerHTML =  "JACOBO OROZCO";
    codigoCorrecto = true;
  } 

  if(valor == "PA0309"){
    invitado.innerHTML =  "ANDRES FELIPE GRACIA GALINDO <br> MARTIN GARCIA";
    codigoCorrecto = true;
  } 

  if(valor == "TT0309"){
    invitado.innerHTML =  "TATIANA JIMENEZ";
    codigoCorrecto = true;
  } 

  if(valor == "SM0309"){
    invitado.innerHTML =  "MARTA LEONEL SOGAMOSO <br> SANTIAGO MORENO";
    codigoCorrecto = true;
  } 

  if(valor == "DZ0309"){
    invitado.innerHTML =  "DANIEL ZAMBRANO";
    codigoCorrecto = true;
  } 

  if(valor == "AA0309"){
    invitado.innerHTML =  "AMPARO";
    codigoCorrecto = true;
  } 

  if(valor == "DV0309"){
    invitado.innerHTML =  "DIEGO LOPEZ <br> VILMA MORALES";
    codigoCorrecto = true;
  } 

  if(valor == "FE0309"){
    invitado.innerHTML =  "FRANCISO LIZANO <br> EMILSE <br> THOMAS LIZCANO";
    codigoCorrecto = true;
  } 

  if(valor == "JG0309"){
    invitado.innerHTML =  "JULIAN FERNANDO GUTIERREZ MARULANDA <br> MATHIAS GUTIERREZ VALENCIA";
    codigoCorrecto = true;
  } 

  if(valor == "DM0309"){
    invitado.innerHTML =  "DAYHANA VALENCIA <br> MATHIAS GUTIERREZ VALENCIA";
    codigoCorrecto = true;
  } 

  if(valor == "OKY0309"){
    invitado.innerHTML =  "OSCAR GARCIA";
    codigoCorrecto = true;
  } 

  if(valor == "KM0309"){
    invitado.innerHTML =  "KETHERINE CANO";
    codigoCorrecto = true;
  } 

  if(valor == "DE0309"){
    invitado.innerHTML =  "DANIEL ENCISO";
    codigoCorrecto = true;
  } 

  if(valor == "AF0309"){
    invitado.innerHTML =  "ANDRES FELIPE VELANDIA";
    codigoCorrecto = true;
  } 

  if(valor == "CD0309"){
    invitado.innerHTML =  "CARLOS DIAZ";
    codigoCorrecto = true;
  } 

  if(valor == "GA0309"){
    invitado.innerHTML =  "GERMAN ALBERTO RODRIGUEZ";
    codigoCorrecto = true;
  } 

  if(valor == "MF0309"){
    invitado.innerHTML =  "MARIA JIMENA IBARRA Y ESPOSO";
    codigoCorrecto = true;
  } 

  if(valor == "LF0309"){
    invitado.innerHTML =  "LUIS FERNANDO OCAMPO";
    codigoCorrecto = true;
  } 

  if(valor == "MT0309"){
    invitado.innerHTML =  "MARIA TERESA JIMENEZ";
    codigoCorrecto = true;
  } 

  if(valor == "LM0309"){
    invitado.innerHTML =  "LINA MARIA ARIAS";
    codigoCorrecto = true;
  } 

  if(valor == "MA0309"){
    invitado.innerHTML =  "MAIRA ALEJANDRA LOPEZ";
    codigoCorrecto = true;
  } 

  if(valor == "LG0309"){
    invitado.innerHTML =  "LAURA GUEVARA";
    codigoCorrecto = true;
  } 

  if(valor == "AL0309"){
    invitado.innerHTML =  "ANGELA LOPEZ";
    codigoCorrecto = true;
  } 

  if(valor == "LR0309"){
    invitado.innerHTML =  "LUCELLA RIVERA";
    codigoCorrecto = true;
  } 

  if(valor == "KD0309"){
    invitado.innerHTML =  "KATHERINE DAVILA";
    codigoCorrecto = true;
  } 

  if(valor == "AC0309"){
    invitado.innerHTML =  "ADRIANA";
    codigoCorrecto = true;
  } 

  if(valor == "VP0309"){
    invitado.innerHTML =  "VALENTINA PARRA";
    codigoCorrecto = true;
  } 

  if(valor == "FG0309"){
    invitado.innerHTML =  "LUIDA FERNANDA GOMEZ";
    codigoCorrecto = true;
  } 

  if(valor == "LH0309"){
    invitado.innerHTML =  "LAURA HERNANDEZ";
    codigoCorrecto = true;
  } 

  if(valor == "HS0309"){
    invitado.innerHTML =  "ERIBERTO";
    codigoCorrecto = true;
  } 

  if(valor == "IL0309"){
    invitado.innerHTML =  "ISLENI LONDOÑO";
    codigoCorrecto = true;
  } 

  if(valor == "ML0309"){
    invitado.innerHTML =  "MARIA LILINA PINO";
    codigoCorrecto = true;
  } 

  if(valor == "YS0309"){
    invitado.innerHTML =  "YEFER SEDAS";
    codigoCorrecto = true;
  } 

  if(valor == "FA0309"){
    invitado.innerHTML =  "FABIAN AGUDELO";
    codigoCorrecto = true;
  } 

  if(valor == "FS0309"){
    invitado.innerHTML =  "FERNANDO SERNA";
    codigoCorrecto = true;
  } 

  if(valor == "LU0309"){
    invitado.innerHTML =  "LEIDY VASQUEZ";
    codigoCorrecto = true;
  } 

  if(valor == "JL0309"){
    invitado.innerHTML =  "JOSE LUIS ARIAS";
    codigoCorrecto = true;
  } 

  if(valor == "MH0309"){
    invitado.innerHTML =  "MICHAEL HERRERA";
    codigoCorrecto = true;
  } 

  if(valor == "AH0309"){
    invitado.innerHTML =  "ANDRES HERNANDEZ";
    codigoCorrecto = true;
  } 

  if(valor == "JD0309"){
    invitado.innerHTML =  "JUAN DAVID GARCIA";
    codigoCorrecto = true;
  } 

  if(codigoCorrecto == true){
    seccionLogin.style.display = "none";
    seccionInvitado.style.display = "flex";
  } else {
    invitado.innerHTML = "Codigo equivocado";
  }
}

