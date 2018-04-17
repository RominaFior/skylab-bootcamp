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

var desc= document.getElementById('desc')
var coste=document.getElementById('coste')
var escala=document.getElementById('escala')
var destinos=document.getElementById('destinos')


window.onload=function(){
        document.getElementById('headd').style.display="block"
        document.getElementById('bienvenida').style.display="block";
        document.getElementById('cuerpo').style.display="none";
        document.getElementById('coste').style.display="none";
        document.getElementById('destinos').style.display="none";
        document.getElementById('escala').style.display="none";

}

function welcome() {
	var userName=document.getElementById('userName').value
	document.getElementById('userNameHere').innerHTML = userName
	document.getElementById('headd').style.display="block"
    document.getElementById('bienvenida').style.display="none";
    document.getElementById('cuerpo').style.display="block";
    document.getElementById('coste').style.display="block";
    document.getElementById('destinos').style.display="block";
    document.getElementById('escala').style.display="block";
}
function back() {
	document.getElementById('headd').style.display="block"
    document.getElementById('bienvenida').style.display="block";
    document.getElementById('cuerpo').style.display="none";
    
}

function display(){
for(var i = 0; i < flights.length; i++){
	function scale() {
		if (flights[i].scale== true) {
			return ' con escala.'
	 	}else{ 
	 		return ' sin escala.'
		}
	}
desc.innerHTML=flights[0].to.toUpperCase()+' '+flights[0].cost+'€'+scale();
desc1.innerHTML=flights[2].to.toUpperCase()+' '+flights[2].cost+'€'+scale();
desc2.innerHTML=flights[3].to.toUpperCase()+' '+flights[3].cost+'€'+scale();
desc3.innerHTML=flights[5].to.toUpperCase()+' '+flights[5].cost+'€'+scale();
desc4.innerHTML=flights[7].to.toUpperCase()+' '+flights[7].cost+'€'+scale();
desc5.innerHTML=flights[8].to.toUpperCase()+' '+flights[8].cost+'€'+scale();
	}
}

function display1(){
for(var i = 0; i < flights.length; i++){
	function scale() {
		if (flights[i].scale== true) {
			return ' con escala.'
	 	}else{ 
	 		return ' sin escala.'
		}
	}
desc6.innerHTML=flights[1].to.toUpperCase()+' '+flights[1].cost+'€'+scale();
desc7.innerHTML=flights[4].to.toUpperCase()+' '+flights[4].cost+'€'+scale();
desc8.innerHTML=flights[6].to.toUpperCase()+' '+flights[6].cost+'€'+scale();
desc9.innerHTML=flights[9].to.toUpperCase()+' '+flights[9].cost+'€'+scale();
	}
}

function average(){
var suma = 0
flights.forEach(function(obj){
    return suma += obj.cost;
})

coste.innerHTML='El coste medio de los vuelos es de '+suma  / flights.length+ '€';
}

function flightScale(){
var myScale = flights.filter(function(valor){
    return valor.scale===true 
});

escala.innerHTML='Hay '+myScale.length+' vuelos que realizan escala.'
}

function theId(){
	var myId=flights.filter(function(valor){
         return valor.id>04 
});
	
	myId.forEach(function(obj){
		destinos.innerHTML= obj.to  
})
}

