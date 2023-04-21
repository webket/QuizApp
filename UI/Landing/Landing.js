import Decore from "../Components/Decore.js"
import comket from "../dependencies/comket.js"

export default function Landing(setState) {
    let parent = comket.div({
        class: "landing", children: [
            Decore(),
            comket.div({class: "details", children: [
                comket.img({src: "./media/start.png", draggable: "false"}),
                comket.h1({text: "Quiz App"}),
                comket.button({
                    text: "Start", onclick: () => {
                        setState("Category")
                    }
                })
            ]})
        ]
    })
    return parent
}