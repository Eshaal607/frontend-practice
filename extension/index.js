
let myLeads = []

const saveEl = document.getElementById("save-btn")
const inputEl = document.getElementById("inp-bar")
const ulEl = document.getElementById("ul-el")
const dltEl = document.getElementById("dlt-btn")
const tabsEL = document.getElementById("tabs-btn")

const leadsfromstorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsfromstorage){
    myLeads = leadsfromstorage
    render(myLeads)
}

saveEl.addEventListener("click", function(){
   myLeads.push(inputEl.value)
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   inputEl.value = ''
   render(myLeads)
   console.log(localStorage.getItem("myLeads"))
})

tabsEL.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

dltEl.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function render(leads){
    let items = ''
    for(let i = 0; i < leads.length; i++){
        items +=
         `<li>
              <a target="_blank" href='${leads[i]}'>${leads[i]}</a> 
          </li>`
    }
    ulEl.innerHTML = items
}


