import comket from "../dependencies/comket.js";

export default function Tracking(answers) {
    let results = {"1": "right", "-1": "wrong", "0": ""}
    let parent = comket.div({
        class: "tracking", children: [
            comket.div({class: "line"}),
            comket.div({
                class: "points", style: {opacity: "0"},
                children: answers.map(point => {
                    return comket.div({
                        class: `point ${results[point]}`, children: [
                            comket.Element("ion-icon", {
                                name: "checkmark", class: "right"
                            }),
                            comket.Element("ion-icon", {
                                name: "close", class: "wrong"
                            })
                        ]
                    })
                })
            })
        ]
    })
    parent.render = () => {
        parent.replaceWith( Tracking(answers) )
    }
    setTimeout(() => {
        parent.querySelector(".points").style.opacity = "1"
        parent.querySelector(".points").style.paddingLeft = (document.querySelector(".decore>img").clientWidth + 20) + "px"
    }, 1);
    window.addEventListener("resize", () => { parent.render() })
    return parent
}