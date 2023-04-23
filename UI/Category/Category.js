import Decore from "../Components/Decore.js"
import comket from "../dependencies/comket.js"

const categories = [
    "books", "films", "music", "computers", "math", "sports", "geography",
    "history", "art", "cartoon"
]
export default function Category(setState) {
    let parent = comket.div({
        class: "categories", children: [
            Decore(),
            comket.div({class: "details", children: [
                comket.h2({text: "Choose Category"}),
                comket.div({class: "cards", children:
                    categories.map(item => {
                        return comket.div({
                            class: "category", onclick: async () => {
                                let sound = document.querySelector(".pop-sound")
                                sound.volume = 0.02
                                sound.playbackRate = 2
                                sound.currentTime = 0.15
                                sound.play()
                                await setState(`Question-${item}`)
                            },
                            children: [
                                comket.img({src: `./media/categories/${item}.png`}),
                                comket.h3({text: item})
                            ]
                        })
                    })
                })
            ]})
        ]
    })
    setTimeout(() => {
        parent.querySelectorAll(".category").forEach(
            item => item.classList.add("shown")
        )
    }, 1);
    return parent
}