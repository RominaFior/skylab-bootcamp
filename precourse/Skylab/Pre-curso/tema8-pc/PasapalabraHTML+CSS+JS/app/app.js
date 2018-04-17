
    var questions = [
        { letter: "a", answer: "aletas", status: 0, question: ("CON LA A. En plural. Lo que emplean los peces para despazarse.") },
        { letter: "b", answer: "bañarse", status: 0, question: ("CON LA B. Entrar en el agua para lavarse, para nadar o jugar.") },
        { letter: "c", answer: "cuadrado", status: 0, question: ("CON LA C. Tiene cuatro lados iguales que forman cuatro ángulos rectos.") },
        { letter: "d", answer: "debil", status: 0, question: ("CON LA D. Que tiene poca fuerza, poco vigor o poca resistencia.") },
        { letter: "e", answer: "elefante", status: 0, question: ("CON LA E. El mamífero más grande.") },
        { letter: "f", answer: "futuro", status: 0, question: ("CON LA F. Tiempo que viene después.") },
        { letter: "g", answer: "gato", status: 0, question: ("CON LA G. Animal doméstico de pelo muy suave.") },
        { letter: "h", answer: "hada", status: 0, question: ("CON LA H. Personaje de cuentos que usa una varita mágica.") },
        { letter: "i", answer: "iglu", status: 0, question: ("CON LA I. Casa de los esquimales.") },
        { letter: "j", answer: "jirafa", status: 0, question: ("CON LA J. Animal salvaje de cuello muy largo.") },
        { letter: "k", answer: "koala", status: 0, question: ("CON LA K. Animal que trepa por los árboles y vive en Australia.") },
        { letter: "l", answer: "lata", status: 0, question: ("CON LA L. Envase de metal.") },
        { letter: "m", answer: "multiplicacion", status: 0, question: ("CON LA M. Operación inversa a la división.") },
        { letter: "n", answer: "nunca", status: 0, question: ("CON LA N. Ningún día o en ningún tiempo.") },   
        { letter: "o", answer: "oveja", status: 0, question: ("CON LA O. Animal doméstico que tiene el cuerpo cubierto de lana.") },
        { letter: "p", answer: "pajaro", status: 0, question: ("CON LA P. Ave voladora, generalmente pequeña, de cualquier especie.") },
        { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Alimento sólido preparado con leche.") },
        { letter: "r", answer: "resumen", status: 0, question: ("CON LA R. Pocas palabras que  cuentan una historia más larga.") },
        { letter: "s", answer: "sandalia", status: 0, question: ("CON LA S. Calzado que no tapa todo el pie.") },
        { letter: "t", answer: "techo", status: 0, question: ("CON LA T. Parte de una habitación que está arriba.") },
        { letter: "u", answer: "urgente", status: 0, question: ("CON LA U. Que no puede esperar.") },
        { letter: "v", answer: "veloz", status: 0, question: ("CON LA V. Que es muy rápido.") },    
        { letter: "y", answer: "yegua", status: 0, question: ("CONTIENE LA Y. Hembra del caballo.") },
        { letter: "z", answer: "zarpar", status: 0, question: ("CON LA Z. Empezar a navegar.") },
    ]

    var correct = 0;
    var incorrect = 0;
    var counter = 0;
    var gameQuestion = document.getElementById('gameQuestion');
    var results = document.getElementById('results'); 

    var kidsMusic = new Audio("musik/music.mp3");
    kidsMusic.volume = 1;
    kidsMusic.play();


    function musicButton() {
        var music = document.getElementById("musicButton");

        if (kidsMusic.muted) {
            kidsMusic.muted = "";
            music.innerHTML = "<strike>♫</strike>";
        } 
        else {
            kidsMusic.muted = "true";
            music.innerHTML = "♫";
        }
    }
    
    window.onload=function(){
        document.getElementById('response').style.display="none"
        document.getElementById('endGame').style.display="none";
        document.getElementById('images').style.display="block";
        document.getElementById('images2').style.display="none";

    }
   
   function Game() {
        counter = 0;
        correct = 0;
        incorrect = 0;
        gameQuestion.innerHTML = questions[counter].question;
        results.innerHTML = "Recuerda escribir las palabras sin tilde. Suerte!";
        document.getElementById('response').style.display = "block";
        document.getElementById('endGame').style.display = "block";
        document.getElementById('jugar').style.display="none";
        document.getElementById('images').style.display="none";
        document.getElementById('images2').style.display="block"

    }

    function showPerformance() {

    if (questions[counter].status === 0){
        performance();
    }
    else if (counter === questions.length-1 && correct + incorrect === questions.length){
        endGame(); 
    }
    else if (counter === questions.length-1){
        restartGame();
    }
    else {
        counter++
        showPerformance();
    }
    }

    
    function performance(){
        gameQuestion.innerHTML = questions[counter].question;
        results.innerHTML = "Respuestas correctas: " + correct + " respuestas incorrectas: " + incorrect + ".";
        document.getElementById("write").value = "";
        document.getElementById("write").autofocus = "";
    }
    function restartGame(){
        counter = 0;
        showPerformance();
    }

    function endGame(){
        document.getElementById('response').style.display = "none";
        document.getElementById('gameQuestion').style.display = "none";
        document.getElementById('endGame').style.display = "block";
        results.innerHTML = "Hasta luego! Respuestas correctas: " + correct + " respuestas incorrectas: " + incorrect + ".";
    }

    function checkAnswer() {
        var playerAnswer = document.getElementById('write').value.toLowerCase()
        var letter = document.getElementById("alphabet").children;
            if(playerAnswer === questions[counter].answer){
                correct++;
                questions[counter].status = 1;
                letter[counter].classList.toggle("greenWord");
                showPerformance();
            }else{
                incorrect++;
                questions[counter].status = 2;
                letter[counter].classList.toggle("redWord");
                showPerformance();
            }
        }

    function passWord() {
        var letter = document.getElementById("alphabet").children;
        if (counter < questions.length-1){
            counter++;
            showPerformance();
            results.innerHTML ="Pasapalabra!";
            }
        else {
            restartGame();
        }
    }

    function exitGame() {
        document.getElementById('response').style.display = "none";
        document.getElementById('gameQuestion').style.display = "none";
        document.getElementById('endGame').style.display="block";
        document.getElementById('jugar').style.display="none";
        results.innerHTML = "Hasta luego! Respuestas correctas: " + correct + " respuestas incorrectas: " + incorrect + ".";
    }

    

    //
    // Music and sound effects
