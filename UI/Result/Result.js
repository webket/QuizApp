import Decore from "../Components/Decore.js"
import Tracking from "../Components/Tracking.js"
import comket from "../dependencies/comket.js"

export default function Result(setState, results, category) {
    let precentage = results.filter(item => item === 1).length * 10
    let parent = comket.div({
        class: "result", children: [
            // Tracking(),
            Decore(),
            comket.div({class: "details", children: [
                comket.img({src: "./media/star.png"}),
                comket.h4({text: `${precentage}%`}),
                comket.div({class: "actions", children: [
                    comket.button({text: "Reset", onclick: async () => {
                        await setState(`Question-${category}`)
                    }}),
                    comket.button({text: "Home", onclick: async () => {
                        await setState("Category")
                    }})
                ]})
            ]})
        ]
    })
    return parent
}