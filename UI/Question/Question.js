import comket from "../dependencies/comket.js"
import Request from "../../API/Request.js"
import Decore from "../Components/Decore.js"
import Tracking from "../Components/Tracking.js"
import OneQuestion from "./Components/OneQuestion.js"
import PlayPop from "../Sounds/PlayPop.js"

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
    setTimeout(() => {
        parent.querySelectorAll(".details").forEach(
            item => item.classList.add("shown")
        )
    }, 1);
    function nextQuestion() {
        PlayPop()
        parent.querySelector(".tracking").render()
        parent.querySelector(".details").append(
            OneQuestion(
                quiz.nextQuestion(),
                nextQuestion, checkCorrect, finishQuiz, setState
            )
        )
        parent.querySelector(".details").children[0].classList.add("going")
        setTimeout(() => {
            parent.querySelector(".details").children[1].classList.add("shown")
        }, 1);

        setTimeout(() => {
            parent.querySelector(".details").children[0].remove()
        }, 300);
    }
    function checkCorrect(question) {
        return quiz.checkCurrent(question)
    }
    async function finishQuiz() {
        PlayPop()
        await setState(`Result--${category}--${JSON.stringify(quiz._results)}`)
    }
    return parent
}