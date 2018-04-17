

/*function calculator () {

	
	if (!isNaN(arguments)) {

		    if (arguments.length == 1) {

			return Math.sqrt(arguments);			

		    } else if (arguments.length > 1) {

			return 'The sum, rest, mult and div of '  //num1 + ' and ' + num2 + ' is: ' + (num1+num2) + ', ' + (num1-num2) + ', ' + (num1*num2) + ' and ' + (num1/num2);
			

	} else {

		return "You can't do this operation!"
	}

};


calculator(8);





function calculator() {
	
	
	for (var i = 0; i < arguments.length; i++) {

		if (!isNaN(arguments[i])) { 
	
			var long = arguments.length;

			if (long == 1) {

				return Math.sqrt(arguments);

			}else{

				return 'The sum, rest, mult and div of '
			}

	}else{

		return "You can't do this operation!"
	}	
	}
};	


calculator(9);	

function calculator() {
	
	return arguments.length
}

calculator(8);*/


function calculator(num1,num2) {

	var mist = "You can't do this operation!"
	
	if (num2 == undefined) {

		if (!isNaN(num1)) {

			return 'La raíz cuadrada de ' + num1 + ' es => ' + Math.sqrt(num1).toFixed(3);

		}else{

			return mist
		}

	}else if(!isNaN(num1) && !isNaN(num2)){
	
		var oper = [['Suma',num1+num2], ['Resta',num1-num2] , ['Multiplicación',num1*num2], ['División',(num1/num2).toFixed(3)]];

		
		for (var i = 0; i < oper.length; i++) {
			
			
				return console.table(oper);
			}
		 			
		
	}else{

		return mist

		}
	};
	

//calculator('hola');

//calculator('hola',9);
//calculator(17,'hola');	
//calculator(8);
calculator(18,6);


