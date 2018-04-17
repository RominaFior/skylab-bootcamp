
function myFlights(){

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]	
//Se preguntará por el nombre de usuario y dará la bienvenida.	
function welcome(){

var nombre = prompt('Introduzca su nombre por favor: ');

console.log ('BIENVENID@ '+ nombre +'!');

}
welcome();
//El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: 
//Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
function display(){

for(var i = 0; i < flights.length; i++){

	function scale() {

		if (flights[i].scale== true) {return ' y realiza escala.'

	 	}else{ return ' y no realiza ninguna escala.'

		}
	}
	
console.log('El vuelo con origen: '+ flights[i].from.toUpperCase() +', y destino: '+flights[i].to.toUpperCase()+' tiene un coste de '+flights[i].cost+'€'+scale());
	}
}
display();
//A continuación, el usuario verá el coste medio de los vuelos.
function average(){

var suma = 0

flights.forEach(function(obj){

    return suma += obj.cost;
})

console.log('El coste medio de los vuelos es de => '+suma  / flights.length+ '€');
}
average();
//También podrá ver cuantos vuelos efectúan escalas.
function flightScale(){

var myScale = flights.filter(function(valor){

    return valor.scale===true 
});

console.log('Hay '+myScale.length+' vuelos que realizan escala.')
}
flightScale();
//Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.*/

function theId(){

	var myId=flights.filter(function(valor){

         return valor.id>04 
});
	console.log('Los destinos de los últimos 5 vuelos del día son => ')

	myId.forEach(function(obj){
	
		console.log(obj.to)  
})
}
theId();

};

myFlights()



