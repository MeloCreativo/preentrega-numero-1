alert("Preentrega: QuizScript\nMelo, Francisco")

// Variables para categorías a consultar
const ARTE = 1
const CULTURA = 2
const ESPECTACULOS = 3


// Preguntas para "QuizScript"
let artQuiz = [
    {
        question:  "¿Quién pintó la Mona Lisa?",
        options: ["Leonardo Davinci", "Leonardo Devecio", "Miguel Angel"],
        correctAnswer: 1
    },
    {
        question:  "¿Quién fue el encargado de pintar el techo de la Capilla Sixtina?",
        options: ["Donatello", "Neil Amstrong", "Miguel Angel"],
        correctAnswer: 3
    },
    {
        question:  "¿Quién fue el reconocido autor de El Guernica?",
        options: ["Ricardo Mollo", "Pablo Picasso", "Santos Biasatti"],
        correctAnswer: 3
    }
]

let cultureQuiz = [
    {
        question:  "¿Dónde se originaron los Juegos Olímpicos?",
        options: ["Roma", "Grecia", "Inglaterra"],
        correctAnswer: 2
    },
    {
        question:  "¿Quién fue el autor del famoso libro El Quijote?",
        options: ["Miguel Cervantes", "Juan Domingo Perón", "Alejandro Dolina"],
        correctAnswer: 1
    },
    {
        question:  "¿Cuál es el disco más vendido de la historia?",
        options: ["Thriller - Michael Jackson", "Arrival - Abba", "Back in black - AC/DC"],
        correctAnswer: 1
    }
]

let entertainmentQuiz = [
    {
        question:  "¿Quién fue el director del famoso film E.T?",
        options: ["Sammuel Jackson", "Steven Seagul", "Steven Spielberg"],
        correctAnswer: 2
    },
    {
        question:  "¿Cuál es el nombre del film más taquillero de la historia?",
        options: ["Avatar", "Titanic", "Esperado la carroza"],
        correctAnswer: 2
    },
    {
        question:  "¿Cuáles son las siglas del canal de noticias más famoso de Reino Unido?",
        options: ["CNN", "BBC", "TNT"],
        correctAnswer: 2
    }
]

// Ingreso de nombre y validación del mismo
function validateName() {
    let getUserName = prompt("¡Bienvenidos a QuizScript!\nPor favor ingresa tu nombre:")
    while(getUserName === "" || !isNaN(getUserName)) {
        getUserName = prompt("Bienvenido/a.\nPor favor ingrese su nombre:")
    }
    return getUserName;
}


// Comienzo del juego una vez validado el nombre del usuario
function startingGame() {
    let newGame = parseInt(prompt("Hola " + userName + " elige una opción para comenzar\n" + "1) Nuevo juego\n" + "2) Sugerir una pregunta"))
    while(newGame !== 1 && newGame !== 2) {
        newGame = parseInt(prompt("Hola " + userName + " elige una opción para comenzar\n" + "1) Nuevo juego\n" + "2) Sugerir una pregunta"))
    }
    return newGame;
}

/************/ 
// Funciones en caso de juego nuevo
/************/

// Selección de la categoría deseada
function chooseCategory(userName) {
    let categorySelection = parseInt(prompt("Muy bien " + userName + " " + "para jugar elige una categoría, introduciendo el número de índice a la izquierda de la opción que decidas:\n1) Arte\n2) Cultura general\n3) Espectáculos"))
    while (categorySelection !== ARTE && categorySelection !== CULTURA && categorySelection !== ESPECTACULOS) {
        categorySelection = parseInt(prompt("Hubo un error en tu selección " + userName + ". " + "\nPor favor elige una categoría:\n1) Arte\n2) Cultura general\n3) Espectáculos"))
    };
    return categorySelection;
}

// Categoría elegida y comienzo del Quiz
function askQuestion(categorySelection) {
    if (categorySelection === ARTE) {
        alert("Muy bien haz elegido la categoría Arte. !Responde las siguientes preguntas y acumula puntos para ganar!")
        result = art()
    } else if (categorySelection === CULTURA) {
        alert("Muy bien haz elegido la categoría Cultura General. !Responde las siguientes preguntas y acumula puntos para ganar!")
        result = culture()
    } else if (categorySelection === ESPECTACULOS) {
        alert("Muy bien haz elegido la categoría Espectáculos. !Responde las siguientes preguntas y acumula puntos para ganar!")
        result = entertainment()
    }
    return result
}

// Preguntas, opciones y counter start para categoría "Arte"
function art() {
    let counter = 0
    for (let i = 0; i < artQuiz.length; i++) {
        let respUsuario = prompt(`${artQuiz[i].question} \n1) ${artQuiz[i].options[0]}\n2) ${artQuiz[i].options[1]}\n3) ${artQuiz[i].options[2]}`)
        while (respUsuario === "" || respUsuario > 3 || respUsuario < 1 || isNaN(respUsuario) ) {
            respUsuario = prompt(`Ha ocurrido un error.\n${artQuiz[i].question} \n1) ${artQuiz[i].options[0]}\n2) ${artQuiz[i].options[1]}\n3) ${artQuiz[i].options[2]}`)
        }
        if (respUsuario == artQuiz[i].correctAnswer) {
            counter++
        }
    }
    return counter;
}
// Preguntas, opciones y counter start para categoría "Culture General"
function culture() {
    let counter = 0
    for (let i = 0; i < cultureQuiz.length; i++) {
        let respUsuario = prompt(`${cultureQuiz[i].question} \n1) ${cultureQuiz[i].options[0]}\n2) ${cultureQuiz[i].options[1]}\n3) ${cultureQuiz[i].options[2]}`)
        while (respUsuario === "" || respUsuario > 3 || respUsuario < 1 || isNaN(respUsuario) ) {
            respUsuario = prompt(`${cultureQuiz[i].question} \n1) ${cultureQuiz[i].options[0]}\n2) ${cultureQuiz[i].options[1]}\n3) ${cultureQuiz[i].options[2]}`)
        }
        if (respUsuario == cultureQuiz[i].correctAnswer) {
            counter++
        }   
    }
    return counter;
}
// Preguntas, opciones y counter start para categoría "Espectáculos"
function entertainment() {
    let counter = 0
    for (let i = 0; i < entertainmentQuiz.length; i++) {
        let respUsuario = prompt(`${entertainmentQuiz[i].question} \n1) ${entertainmentQuiz[i].options[0]}\n2) ${entertainmentQuiz[i].options[1]}\n3) ${entertainmentQuiz[i].options[2]}`)
        while (respUsuario === "" || respUsuario > 3 || respUsuario < 1 || isNaN(respUsuario) ) {
            respUsuario = prompt(`${entertainmentQuiz[i].question} \n1) ${entertainmentQuiz[i].options[0]}\n2) ${entertainmentQuiz[i].options[1]}\n3) ${entertainmentQuiz[i].options[2]}`)
        }
        if (respUsuario == entertainmentQuiz[i].correctAnswer) {
            counter++
        }
    }
    return counter;
}

/************/ 
// Funciones en caso de juego nuevo
/************/

// Setear la nueva pregunta en la categoría deseada
function addNewQuestion(name) {
    let selectCategory = parseInt(prompt("Selecciona la categoría a la que pertenece tu pregunta\n" + "1) Arte\n" + "2) Cultura General\n" + "3) Espectáculos"))
    if (selectCategory === 1) {
        setNewItemArt()
    } else if (selectCategory === 2) {
        setNewItemCulture()
    } else if (selectCategory === 3) {
        setNewItemEntertainment()
    } else {
        addNewQuestion(name);
    }
}

// Agregar pregunta nueva a la lista
function newQuizItem() {
    let newItem = {}
    newItem.question = prompt("Ingrese nueva pregunta")
    newItem.options = prompt("Ingrese sus opciones separadas por coma.\nIngrese un máximo de 3 opciones.").split(",")
    newItem.correctAnswer = parseInt(prompt("Ingrese respuesta correcta utilizando un número del 1 al 3."))
    return newItem
}

// Agregar pregunta a lista de Arte
function setNewItemArt(name) {
    let newItem = newQuizItem()
    artQuiz.push(newItem)
    alert("Genial, su pregunta se ha agregado")
    mainWorkflow(userName);
}

// Agregar pregunta a lista de Cultura
function setNewItemCulture(name) {
    let newItem = newQuizItem()
    cultureQuiz.push(newItem)
    alert("Genial, su pregunta se ha agregado")
    mainWorkflow(userName);
}

// Agregar pregunta a lista de Espectáculos
function setNewItemEntertainment(name) {
    let newItem = newQuizItem()
    entertainmentQuiz.push(newItem)
    alert("Genial, su pregunta se ha agregado")
    mainWorkflow(userName);
}

// Resultado final
function showResult(finalResult, name) {
    if(finalResult == 3){
        alert("¡Genial " + name + ", tu puntaje fue de " + finalResult + " ,un puntaje perfecto!.\nGracias por participar." )
        alert("¿Quieres jugar de nuevo?")
        mainWorkflow(name);
    } else if(finalResult < 3){
        alert("Buen intento, tu puntaje fue de " + finalResult + ". No obtuviste un puntaje perfecto. ¡Mejor suerte la próxima!\nHaz click en aceptar o refresca para volver a intentarlo.")
        mainWorkflow(name)
    }
}

/*****/ 
// Main Workflow
/*****/

//** Flujo principal del programa **//
function mainWorkflow(name) {
    const newGame = startingGame()
    if (newGame === 1) {
        const categorySelection = chooseCategory(name)
        const result = askQuestion(categorySelection)
        showResult(result, name)
    } else if (newGame === 2) {
        addNewQuestion(name);
    }
}

//*** Llamada a la función principal (mainWorkflow) ***//
let userName = validateName();
mainWorkflow(userName);