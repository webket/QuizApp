export default function PlayWrong() {
    let sound = document.querySelector(".wrong-sound")
    sound.currentTime = 1
    sound.volume = 0.02
    sound.playbackRate = 2.5
    sound.play()
}