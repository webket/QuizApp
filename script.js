import App from "./UI/App/App.js"
document.body.append( await App() )
window.addEventListener("contextmenu", e => {
    e.preventDefault()
})
// window.addEventListener("keydown", e => {
//     console.log(e.code)
//     if(
//         e.code == "MetaRight" && e.code == "AltLeft" && e.
//     ) {
//         e.preventDefault()
//     }
// })