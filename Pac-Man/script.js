// Juego: Adivina el Número
const randomNumber = Math.floor(Math.random() * 10) + 1;
const submitButton = document.getElementById('submit');
const resultText = document.getElementById('result');

//Logica del juego adivina en JAVASCRIPT

submitButton.addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('guess').value);
    if (userGuess === randomNumber) {
        resultText.textContent = '¡Felicidades! Adivinaste el número, A JUEGAR PACKMAN!.';
    } else if (userGuess < randomNumber) {
        resultText.textContent = 'Demasiado bajo. Intenta de nuevo, ni modo viejo.';
    } else if (userGuess > randomNumber) {
        resultText.textContent = 'Demasiado alto. Intenta de nuevo, ponte vivo viejo.';
    }
});

// Juego: Trivia de Videojuegos
const triviaQuestions = [
    {
        question: "¿Cuál es el nombre del famoso fontanero de Nintendo?",
        answer: "mario"
    },
    {
        question: "¿En qué videojuego aparece un personaje llamado Link?",
        answer: "zelda"
    },
    {
        question: "¿Cuál es el juego más vendido de todos los tiempos?",
        answer: "tetris"
    },
    {
        question: "¿En qué año se lanzó el primer PlayStation?",
        answer: "1994"
    },
    {
        question: "¿Cuál es el nombre de la franquicia de juegos de lucha de Capcom con personajes de Marvel?",
        answer: "marvel vs capcom"
    }
];

let currentQuestionIndex = 0; // Índice de la pregunta actual
let score = 0; // Puntaje inicial

// Función para mostrar la siguiente pregunta de trivia
function showNextTriviaQuestion() {
    if (currentQuestionIndex < triviaQuestions.length) {
        const currentQuestion = triviaQuestions[currentQuestionIndex];
        document.getElementById("triviaQuestion").textContent = currentQuestion.question; // Muestra la pregunta actual
        document.getElementById("triviaAnswer").value = ""; // Limpia el campo de respuesta
    } else {
        document.getElementById("triviaQuestions").innerHTML = `<h3>Juego terminado. Tu puntaje final es: ${score}</h3>`; // Muestra el puntaje final
    }
}

// Evento que se activa al hacer clic en el botón "Enviar Respuesta"
document.getElementById("submitTrivia").addEventListener("click", () => {
    const userAnswer = document.getElementById("triviaAnswer").value.toLowerCase(); // Obtiene la respuesta del usuario

    // Compara la respuesta del usuario con la respuesta correcta
    if (userAnswer === triviaQuestions[currentQuestionIndex].answer) {
        score++; // Incrementa el puntaje si la respuesta es correcta
        document.getElementById("triviaResult").textContent = "¡Correcto!"; // Mensaje de respuesta correcta
    } else {
        document.getElementById("triviaResult").textContent = `Incorrecto. La respuesta correcta era: "${triviaQuestions[currentQuestionIndex].answer}".`; // Mensaje de respuesta incorrecta
    }

    currentQuestionIndex++; // Avanza a la siguiente pregunta
    document.getElementById("triviaScore").textContent = `Puntaje: ${score}`; // Muestra el puntaje actualizado
    showNextTriviaQuestion(); // Muestra la siguiente pregunta
});

// Inicializa el primer juego de trivia
showNextTriviaQuestion();
