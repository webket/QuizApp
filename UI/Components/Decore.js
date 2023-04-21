import comket from "../dependencies/comket.js";

export default function Decore() {
    let parent = comket.div({
        class: "decore", children: [
            comket.img({
                class: "top-shape", draggable: "false",
                src: "./media/decore/top-shape.svg"
            }),
            comket.img({
                class: "bottom-shape", draggable: "false",
                src: "./media/decore/bottom-shape.svg"
            })
        ]
    })
    return parent
}