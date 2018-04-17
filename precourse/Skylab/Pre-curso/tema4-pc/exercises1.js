//uso MAP

/*function introMap(nums, multBy) {
	var table=nums.map(function(num) {
		return num*multBy
	});
	console.log(table)
}
introMap([1,2,3,4,5,6,7,8,9,10], 4)

function usoMap(nums,multBy){
	var table=nums.map(function(num){
		return num*multBy
	})
	console.log(table)
}
usoMap([1,2,3,4,5,6], 9)
function game(hola,chau) {
 	var salida=hola.map(function(cero) {
 		return cero*chau
 	})
 	console.log(salida)
 } 
game([1,2,3,4,5,6],7)*/
function usoFilter(val1) {
	var table=val1.filter(function(num) {
		return num>10
	})
	console.log(table)
}
usoFilter([5,23,23,5,1,45,2,1])

/*a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los 
numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada 
por 2.*/

// output =>
//1ª pareja 2 - 4
//2ª pareja 4 - 6
//3ª pareja 6 - 8
//4ª pareja 8 - 10
//5ª pareja 10 - 12
//6ª pareja 12 - 14
//7ª pareja 14 - 16
//8ª pareja 16 - 18

function showNums(nums,multBy,del){
    for(var i = 0; i <del; i++){
       console.log(i+1+'ª pareja '+ nums[i]*multBy+'-'+nums[i+1]*multBy)
    }
}
showNums([1,2,3,4,5,6,7,8,9],12,3)
//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.
//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?

function fibonacci(num) {
    var a = 0;
    var b = 1;
    var result=b;
    var info=[]

   for(var i=0; i<num;i++)
    {
    	info.push(result + ' pos '+[i+1]+'º');
        result= a + b;
        a = b;
        b = result;
                               
    }
console.log(info.join(', '))
}
fibonacci(10);
//slack
function fibonacci(num) {
    var a = 0;
    var b = 1;
    
    var fibo=[a,b]
   for(var i=0; i<num;i++)
    {
        fibo.push(fibo[i]+fibo[i+1])
        console.log(fibo)                      
    }

}
fibonacci(5);

//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.


//
function fibonacci(num) {
    var a = 0;
    var b = 1;
    var result=b;
    var info=[]

   for(var i=0; i<num;i++)
    {
    	info.push(result);
        result= a + b;
        a = b;
        b = result;
                               
    }
    
    
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= i; j++) {
            info+=j;
        }
        console.log(info);
        
    }
}

fibonacci(5);
//
var x = 0 , y = 1;

var num = 6;

console.log("0");
console.log("0 1");

var str = "0 1";

for(var i = 2 ; i < num ; i ++){
    var amt = x + y ;

    x = y;
    y = amt;

    str += " " + amt;

    console.log(str);

}
//resultado

//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones 
//de los dígitos cambiadas, creandio un nuevo código
//El primer numero se traslada a la última posicion. El segundo, el tercero y el cuarto suben una posición.
function codeScript(code) {

    function desordenarNum(code) {
        var nuevoArray=[];
        nuevoArray.push(code[0]);
        nuevoArray.splice(0,0,code[1],code[2],code[3]);
        return nuevoArray;
    }
    var arrDesordenado=desordenarNum(code);
    console.log(arrDesordenado);

}
codeScript([3,7,1,2])
//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos 
//encriptados (Los dos códigos se deberían encriptar en la misma función)
