let countEl = document.getElementById("count-el")
let prevEl = document.getElementById("prev-el")

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
}

function save(){
   let dash = " " + count + " - "
   prevEl.textContent += dash
   count = 0
   countEl.innerText = count
}






