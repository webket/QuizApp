export default class Request{
    _questions = null
    categories = {
        books: 10, films: 11, music: 12, computers: 18, math: 19,
        sports: 21, geography: 22, history: 23, art: 25, cartton: 25
    }
    _results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    _current = -1
    constructor(category) {
        return this.init(category)
    }
    async init(category) {
        this._questions = await fetch(
            `https://opentdb.com/api.php?amount=10&category=${this.categories[category]}`
        ).then(res => res.json()).then(data => {
            return data.results.map(question => this.clarifyQuestion(question))
        })
        return this
    }
    clarifyQuestion(question) {
        let newQuestion = {
            question: this.decodeText(question.question), correct: -1,
            answers: [
                ...question.incorrect_answers, question.correct_answer
            ].map(answer => this.decodeText(answer)).sort(() => {
                if(Math.random() > 0.5) return 1
                else return -1
            })
        }
        newQuestion.correct = newQuestion.answers.indexOf(
            this.decodeText(question.correct_answer)
        )
        return newQuestion
    }
    decodeText(text) {
        let html = document.createElement("textarea")
        html.innerHTML = text
        return html.value
    }
    nextQuestion () {
        if(this._current === 9) {
            return this.finishQuiz()
        }
        else {
            let currentQuestion = {...this._questions[++this._current]}
            delete currentQuestion.correct
            return currentQuestion
        }
    }
    checkCurrent(index) {
        if( this._results[this._current] === 0 ) {
            if(this._questions[this._current].correct == index) {
                this._results[this._current] = 1
                return true
            }
            else {
                this._results[this._current] = -1
                return false
            }
        }
    }
    finishQuiz() {
        this._questions = null
        this._current = -1
        return this._results
    }
}