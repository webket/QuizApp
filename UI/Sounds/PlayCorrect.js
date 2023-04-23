export default function PlayCorrect() {
    let sound = document.querySelector(".correct-sound")
    sound.volume = 0.1
    sound.playbackRate = 1.4
    sound.play()
}