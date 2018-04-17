//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y 
//devuélvelo por la consola.
function hello (myName){
    console.log('Hello ' + myName)
    //output: 'hello myName'
}
hello('Romina');

//b) Intenta retornar los valores en lugar de usar console.log

function hello(myName){
    return 'Hello ' + myName // output: 'hello myName'
}
hello('Romina');

//c) Ahora, añade tu edad y concaténala al return

function hello(myName){
	var myAge=33;
    return 'Hello ' + myName + ", you're "+myAge+' years old.'  
}

hello('Romina');

//d) Iguala tu función a una variable y ejecútala

var MyFunction = function hello(myName){
	var myAge=33;
    return 'Hello ' + myName + ", you're "+myAge+' years old.'  
}
 //output: 'hello myName, you're myAge years old.'
hello('Romina');

//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta 
//imprimir sus dos resultados concatenados.

function myName(myName1){
	return myName1
} 
function myAge(age){
	return age
}
myName('Romina ') + myAge(33) //output: IronMan 40

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a 
//un solo string.
function myName(myName1){
	return myName1
} 
function myAge(age){
	return age
}


var rNumber=Math.floor((Math.random() * 10) + 1);

myName('Romina ') + (myAge(33)+ rNumber).toString()

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
//YA RESUELTO
//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre 
//deberá ser la llamada a las funciones hijas

function ... (){
    var x = myName(param1)
    var y = myAge(param2)
    return x + y
} //output: IronMan 40

function myInfo(){
function myName(myName1){
	return myName1
} 
function myAge(age){
	return age
}
var rNumber=Math.floor((Math.random() * 10) + 1);

return myName('Romina ') + (myAge(33)+ rNumber).toString()
};
myInfo();
//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento 
//que se pasará como parámetro a la función age()

return x + y // output: IronMan 6457689

function Nrandom(){
	return Math.floor((Math.random() * 10) + 1);
};

function myAge(age){
	return age
}
myAge(Nrandom())

//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es 
//de 21 - 50

return x + y // output: IronMan 3...Sure you're Tony Stark?

function Nrandom(){
	var rNumber= Math.floor((Math.random() * 50) + 1);
	if (rNumber<20) {
		return rNumber+" You're still very young."
	}else{
		return rNumber+" You are an adult."
	}
};
Nrandom();
//j) Al return de la función name(), concaténale otro mensaje

return x + y // output: Tony Stark...aka IRONMAN, 34...Sure you're Tony Stark? 

function myName(myName1){
	var nickN=" aka Arya Stark"
	return myName1 + nickN 
} 
myName('Romina')
//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

return x + y // output: The first function returns: 'Tony Stark...aka IRONMAN', The second function 
//returns: '34...Sure you're Tony Stark?' 

function myInfo(myName1){
function myName(myName1){
    var nickN=" aka Arya Stark "
    return  myName1 + nickN 
}; 
function randomN(){
    rNumber= Math.floor((Math.random() * 50) + 1);
    if (rNumber<20) {
        return rNumber+"...You're still very young."
    }else{
        return rNumber+"...You are an adult."
    }
};
function myAge(age){
    return age
};
    return myName(myName1) + myAge(randomN())
};
myInfo('Romina');

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, 
//no siga con la segunda llamada

return x + y // output: "The first function returns: Hulk... You're not IRONMAN!" y5080620A

function myInfo(myName1){

function myName(myName1){
	var nickN=" aka Arya Stark "
	if (myName1!=='Romina') {
		return myName1
	}else{
		return  myName1 + nickN 
	}
}; 


function randomN(){
	rNumber= Math.floor((Math.random() * 50) + 1);
	if (rNumber<20) {
		return rNumber+"...You're still very young."
	}else{
		return rNumber+"...You are an adult."
	}
};

function myAge(age){
	return age
};
	if (myName1!== 'Romina') {
		return "The first function returns: "+ myName(myName1)+"... You're not ROMINA!"

	}else{
	return myName(myName1) + myAge(randomN())
	}
};

myInfo('Romina');
//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. 
//Retorna a la funcion padre y concaténalo en el return padre.

/*function GenerateRandom(){
    ...
    return randomNumber.
}

function father(){
    var numR = GenerateRandom()
    return ...numR()...
}*/
function myInfo(myName1){

function myName(myName1){
	var nickN=" aka Arya Stark "
	if (myName1!=='Romina') {
		return myName1
	}else{
		return  myName1 + nickN 
	}
}; 


function randomN(){
	rNumber= Math.floor((Math.random() * 50) + 1);
	if (rNumber<20) {
		return rNumber+"...You're still very young."
	}else{
		return rNumber+"...You are an adult."
	}
};

function myAge(age){
	return age
};
	if (myName1!== 'Romina') {
		return "The first function returns: "+ myName(myName1)+"... You're not ROMINA!"

	}else{
	return myName(myName1) + myAge(randomN())
	}

var numR = randomN();
return numR()
};

myInfo('Romina');

//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de
// llamarlas todas y mostrar sus resultados.

function father(){
    myFunction();
    myOtherFunction();
    myOtherVarFunction();
    return...
}
//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre,
// muestra los resultados de esta array como siempre.
function myInfo(myName1){

function myName(myName1){
	var nickN=" aka Arya Stark "
	if (myName1!=='Romina') {
		return myName1
	}else{
		return  myName1 + nickN 
	}
}; 


function randomN(){
	rNumber= Math.floor((Math.random() * 50) + 1);
	if (rNumber<20) {
		return rNumber+"...You're still very young."
	}else{
		return rNumber+"...You are an adult."
	}
};

function myAge(age){
	return age
};
	/*if (myName1!== 'Romina') {
		return "The first function returns: "+ myName(myName1)+"... You're not ROMINA!"

	}else{
	return myName(myName1) + myAge(randomN())
	}*/
function addFun(){

var data=[];
data.push(myName(myName1));
data.push(myAge(randomN()));

return data.join(', ')	

}
return addFun();
};

myInfo('Romina');

//o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push 
//"hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

function myInfo(myName1){

function myName(myName1){
	var nickN=" aka Arya Stark "
	if (myName1!=='Romina') {
		return myName1
	}else{
		return  myName1 + nickN 
	}
}; 


function randomN(){
	rNumber= Math.floor((Math.random() * 50) + 1);
	if (rNumber<20) {
		return rNumber+"...You're still very young."
	}else{
		return rNumber+"...You are an adult."
	}
};

function myAge(age){
	return age
};

function addFun(){

var data=[];
data.push(myName(myName1));
data.push(myAge(randomN()));

return data.join(', ')	

}
return addFun();
};

myInfo('Romina');

function addAdd(){
	var msg=[];
	msg.push(" Hello from the dark side...")
	return myInfo('Romina') + msg.join(', ')
}

addAdd();

//p) 🔞 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus 
//randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá 
//ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.

function gandFather(){
    var names = ['hulk', 'ironMan', '...']
    var selectedName...
    var selectedName2...
    if(father(selectedName) > father(selectedName2))
        ...
    else
        ...
    return father(selectedName).push().join()...
}

//EJERCICIO

function myInfo(){

function myName(){
	var nickN=" aka Arya Stark "
	var arrOfNames= ['Romina', 'Alex', 'Leo', 'Agustín', 'Mercedes', 'Diego'];
	var rand = Math.round(Math.random()*arrOfNames.length)
		
		if (arrOfNames[rand]!=='Romina') {
		return arrOfNames[rand]
		}else{
		return  arrOfNames[rand] + nickN 
	}
}; 


function randomN(){
	rNumber= Math.floor((Math.random() * 50) + 1);
	if (rNumber<20) {
		return rNumber+"...You're still very young."
	}else{
		return rNumber+"...You are an adult."
	}
};

function myAge(age){
	return age
};

function addFun(){

var data=[];
data.push(myName());
data.push(myAge(randomN()));

return data.join(', ')	

}
return addFun();
};

myInfo();

function addAdd(){
	var msg=[];
	msg.push(" Hello from the dark side...")
	return myInfo() + msg.join(', ')
}

addAdd();

//p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los 
//resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.
function myInfo(){

var person=new Object();

function myName(){
	var nickN=" aka Arya Stark "
	var arrOfNames= ['Romina', 'Alex', 'Leo', 'Agustín', 'Mercedes', 'Diego'];
	var rand = Math.floor(Math.random()*arrOfNames.length-1)
	person.name=arrOfNames[rand];	
		if (persona.name!=='Romina') {
		return person.name
		}else{
		return  person.name + nickN 
	}
}; 

myName()

function randomN(){
	person.age= Math.floor((Math.random() * 50) + 1);
	if (person.age<20) {
		return person.age +"...You're still very young."
	}else{
		return person.age +"...You are an adult."
	}
};

function myAge(age){
	return age
};

function addFun(){

var data=[];
data.push(myName());
data.push(myAge(randomN()));

return data.join(', ')	

}
return addFun();
};

myInfo();

function addAdd(){
	var msg=[];
	msg.push(" Hello from the dark side...")
	return myInfo() + msg.join(', ')
}

addAdd();