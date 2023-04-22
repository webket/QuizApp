import comket from "../dependencies/comket.js"
import Landing from "../Landing/Landing.js"
import Category from "../Category/Category.js"
import Question from "../Question/Question.js"
import Result from "../Result/Result.js"

export default async function App(page) {
    let parent = comket.div({
        class: "app", children: [
            comket.p({text: "loading..."})
        ]
    })
    parent.status = {
        page: {
            value: page || "Landing", async setValue(value) {
                parent.status.page.value = value
                document.querySelector(".app").replaceWith( await App(value) )
            }
        }
    }
    if(parent.status.page.value === "Landing") {
        parent.innerHTML = ""
        parent.append(Landing(parent.status.page.setValue))
    }
    else if(parent.status.page.value === "Category") {
        parent.innerHTML = ""
        parent.append(Category(parent.status.page.setValue))
    }
    else if(parent.status.page.value.split("-")[0] === "Question") {
        parent.innerHTML = ""
        parent.append(
            await Question(
                parent.status.page.setValue,
                parent.status.page.value.split("-")[1]
            )
        )
    }
    else if(parent.status.page.value.split("--")[0] === "Result") {
        parent.innerHTML = ""
        parent.append(
            Result(
                parent.status.page.setValue,
                JSON.parse(parent.status.page.value.split("--")[2]),
                parent.status.page.value.split("--")[1]
            )
        )
    }
    return parent
}