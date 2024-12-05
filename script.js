 console.log("welcome");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName: "Bus ek nigah", filePath: "songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Tum ek gorakh dhanda ho", filePath: "songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "Khuda gawah by Diljit Singh", filePath: "songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "tum se milne ko dil krta hai", filePath: "songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Sad Mashup", filePath: "songs/5.mp3" , coverPath: "covers/5.jpg"},
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', ()=>{
   progress = parseInt ((audioElement.currentTime/audioElement.duration)* 100);
   myprogressBar.value =progress;
})
myprogressBar.addEventListener('change', ()=>{
 audioElement.currentTime = myprogressBar.value * audioElement.duration/ 100;
 })
const makeAllPlays=()=>{
    Array.from (document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from (document.getElementsByClassName('songitemplay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
       makeAllPlays();
       songIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-play');
       e.target.classList.add('fa-pause');
       audioElement.src = `songs/${songIndex+1}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
   })

})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause'); 
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause'); 
})


