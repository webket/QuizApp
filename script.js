import App from "./UI/App/App.js"
import comket from "./UI/dependencies/comket.js"
document.body.append(
    comket.audio({src: "./media/sounds/correct.mp3", class: "correct-sound"}),
    comket.audio({src: "./media/sounds/wrong.mp3", class: "wrong-sound"}),
    comket.audio({src: "./media/sounds/pop.mp3", class: "pop-sound"}),
    await App()
)
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