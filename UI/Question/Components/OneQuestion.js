import comket from "../../dependencies/comket.js";

export default function OneQuestion(data, nextQuestion, checkCorrect, finishQuiz, setState) {
    let parent = comket.div({
        class: `one-question ${data.number == 1 ? "shown" : ""}`, children: [
            comket.h4({text: `Question ( ${data.number} )`}),
            comket.h5({text: data.question}),
            comket.div({class: "answers", children: [
                comket.div({
                    class: "top",
                    children: data.answers.slice(0, 2).map(answer => {
                        return comket.div({
                            class: "answer-card", onclick: () => {},
                            children: [
                                comket.p({text: answer}),
                                comket.div({class: "checkbox", children: [
                                    comket.Element("ion-icon", {
                                        name: "checkmark", class: "right"
                                    }),
                                    comket.Element("ion-icon", {
                                        name: "close", class: "wrong"
                                    })
                                ]})
                            ]
                        })
                    })
                }),
                data.answers.length > 2 ? comket.div({
                    class: "bottom",
                    children: data.answers.slice(2).map(answer => {
                        return comket.div({
                            class: "answer-card", onclick: () => {},
                            children: [
                                comket.p({text: answer}),
                                comket.div({class: "checkbox", children: [
                                    comket.Element("ion-icon", {
                                        name: "checkmark", class: "right"
                                    }),
                                    comket.Element("ion-icon", {
                                        name: "close", class: "wrong"
                                    })
                                ]})
                            ]
                        })
                    })
                }) : ""
            ]}),
            comket.div({class: "actions", children: [
                comket.button({
                    text: "Cancel Quiz",
                    onclick: async () => { await setState("Category") }
                }),
                comket.button({
                    text: data.number == 10 ? "Finish Quiz" : "Next Question",
                    onclick: () => {}
                })
            ]})
        ]
    })
    let cards = Array.from(parent.querySelectorAll(".answer-card"))
    cards.forEach(async (card, index) => {
        card.addEventListener("click", await checkCard)
    })
    async function checkCard(e) {
        let correct = checkCorrect(cards.indexOf(e.target))
        if(correct[0]) {
            e.target.classList.add("right")
            cards.forEach(async card => {
                if(card !== e.target) {
                    card.classList.add("disabled")
                    card.removeEventListener("click", await checkCard)
                }
            })
        }
        else {
            e.target.classList.add("wrong")
            cards[correct[1]].classList.add("right")
            cards.forEach(card => {
                if(card !== e.target && card !== cards[correct[1]]) {
                    card.classList.add("disabled")
                }
                card.removeEventListener("click", checkCard)
            })
        }
        parent.querySelector(".actions>button:last-child")
              .classList.add("active")
        parent.querySelector(".actions>button:last-child")
              .addEventListener("click", data.number === 10 ? await finishQuiz:  nextQuestion)
    }
    return parent
}