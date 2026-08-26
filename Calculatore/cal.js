
let num1 = 8
let num2 = 2

let element1 = document.getElementById("element-1").textContent = num1
let element2 = document.getElementById("element-2").textContent = num2
let AnsEl = document.getElementById("ans")

let answer = 0

function add(){
  answer = num1 + num2
   AnsEl.textContent += answer
}
function subtract(){
  answer = num1 - num2
   AnsEl.textContent += answer
}
function multiply(){
  answer = num1 * num2
   AnsEl.textContent += answer
}
function divide(){
  answer = num1 / num2
   AnsEl.textContent += answer
}