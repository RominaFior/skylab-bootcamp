//Diferentes maneras de declarar objetos en JavaScript

//1. Definir y crear un objeto simple utilizando un literal:

var persona1 = {
	nombre: 'Romina',
	apellido: 'Sanchez',
	year: 1985,
};

//2. Definir y crear un objeto simple utilizando la palabra new:

var persona2 = new Object();
persona2.nombre = 'Jesica';
persona2.apellido = 'Pomier';
persona2.year = '2018';

//3. Definir un constructor de un objeto, y crear objetos de tipo construido:

function Persona (nom, ape, ye) {
	
	this.nombre = nom;
	this.apellido = ape;
	this.year = ye;
};

console.table(romina = new Persona('Romina', 'Sanchez', 1985));

var jesica = new Persona('Jesica', 'Pomier', 2018);

//4. OBJETO STRING (AUNQUE NO ES RECOMENDADO YA QUE ES UN DATO PRIMITIVO)
// INSTANCIACION
var x1 = 'Desarrollo de aplicaciones';
var x2 = "Administracion de 'Sistemas informaticos'";
var x3 = "Sistemas \"Microinformaticos\" y redes";
var ciclos = new String(''); 
//CONCATENACION DE CADENAS
ciclos += "Hay 3 ciclos FP: \n";
ciclos += x1 + ', '+x2 + ' y '+x3;

console.log(ciclos);

//5. Sintaxis de acceso a las propiedades de un objeto: 3 MANERAS
/* 1. objeto.propiedad;
   2. objeto['propiedad'];
   3. objeto[expresion];*/

var persona1 = {nombre: 'Romina',apellido: 'Sanchez',year: '1985'};
var expresion = 'year';
console.log(persona1[expresion]);


console.log(persona1.nombre);
console.log(persona1['apellido']);
var expresion = 'year',

//console.log(persona1[expresion]);
var persona1 = {nombre: 'Romina',apellido: 'Sanchez',year: '1985'};

//SI sabemos el nombre de la propiedad...

console.log(persona1.nombre)

//si NO la sabemos
//averiguamos la propiedad, encapsulamos en una variable y mostramos con []

var prop = 'nombre'

console.log(persona1[prop])

//TRABAJO CON 2 VARIABLES DENTRO DEL BUCLE FOR:

var m,n;

for (var m = 1, n=10; m <= 10, n>=1; m++, n--) {
	
	console.log(m,n);
}
//BUCLE FOR IN EJEMPLO

var animal = {nombre:"Lola", tipo:"Hamster", raza:"Ruso", edad:1};
//var prop;

for (var prop in animal){

	console.log(animal[prop]);
}

for (x in animal){

	console.log(animal[x]); 
}

//AÑADIR UNA NUEVA PROPIEDAD A UN OBJETO => NOMBRE-OBJETO.NUEVA-PROPIEDAD=VALOR-PROPIEDAD

animal.nacionalidad='Argentina';
console.log(animal.nacionalidad);

//BORRAR UNA PROPIEDAD DE UN OBJETO => DELETE NOMBRE-OBJETO.NOMBRE-PROPIEDAD

delete animal.edad;

for (x in animal){

	console.log(animal[x]); 
}

//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

console.log(something, somethingMore, somethingMoreAndMore)
//name, class, id

var avenger = { name : "Tony", class : "VII", id : 1 };

var prop = Object.keys(avenger).join(',');

console.log(prop);




//b) Ahora, crea una función que liste solo los valores de las propiedades.

console.log(somethingThatShowsThings) //Tony, VII, 01

var avenger = { name : "Tony", class : "VII", id : 1 };

for(x in avenger){

	console.log(avenger[x]);
}
//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

console.log(property.ThisProperty) //new class = XI

var avenger = { name : "Tony", class : "VII", id : 1 };
avenger.class="XI";
console.log(avenger.class)

//d) Ahora, elimina la propiedad ID y asegura los cambios.

console.log(property.ThisProperty) //Not exist :(

var avenger = { name : "Tony", class : "VII", id : 1 };
delete avenger.id;
if (avenger.id === undefined) {

	console.log('Not exist :(')
};
//e) Añade una nueva propiedad, por ejemplo city y dale un valor.
var avenger = { name : "Tony", class : "VII", id : 1 };
avenger.city='London';
console.log(avenger.city);

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

console.log('City => '+ avenger.city); // City => New York City

//f) Lista el numero de propiedades que contiene el objeto.

var avenger = { name : "Tony", class : "VII", id : 1 , peso:'49', hora:'nose'};

contador=0;

for(x in avenger){

	 contador++
}

console.log('There are '+ Object.keys(avenger).length + ' info fields') // There are 4 info fields

console.log(Object.keys(avenger).length);

//g) Cambia la propiedad name por fullName.
var avenger = { name : "Tony", class : "VII", id : 1 , peso:'49', hora:'nose'};

avenger.fullName=avenger.name;

delete avenger.name;

console.log(Object.keys(avenger));

//g1) Asegura los cambios.

console.log(fullName) // Tony Stark

//METODO DE UN OBJETO, CREAR Y ACCEDER

var avenger = { name : "Tony", 
				class : "VII", 	
				id : 1 , 
				peso:'49', 
				hora:'nose',
				nombreCompleto: function () {
					
					return this.name + ' '+this.class;
				}
			};

console.log(avenger.nombreCompleto());		


//h) Lista todas las propiedades del objeto a través de un console.log()
var avenger = { name : "Tony", 
				class : "VII", 	
				id : 1 , 
				peso:'49', 
				hora:'nose',
				//nombreCompleto: function () {
					
					//return this.name + ' '+this.class;
				//}
			};

for(x in avenger){
	console.log(avenger[x]+' ')
}
//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
var avenger = { name : "Tony", 
				class : "VII", 	
				id : 1 , 
				peso:'78', 
				hora:'nose',			
			};
avenger.country= 'Alemania';
avenger.job= 'Engineer';
avenger.color= 'Blue';
//h2) Asegura los cambios volviendo a listar los valores del objeto
for(x in avenger){
	console.log(avenger[x]+' ')
}
//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las 
//propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

function Avenger(nom,cl,id,ps,ct,job,color){

	this.name=nom;
	this.class=cl;
	this.id=id;
	this.peso=ps;
	this.country=ct;
	this.job=job;
	this.colour=color;

	
};

var ave1 = new Avenger("Mark", "VIV", 2, 81, 'Germany', 'programmer', 'black' );

console.log(ave1.name);
console.log(ave1.class);
console.log(ave1.id);
console.log(ave1.peso);
console.log(ave1.country);
console.log(ave1.job);
console.log(ave1.colour);

//for (var i = 0; i < Avenger.length; i++) {
	//console.log (ave1.arguments[i]);
	//};
//j) Crea otro objeto y imprime sus propiedades por pantalla.

var ave2 = new Avenger('Lina', 'X', 3, 55, 'USA', 'Doctor', 'Pink');
console.log(ave2.name);
console.log(ave2.class);
console.log(ave2.id);
console.log(ave2.peso);
console.log(ave2.country);
console.log(ave2.job);
console.log(ave2.colour);

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:


function Avenger(nom,cl,id,ps,ct,job,color){

	this.name=nom;
	this.class=cl;
	this.id=id;
	this.peso=ps;
	this.country=ct;
	this.job=job;
	this.colour=color;
	this.listProperties= function(){
		console.log(this.name+ ", " + this.class+', '+this.id+', '+this.peso+', '+this.country+', '+this.job+', '+this.colour);
	}


	
};
var ave2 = new Avenger('Lina', 'X', 3, 55, 'USA', 'Doctor', 'Pink');
ave2.listProperties();

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados

console.log(someFunction) // Tony Stark, Hulk, Thor...

function Avenger(nom,cl,id,ps,ct,job,color,city){

	var prueba=[
	this.name=nom,
	this.class=cl,
	this.id=id,
	this.peso=ps,
	this.country=ct,
	this.job=job,
	this.colour=color,
	this.city=city
	];
	this.listNom= function(){
		prueba.forEach(function(obj){
		console.log(obj.this.name);
	})
		}
		
};
var ave2 = new Avenger('Lina', 'X', 3, 55, 'USA', 'Doctor', 'Pink', 'Madrid');
var ave1 = new Avenger("Mark", "VIV", 2, 81, 'Germany', 'programmer', 'black', 'Madrid' );

ave1.listNom();


//SOLUCION COMPLETA

function Avenger(nom,cl,id,ps,ct,job,color){
    this.name=nom;
    this.class=cl;
    this.id=id;
    this.peso=ps;
    this.country=ct;
    this.job=job;
    this.colour=color;
    //this.listNom= function(){
        //console.log(this.name);
       // }
        
};
var ave2 = new Avenger('Lina', 'X', 3, 55, 'USA', 'Doctor', 'Pink');
var ave1 = new Avenger("Mark", "VIV", 2, 81, 'Germany', 'programmer', 'black' );

var arrOfNames = [ave1, ave2]

function listNames(){
	arrOfNames.forEach(function(object){
		console.log(object.name)
	})
}

listNames()

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de 
//los Avengers que sean de la misma ciudad y cuantos hay.

console.log(myFunction) // Are 3 avengers living in NYC: Tony, Hulk, Hawkeye

function Avenger(nom,cl,id,ps,ct,job,color,city){
    this.name=nom;
    this.class=cl;
    this.id=id;
    this.peso=ps;
    this.country=ct;
    this.job=job;
    this.colour=color;
    this.city=city;
            
};

var ave3 = new Avenger('Sergio','II', 1, 83, 'Spain', 'Web Designer', 'Blue', 'Madrid')
var ave2 = new Avenger('Lina', 'X', 3, 55, 'USA', 'Doctor', 'Pink', 'Madrid');
var ave1 = new Avenger("Mark", "VIV", 2, 81, 'Germany', 'programmer', 'black', 'Madrid' );
var ave4 = new Avenger('Susana', 'V', 6, 58, 'Chile', 'Nurse', 'White', 'Lyon');

var arrOfData = [ave1, ave2, ave3, ave4];

for (var i = 0; i < arrOfData.length; i++) {
	for (var j = 0; j < arrOfData.length-1; j++) {
		if (arrOfData[i].city === arrOfData[j].city) {
		var nameCity = arrOfData[i].name + ','+ arrOfData[i].city
		console.log(nameCity);
	}
	
	}
}

//SOLUCION

function Avenger(nom,cl,id,ps,ct,job,color,city){
    this.name=nom;
    this.class=cl;
    this.id=id;
    this.peso=ps;
    this.country=ct;
    this.job=job;
    this.colour=color;
    this.city=city;
            
};
var ave3 = new Avenger('Sergio','II', 1, 83, 'Spain', 'Web Designer', 'Blue', 'Madrid')
var ave2 = new Avenger('Lina', 'X', 3, 55, 'USA', 'Doctor', 'Pink', 'Madrid');
var ave1 = new Avenger("Mark", "VIV", 2, 81, 'Germany', 'programmer', 'black', 'Madrid' );
var ave4 = new Avenger('Susana', 'V', 6, 50, 'Chile', 'Nurse', 'White', 'Lyon');

var arrOfData = [ave1, ave2, ave3, ave4];

var myCity = arrOfData.filter(function(valor){
    return valor.name 
});

//listamos el array de objetos filtrado.
console.log('los de madrid son ' + myCity.length+ ' =>')

myCity.forEach(function(obj){
	
	console.log(obj.name)  
})

 //n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

 function Avenger(nom,cl,id,ps,ct,job,color,city){
    this.name=nom;
    this.class=cl;
    this.id=id;
    this.peso=ps;
    this.country=ct;
    this.job=job;
    this.colour=color;
    this.city=city;
            
};

var ave5 = new Avenger('Romina', 'III', 4, 58, 'Argentina', 'Student', 'Green', 'Barcelona');
var ave3 = new Avenger('Sergio','II', 1, 83, 'Spain', 'Web Designer', 'Blue', 'Madrid')
var ave2 = new Avenger('Lina', 'X', 3, 55, 'USA', 'Doctor', 'Pink', 'Madrid');
var ave1 = new Avenger("Mark", "VIV", 2, 81, 'Germany', 'programmer', 'black', 'Madrid' );
var ave4 = new Avenger('Susana', 'V', 6, 50, 'Chile', 'Nurse', 'White', 'Lyon');

var arrOfData = [ave1, ave2, ave3, ave4, ave5];

var myMedia = arrOfData.filter(function(valor){
    return valor.peso 
});

var suma = 0;
var Media;

arrOfData.forEach(function(obj){
	return Media = (suma += obj.peso) / myMedia.length;
})

console.log(Media)

//SOLUCION

var suma = 0
arrOfData.forEach(function(obj){
    return suma += obj.peso;
})
console.log(suma  / arrOfData.length)

//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, 
//de dos en dos, compare sus markAv y que muestre el mayor de ambos.
console.log(myFunction()) 
// HawkEye vs Tony => Tony is better! \n Thor vs Hulk => Hulk is better! \n Vision vs Captain America => Vision is better


function Avenger(nom,cl,id,ps,ct,job,color,city){
    this.name=nom;
    this.class=cl;
    this.id=id;
    this.peso=ps;
    this.country=ct;
    this.job=job;
    this.colour=color;
    this.city=city;
            
};

var ave6 = new Avenger('Alex', 'XIX', 5, 77, 'Australia', 'Accountant', 'Yellow', 'Buenos Aires');
var ave5 = new Avenger('Romina', 'III', 5, 58, 'Argentina', 'Student', 'Green', 'Barcelona');
var ave3 = new Avenger('Sergio','II', 1, 83, 'Spain', 'Web Designer', 'Blue', 'Madrid')
var ave2 = new Avenger('Lina', 'X', 1, 55, 'USA', 'Doctor', 'Pink', 'Madrid');
var ave1 = new Avenger("Mark", "VIV", 2, 81, 'Germany', 'Programmer', 'black', 'Madrid' );
var ave4 = new Avenger('Susana', 'V', 2, 50, 'Chile', 'Nurse', 'White', 'Lyon');

var arrOfData = [ave1, ave2, ave3, ave4, ave5, ave6];

var myName = arrOfData.filter(function(valor){
    return valor.name 
});

var myName1=myName.forEach(function(obj){
	
	return obj.name
});


var i= arrOfData.length, j, temp;

while(--i > 0){
	j=Math.floor(Math.random()* (i+1));
	temp= arrOfData[j];
	arrOfData[j]=arrOfData[i];
	arrOfData[i]=temp;

};

console.log(arrOfData)
    


/*desordenando la array aleatoriamente (en google hay millon y medio de ejemplos) y mostrandolos de 2 en 2.... 
(con un forEach y un if() para mostrar quien es mejor)

o asignándoles un id, e ir sacando los id random...

el primero es más optimo y corto*/

//SOLUCION

//declaramos las funciones
function Avenger(nom,cl,id,ps,ct,job,color,city){
    this.name=nom;
    this.class=cl;
    this.id=id;
    this.peso=ps;
    this.country=ct;
    this.job=job;
    this.colour=color;
    this.city=city;
            
};

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
	return a
}

// inicializamos logica
// instanciamos los objetos...
var ave6 = new Avenger('Alex', 'XIX', 5, 77, 'Australia', 'Accountant', 'Yellow', 'Buenos Aires');
var ave5 = new Avenger('Romina', 'III', 5, 58, 'Argentina', 'Student', 'Green', 'Barcelona');
var ave3 = new Avenger('Sergio','II', 1, 83, 'Spain', 'Web Designer', 'Blue', 'Madrid')
var ave2 = new Avenger('Lina', 'X', 1, 55, 'USA', 'Doctor', 'Pink', 'Madrid');
var ave1 = new Avenger("Mark", "VIV", 2, 81, 'Germany', 'Programmer', 'black', 'Madrid' );
var ave4 = new Avenger('Susana', 'V', 2, 50, 'Chile', 'Nurse', 'White', 'Lyon');
//insertamos en un array
var arrOfData = [ave1, ave2, ave3, ave4, ave5, ave6];

// desordenamos array pasandole a la funcion shuffle el array anterior
var arrOfDataDisorder = shuffle( arrOfData)
//console.log(arrOfDataDisorder)
//recorremos el array desordenado

for(var i = 0; i < arrOfDataDisorder.length-1; i++){

	console.log(arrOfDataDisorder[i].name+' -VS- '+arrOfDataDisorder[i+1].name)

	if(arrOfDataDisorder[i].peso > arrOfDataDisorder[i+1].peso){
		console.log(arrOfDataDisorder[i].name +' pesa más que '+ arrOfDataDisorder[i+1].name)
	 	}else{
	 		console.log(arrOfDataDisorder[i].name +' es más livian@ que '+ arrOfDataDisorder[i+1].name)
	 	}
	};

	
	

