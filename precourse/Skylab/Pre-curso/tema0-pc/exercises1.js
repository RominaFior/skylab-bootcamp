//a) Declara tu nombre y muéstralo por consola:

var nombre= "Romina"; 

function showName(name) {
	console.log(nombre)
}
showName();

//b) Declara tu edad y muéstralo por consola:

var edad= 33;

function showAge(age) {
	console.log(edad);
}
showAge();

//c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:

var info= ['Romina', 'Sanchez', 33];
console.log(info[0], info[1], info[2]);

function personalData(argument) {
	for (var i = 0; i < info.length; i++) {
		console.log(info[i]);
	}
}
personalData();

//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:

var info= {nombre: 'Romina', edad: 33, apellido: 'Sanchez'}

info.nombre;
info.edad;
info.apellido;

//e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
var info= ['Romina', 'Sanchez', 33];

function personalData(dato) {
	for (var i = 0; i < info.length; i++) {
		console.log(info[i]);
	}
}
personalData();

//f) Crea una estructura condicional que imprima el número mayor entre dos números.

var a= 3;
var b=8;

if (a>b) {
	console.log(a);
}else{
	console.log(b)};

//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:

var a= 9;
var b=3;

if (a>b) {
	console.log(a);
}else if (a==b) {
	console.log('Son iguales');
}else{
	console.log(b)};

//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.

var fiveNum= [65, 29, 49, 2, 98];

 for (var i = 0; i < fiveNum.length; i++) {
 	console.log(fiveNum[i]);
 	 
if (fiveNum[i] ==fiveNum[2]) {
	console.log('We are in the middle of loop');
};
};

//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error

var name= 'Romina';
var age= 33;

if (name != 'Romina' || age != 33) {
	console.log('This is not you');
} else {
	console.log( 'Glad to see you again');
}

//g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

var findInfo= ['Romina', 33, 'Barcelona', 'Meridiana', '2018'];

for(var i=0; i< findInfo.length; i++){
	if(findInfo[i]=='Romina'){
		for(var j=0; j<findInfo.length; j++){
			if(findInfo[j]==33){
				console.log('hemos encontrado tus datos!! :D Nombre: ' + findInfo[i] + ', Edad: '+ findInfo[j])
			}
		}
	}
}
  


 