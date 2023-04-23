import Decore from "../Components/Decore.js"
import PlayPop from "../Sounds/PlayPop.js"
import comket from "../dependencies/comket.js"

export default function Landing(setState) {
    let parent = comket.div({
        class: "landing", children: [
            Decore(),
            comket.div({class: "details", children: [
                comket.img({src: "./media/start.png", draggable: "false"}),
                comket.h1({text: "Quiz App"}),
                comket.button({
                    text: "Start", onclick: async () => {
                        PlayPop()
                        await setState("Category")
                    }
                })
            ]})
        ]
    })
    setTimeout(() => {
        parent.querySelectorAll(".details").forEach(
            item => item.classList.add("shown")
        )
    }, 1);
    return parent
}