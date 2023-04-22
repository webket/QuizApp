import comket from "../dependencies/comket.js";

export default function Tracking(answers) {
    let parent = comket.div({
        text: "tracking"
    })
    parent.render = () => {
        parent.replaceWith( Tracking(answers) )
    }
    return parent
}