//Strings
//a) Puedes contar cuantas letras tiene tu nombre?

var name='Romina';
console.log('My name has ' + name.length + 'letters.');

//b) Añade tu apellido e indica en que posición se encuentra

var name='Romina Sanchez';
console.log('My first last name starts on position ' + name.indexOf('Sanchez'));

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

var name='Romina Sanchez';
var newName= name.split(' ');

console.log('My name is ' + newName.shift());

console.log('My name is ' + name.substring(0,6));


//d) Ahora, solo tu apellido.

console.log(myString) // My lastname is Stark

var name='Romina Sanchez';
var newName= name.split(' ');

console.log('My last name is ' + newName.pop());

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

var name='Romina Sanchez';
var newName= name.split(' ');
newName= newName.pop();

console.log(name +", " + newName); // Tony Stark, Stark

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

var name='Romina Sanchez';
var newName= name.split(' ');
newName= newName.pop();

name= "Ms. ";


console.log('Hello, '+ name + newName); // Hello, Mr. Stark

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

var name='Romina Sanchez';
var newName= name.split(' ');
newName= newName.pop().toUpperCase();


console.log('My lastname is '+ newName); // my lastname is STARK 

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

var name='Romina Sanchez';
var newName= name.split(' ');
newName= newName.pop().toUpperCase();

var message = newName + " es mi apellido."
console.log(message); // "Tony is awesome"

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

var name='Romina Sanchez';
var newName= name.split(' ');
var nom= newName[0].toString().charAt(0).toUpperCase();
var ape= newName[1].toString().charAt(0).toUpperCase();
var name= nom.concat('.'+ ape);
console.log(name+ '.'); // S.Y

var name = 'Romina Sanchez'
console.log(name[0]  + '.' + name.substr(name.indexOf(' ')+1,1))

Arrays

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"



var name = ["Jesica", "Romina", "Sanchez"];
var slash = name.toString().split("|");

console.log(slash);

var fname = ['Jesica', 'Romina', 'Sanchez'];
var slash = fname.join("");

console.log(slash);

function unir() {
    var name = ['Jesica', 'Romina', 'Sanchez'];
	var slash = name.join("/");
    console.log(slash);
}
unir();

var myName = ["Jesica", "Romina", "Sanchez"];

console.log(myName.join('').split('').join('/'));

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

var myName = ['Jesica', 'Romina', 'Sanchez'];
var name1 = (myName[2].split('').join('|'));
console.log(name1);

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

var myName = ["Jesica", "Romina", "Sanchez"];
var myNewName = myName.shift().toUpperCase().split('').join(',').split(',');

for (var i = 0; i < myNewName.length; i++) {
	var nombre = ((i+1) + 'º ' + myNewName[i] + ',');
	console.log(nombre.split('').join(''));
	}


 // 1º T, 2º O, 3º N, 4º Y

 //d)Como en el ejercicio anterior, pero seleccionando tu apellido

var myName = ["Jesica", "Romina", "Sanchez"];
var myLastName = myName.join('').split('').join(',').toUpperCase();
for (var i = 0; i < myLastName.length; i++) {
	console.log((i+1) + 'º ' + myLastName[i] +',');
}

console.log(myLastName); // 5º S, 6º T, 7º A, 8º R, 9º K
\

var myName = ["Jesica", "Romina", "Sanchez"];
var info = []
for (var i = 0; i < myName[0].length; i++) {
   info.push(i+1 + ' => ' +myName[0][i].toUpperCase()) 
}

console.log(info.join(', '))

var myName = ["Jesica", "Romina", "Sanchez"];
var info = []
for (var i = 0; i < myName[2].length; i++) {
   info.push(i+1 + 'º ' +myName[2][i].toUpperCase()) 
}

console.log(info.join(', '))

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

var name = ['Romina', 'Sanchez'];
var nom= name[0].toString().charAt(0).toUpperCase();
var ape= name[8].toString().charAt(0).toUpperCase();
console.log(nom.concat('.'+ ape));

var myInitials = name.toString();
console.log(myInitials) // T.S

var name = ['Romina', 'Sanchez'];
var newName = name.toString();

console.log(newName[0]  + '.' + name.substr(name.indexOf(' ')+1,1))

var name = ["Romina", "Sanchez"];
var nom = name[0];

console.log(nom);

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

var data = ['Sanchez', 'Romina'];
data = data.reverse();
data.push(33);

	console.log('My name is ' + data.shift() + ' and im ' + data.pop() + ' years old.')



console.log(data); // My name is TONY and i'm 40 years old

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

console.log(myCityAdd) // City added to array! => Tony, Stark, 40, New York

var data = ['Romina', 'Sanchez', 33];

function addCity(ciudad) {

	data.push(ciudad);
	
		console.log('City added to array! => ' + data.join(', '));
	};


addCity('Barcelona')

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

myCityAdd() // City added to array! => Tony, Stark, 40, New York
myCityDelete() // City deleted! => Tony, Stark, 40

var data = ['Romina', 'Sanchez', 33];

function addCity(ciudad) {

	data.push(ciudad);
	
		console.log('City added to array! => ' + data.join(', '));
	};


addCity('Barcelona');

function myCityDelete() {
	data.pop();
	console.log('City deleted! =>' + data.join(', '))
}

myCityDelete();

//j) Ahora, elimina el nombre y asegura los cambios
var data = ['Romina', 'Sanchez', 33];
data.shift();

console.log(data.join(', '));

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?
var data = ['Romina', 'Sanchez', 33];
data.shift();

console.log(data.join(', '));

data.splice(0,0,'Romina');
console.log(data.join(', '));

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var multByTwo = numbers.map(function(num) {
  return num * 2;
});
 console.log(multByTwo.join(', '));

 //l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num = 3; 
	function multByNum(){
    var arrayMult = numbers.map(function(arrayMult){
    	return arrayMult * num;
    	});
    	console.log(arrayMult.join(', '));
    };
    multByNum(); 

    
//function multByNum(){
//multByNum();    

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function multByNum(num){
   var arrayMult = numbers.map(function(arrayMult){
       return arrayMult * num;
       });
       console.log(arrayMult.reverse().join(', '));
   };
   multByNum(3);
   multByNum(5);
   multByNum(33);

 //m) Podrías mostrarlos en el orden inverso?
 //n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

console.log(repeatLetters) // Tony Stark, the letter 'T' => 2 times.

/*var fullName = ['Jesica', 'Romina', 'Sanchez'];
var fullNom = fullName.join('');
var contador = 0;

for (var i = 0; i < fullNom.length; i++) {
		for (var j = i+1; j < fullNom.length; j++) {
		if(fullNom[j]== fullNom[i]) {
			contador ++;
		console.log('La letra ' + fullNom[i] +' esta repetida ' + contador + ' veces.')
		}
	}
}*/
var fullName = ['Jesica', 'Romina', 'Sanchez'];
//var fullNom = fullName.join('');
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
};

count(fullName);

var fullName = ['Jesica', 'Romina', 'Sanchez'];
var fullNom = fullName.join('');

function getFrequency(string) {

    var freq = [];

    for (var i=0; i<string.length;i++) {

        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
        
    } return freq;
};

   

getFrequency(fullNom)

//2da opcion

var fullName = ['Jesica', 'Romina', 'Sanchez'];
var fullNom = fullName.join('');
console.log(fullNom)
function getFrequency(string) {
   var freq = [];
   for (var i=0; i<string.length;i++) {
       var character = string.charAt(i);
       if (freq[character]) {
          freq[character]++;
       } else {
          freq[character] = 1;
       }
     
   }

return console.table(freq)
};

 

getFrequency(fullNom)

//1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

console.log(repeatLetters) // Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark

Numbers

//a) Que hora es? Declara la hora como número y devuelvela como String

console.log(myString + myNumberStringify) // I'ts 10.45 of morning

var hour = 13.15;
hour = hour.toString();
console.log("It's " + hour + ' in the morning.');

//b) Nono, que hora exactamente? Dime la hora sin minutos

console.log(myString) // It's around 10 of morning

var hour = 13.15;
hour = hour.toPrecision(2);
console.log("It's around "+ hour + " in the morning.")

//c) Ahora, declara tu hora y muéstrala redondeada.

console.log(...(10.34)) // 11!

var hour = 13.51;
hour = hour.toFixed();
console.log('Son casi las ' + hour + '!');

var hour = 13.51;
hour = Math.round(hour);
console.log('Son casi las ' + hour + '!');

//d) Hagamos una calculadora. Primero, la suma.

console.log(sum) //The sum of 7+3 is 10

function calc (num1, num2) {
	
	return 'The sum and rest of ' + num1 + ' and ' + num2 + ' is ' + (num1+num2) + ' and ' + (num1-num2); 
};

calc(5,4);
//d1) Añade la resta...

console.log(sum + rest) // The sum and rest of 7 and 3 is 10 and 4 

//d2) Y la multiplicación

console.log(sum + rest + mult) // 10, 4 and 21

function calc (num1, num2) {
	
	return 'The sum, rest and mult of ' + num1 + ' and ' + num2 + ' is:' + (num1+num2) + ' , ' + (num1-num2) + ' and ' + (num1*num2); 
};

calc(5,4);

//d3) Por ultimo, la división
function calc (num1, num2) {
	
	return 'The sum, rest, mult and div of ' + num1 + ' and ' + num2 + ' is: ' + (num1+num2) + ', ' + (num1-num2) + ', ' + (num1*num2) + ' and ' + (num1/num2); 
};

calc(5,4);
//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

var num = 28;
var hour = 13;
hour = hour.toString; 

console.log(num*hour) // ....?!

//e) Podemos controlar este error con un condicional if?

console.log(10*"hour") // You can't do this operation!

function calc(num1, num2) {

	if (!isNaN(num1) && !isNaN(num2)) {
		
		return num1*num2
	}else{

		return "You can't do this operation!"
	}
};

calc(24,3);
