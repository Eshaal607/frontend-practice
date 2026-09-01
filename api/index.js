// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data => {
//     const imgEl = document.createElement("img")
//     imgEl.src = data.message
//     imgEl.alt = "dog picture"
//     document.getElementById('img-container').appendChild(imgEl)
// })

// async function getSuggestion(){
//     let response = await fetch('https://apis.scrimba.com/bored/api/activity')
//     let data = await response.json()
//     console.log(data)
// }
// getSuggestion()

// try{
//     let response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
//         {
//             method : 'POST',
//             body: JSON.stringify({
//                 title: 'Holiday Nightmare',
//                 body: 'When i was kidnapped in scotland...',
//                 userid: 100
//             })
//         }
//     )
//     if(!response.ok){
//         throw new Error('There was a problem with api')
//     }
//     let data = await response.json()
//     console.log(data)
// }
// catch (err){
//     console.log(err)
// }
function preloading(url){
    return new Promise((resolve,reject) => {
    const imgEl = new Image()
    imgEl.src = url
    imgEl.alt = "image of idk"
    imgEl.addEventListener('load',() => resolve(imgEl))
    imgEl.addEventListener('error',() => reject("did not load"))

})
}

try{
    const response = await preloading('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
    console.log(response)
    document.getElementById('img-container').appendChild(response)
}
catch(err){
    console.error(err)
}