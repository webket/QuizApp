export default function PlayPop() {
    let sound = document.querySelector(".pop-sound")
    sound.volume = 0.02
    sound.playbackRate = 2
    sound.currentTime = 0.15
    sound.play()
}