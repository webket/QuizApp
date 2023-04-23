import comket from "../dependencies/comket.js"

export default function Loading() {
    let parent = comket.div({
        class: "loading", children: [
            comket.img({src: "./media/start.png"})
        ]
    })
    return parent
}