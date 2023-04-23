import comket from "../dependencies/comket.js"
import Request from "../../API/Request.js"
import Decore from "../Components/Decore.js"
import Tracking from "../Components/Tracking.js"
import OneQuestion from "./Components/OneQuestion.js"

export default async function Question(setState, category) {
    let quiz = await new Request(category)
    let parent = comket.div({
        class: "question", children: [
            Tracking(quiz._results),
            Decore(),
            comket.div({class: "details", children: [
                OneQuestion(
                    quiz.nextQuestion(),
                    nextQuestion, checkCorrect, finishQuiz, setState
                )
            ]})
        ]
    })
    function nextQuestion() {
        parent.querySelector(".tracking").render()
        parent.querySelector(".details").children[0].replaceWith(
            OneQuestion(
                quiz.nextQuestion(),
                nextQuestion, checkCorrect, finishQuiz, setState
            )
        )
    }
    function checkCorrect(question) {
        return quiz.checkCurrent(question)
    }
    async function finishQuiz() {
        await setState(`Result--${category}--${JSON.stringify(quiz._results)}`)
    }
    return parent
}