const music = document.querySelector('#audio-source');
const musicPlayerSection = document.querySelector('.music-player-section');
const seekBar = document.querySelector('.music-seek-bar');
const songName = document.querySelector('.current-song-name');
const artistName = document.querySelector('.artist-name');
const coverImage = document.querySelector('.cover');
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');
const forwardBtn = document.querySelector('i.fa-forward');
const backwardBtn = document.querySelector('i.fa-backward');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlider = document.querySelector('.volume-slider');
var commentBoxValue = document.getElementById("comment-box")

var post= document.getElementById("post")

let currentMusic = 0;
let clickCount = 1;

const comentario = () => {
    const jsn = {
        comment: commentBoxValue.value,
        name: 'lol'
    }
    songs[currentMusic].comments?.push(jsn)
    addData()
    cleanData()
    console.log(songs)
}

let songs = [
    {
        name: 'Atlantis',
        path: 'assets/musics/atlantis.mp3',
        artist: 'Seafret',
        cover: 'assets/images/cover 1.jpg',
        comments: []
        
    },
    {
        name: 'Drown',
        path: 'assets/musics/drown.mp3',
        artist: 'Bring me the horizon',
        cover: 'assets/images/cover 2.jpg',
        comments: []
    },
]


const addData = () => {
    var output = '';
  
    for (const item of songs[currentMusic].comments){ 

            output += `<li class="list-group-item">
              <span> ${item.comment}</span> 
            </li>`
          
    }
  
    document.getElementById('list').innerHTML = output
    
  }

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0` + min;
    }

    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0` + sec;
    }

    return `${min} : ${sec}`;
}
const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;

    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverImage.src = song.cover;

    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
    currentMusicTime.innerHTML = '00 : 00';
}

setMusic(0);

setInterval(() => {
    seekBar.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        if(repeatBtn.className.includes('active')){
            setMusic(currentMusic);
            playBtn.click();
        } else{
            forwardBtn.click();
        }
    }
}, 500)

musicPlayerSection.addEventListener('click', () => {
    if(clickCount >= 2){
        musicPlayerSection.classList.add('active');
        clickCount = 1;
        return;
    }
    clickCount++;
    setTimeout(() => {
        clickCount = 1;
    }, 250);
})

playBtn.addEventListener('click', () => {
    music.play();
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
})

pauseBtn.addEventListener('click', () => {
    music.pause();
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})

forwardBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
        addData()
        cleanData()
    } else{
        currentMusic++;
        addData()
        cleanData()
    }
    setMusic(currentMusic);
    playBtn.click();
})

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
        addData()
        cleanData()
    } else{
        currentMusic--;
        addData()
        cleanData()
    }
    setMusic(currentMusic);
    playBtn.click();
})

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

repeatBtn.addEventListener('click', () => {
    repeatBtn.classList.toggle('active');
})

volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('active');
    volumeSlider.classList.toggle('active');
})

volumeSlider.addEventListener('input', () => {
    music.volume = volumeSlider.value;
})

const cleanData = () => {
    commentBoxValue.value = '';
  };
  