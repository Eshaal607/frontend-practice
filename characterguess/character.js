
import { getDataFromDB } from "./database.js"
let points = 0;
let count = 0;
let startEl = document.getElementById("start-btn")
let objEl = document.getElementById("obj")
let questionEl = document.createElement('h2')
let option1 = document.createElement('button')
let option2 = document.createElement('button')
let option3 = document.createElement('button')
let option4 = document.createElement('button')
let showresult = document.createElement('button')
showresult.textContent = "Show Result"

option1.addEventListener('click', () => {
    points += 1
    nextquestion()
})
option2.addEventListener('click', () => {
    points += 2
    nextquestion()
})
option3.addEventListener('click', () => {
    points += 3
    nextquestion()
})
option4.addEventListener('click', () => {
    points += 4
    nextquestion()
})

startEl.addEventListener('click', startgame)
showresult.addEventListener('click', showcharacter)

function startgame() {
    objEl.innerHTML = ""
    generatequestion()
}

async function generatequestion() {
    const result = await getDataFromDB()
    questionEl.textContent = result[count].question
    option1.textContent = result[count].a
    option2.textContent = result[count].b
    option3.textContent = result[count].c
    option4.textContent = result[count].d

    objEl.appendChild(questionEl)
    objEl.appendChild(option1)
    objEl.appendChild(option2)
    objEl.appendChild(option3)
    objEl.appendChild(option4)
}

function nextquestion() {
    count++
    generatequestion()
    if (count === 10) {
        objEl.innerHTML = ""
        objEl.appendChild(showresult)
    }
}

function showcharacter() {
    objEl.innerHTML = ""

    if (points <= 15) {
        questionEl.textContent = "You are: Carden "
    }
    else if (points <= 20) {
        questionEl.textContent = "You are: Harry Potter"
    }
    else if (points <= 25) {
        questionEl.textContent = "You are: Jude Duarte"
    }
    else if (points <= 30) {
        questionEl.textContent = "You are: Violet Sorrengail"
    }
    else {
        questionEl.textContent = "You are: Katniss Everdeen"
    }

    objEl.appendChild(questionEl)
}
