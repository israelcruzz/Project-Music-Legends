// Text
const musicNumber = document.querySelector('.music-view')
const musicTitle = document.querySelector('.title-music')
const musicArtist = document.querySelector('.artist-music')

// Buttons
const buttonPlay = document.querySelector('.btn-play')
const buttonLeftMusic = document.querySelector('.button-play')
const buttonRightMusic = document.querySelector('#r')
const buttonHeart = document.querySelector('.heart')
const buttonReplay = document.querySelector('btn-replay')
const buttonPassRight = document.querySelector('.pass-left')
const buttonPassLeft = document.querySelector('.pass-right')
const buttonSoundController = document.querySelector('.sound-btn')
const btnTrue = '<i class="bi bi-play-fill btn-footer"></i>'
const btnFalse = '<i class="bi bi-pause-fill btn-footer"></i>'

// Timeline
const timeline = document.querySelector('.timeline')
let time = 0
let timeStart = false
let intervalTimer = null
let musics = []
let music = 0

// Functions
const clearIntervalDefault = (btnIcon) => {
    clearInterval(intervalTimer)
    buttonPlay.innerHTML = btnIcon
    timeStart = false
    time = 0
    timeline.style.width = `${time}%`
}

const playFunctions = () => {
    timeStart = !timeStart
    if(timeStart === true){
        buttonPlay.innerHTML = '<i class="bi bi-pause-fill btn-footer"></i>'
        intervalTimer = setInterval(() => {
            timeline.style.width = `${time++}%`
            if(time >= 100){
                clearIntervalDefault(btnFalse)
                changeMusic(1)
            }
        }, 1000)
    } else{
        clearInterval(intervalTimer)
        buttonPlay.innerHTML = '<i class="bi bi-play-fill btn-footer"></i>'
    }
}

fetch('./src/scripts/musics.json').then(response => response.json()).then(data => {
    musics = data
})

function changeMusic(direction){
    clearIntervalDefault(btnTrue)

    music = music + direction

    if(music < 0) music = musics.length - 1
    if(music >= musics.length) music = 0

    console.log(music);
    musicTitle.textContent = musics[music].name
    musicArtist.textContent = musics[music].artist
    musicNumber.textContent = music
}


buttonPlay.addEventListener("click", playFunctions)