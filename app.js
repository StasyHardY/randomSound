const startButton = document.querySelector('.js-start');

function playSound() {
   let audio = new Audio("https://www.mediacollege.com/downloads/sound-effects/alien/laser-01.mp3")
   let audio2 = new Audio("https://www.mediacollege.com/downloads/sound-effects/money/cash-register-02.wav")
   let audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
   let audio4 = new Audio("https://www.mediacollege.com/downloads/sound-effects/people/laugh/laugh-man-01.wav")
   const soundContainer = [audio, audio2, audio3, audio4]
   let rand = Math.floor(Math.random() * soundContainer.length)
   if(rand === 0) {
   audio.play()
}
   if(rand === 1) {
      audio2.play()  
}

   if(rand === 2) {
      audio3.play()    
}
   if(rand === 3) {
      audio4.play()   
}

console.log(rand)
}

startButton.addEventListener('click',() => {
   playSound()
})