
function bingo() {

	var bCard=[2,5,6,8,3];
	console.table(bCard)	

	function randomN(){
		ranNum= Math.floor((Math.random() * 8) + 1);
		console.log("El número sorteado es: "+ ranNum);

			for (var i = 0; i < bCard.length; i++){
				if(bCard[i]==ranNum){
					bCard[i]='X'
					console.table(bCard)
					}
				}
			game();

	}

	function completeCard(){
			return bCard.every(function(num){
				return num=='X';
			});
	}		
	

	function game(){
		var checking=completeCard();
		if (checking==false){
			var play=confirm('Desea continuar jugando?')
			if (play==true){
			return randomN();
			}else{
			return "Adiós!"};
		}else{
			console.log("Bingo! Felicidades has completado el cartón!")
			return;
		}
		}	
	game();
	}

	
bingo()

	
//mini-bingo

function miniBingo(){

	var carton = [1,2,3,4,5,6,7,8,9]
	function generateRandom(){
		return Math.floor((Math.random() * 10) + 1);
	}

	function bingo(){
		var numRandom = generateRandom()
		console.log('El numero de este turno ha sido... =>' + numRandom)
		for(var i = 0; i < carton.length; i++){
			if(carton[i] === numRandom){
				carton[i] = 'X'
				console.log(carton)
			}
		}
		askAgain()
	}

	function checkCarton(){
		return carton.every(function(num){
                return num==='X';
            });
	}

	function askAgain(){
		var checking = checkCarton()
		if(checking === false){
          var ans = confirm('again? y/n')
            if(ans === true){
                bingo()
            }else{
                return 'deu!'
            }
		}else{
			console.log('Has completado el bingo!')
			return 0
		}
		
	}
	 askAgain()
}

miniBingo()