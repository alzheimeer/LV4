
var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function(){
    if(this.value.length>=1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}

function sectorChange(){
  console.log(sector.value)
  if(sector.value>=1) {
    sector.nextElementSibling.classList.add('fijar');
  } else {
    sector.nextElementSibling.classList.remove('fijar');
  }
}

/////

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const sector = document.getElementById("sector");
const form = document.getElementById("formulario");
const error = document.getElementById("error");
var mensajeserror = [];

  form.addEventListener("submit",function(evt){

  mensajeserror = [];

  if(nombre.value == null || nombre.value == ""){
    mensajeserror.push("Ingresa tu nombre <br>");
  }
  
  if(correo.value == null || correo.value == ""){
    mensajeserror.push("Ingresa tu correo <br>");
  }
  
  if(telefono.value.length < 10 || telefono.value == "" ){
    mensajeserror.push("Ingresa # de telefono valido <br>");
  }

  if(sector.value < 1 || sector.value == ""){
    mensajeserror.push("cual es tu sector de interes ? <br>");
  }

  error.innerHTML = mensajeserror.join(", ")

  evt.preventDefault();

  executeDB();

    })


  ////// FIREBASE ////

  var firebaseConfig = {
    apiKey: "AIzaSyDQjx4GUhSev-hOOejRVhgo40V4tU0bw5M",
    authDomain: "web-ininde.firebaseapp.com",
    databaseURL: "https://web-ininde.firebaseio.com",
    projectId: "web-ininde",
    storageBucket: "web-ininde.appspot.com",
    messagingSenderId: "344095872356",
    appId: "1:344095872356:web:1db1463bf737089c029671",
    measurementId: "G-4YE9ED9MFY"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   // generar una referencia
   var ref = firebase.database().ref("name");

   // darle un valor a esa referencia

   ref.set(10.25);

   // ahora en una función que toma la data desde un input

   executeDB = () => {
     if (mensajeserror.length == 0) {

      var ref = firebase.database().ref("persons");

      var person = {
        name: document.getElementById("nombre").value,
        email: document.getElementById("correo").value,
        tel: document.getElementById("telefono").value,
        sect: document.getElementById("sector").value,
       
      }
  
      ref.push(person);}

     }

  

