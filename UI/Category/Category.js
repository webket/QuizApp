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
    return parent
}