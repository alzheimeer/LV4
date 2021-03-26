const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const registrarButton = document.getElementById('registrar');
const entrarButton = document.getElementById('entrar');
const container = document.getElementById('container');


signUpButton.addEventListener('click', (e) => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', (e) => {
	container.classList.remove("right-panel-active");
});

registrarButton.addEventListener('click', (e) => {

	/*Captura de datos escrito en los inputs*/
	var nom = document.getElementById("nombretxt").value;
	var emai = document.getElementById("emailtxt").value;
	var passw = document.getElementById("passwordtxt").value;

	/*Guardando los datos en el LocalStorage*/
	var miObjeto = {
		'Nombre': nom,
		'Email': emai,
		'Password': passw
	};
	localStorage.setItem('datos', JSON.stringify(miObjeto));
	/*
	localStorage.setItem("Nombre", nom);
	localStorage.setItem("Email", emai);
	localStorage.setItem("Password", passw);*/
	/*Limpiando los campos o inputs*/
	document.getElementById("nombretxt").value = "";
	document.getElementById("emailtxt").value = "";
	document.getElementById("passwordtxt").value = "";

	alert("Registro Completo");

});



entrarButton.addEventListener('click', (e) => {
	/*recuperamos los datos del localstore*/
	/*var guardado = localStorage.getItem('datos');*/
	var persons = JSON.parse(localStorage.datos);

	/*capturamos los datos de los campos*/
	var ee1 = document.getElementById("ee1txt").value;
	var pp1 = document.getElementById("pp1txt").value;

	if (ee1 === persons.Email) {
		alert("BIENVENIDO " + persons.Nombre);
	} else
		alert("DATOS ERRONEOS INGRESADOS");


	/*limpiamos campos*/
	document.getElementById("ee1txt").value = "";
	document.getElementById("pp1txt").value = "";
	document.getElementById("log").innerHTML = persons.Nombre;
});