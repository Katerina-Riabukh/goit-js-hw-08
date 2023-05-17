 import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//ctrl + alt + l ;

const iframe = document.getElementById('vimeo-player')
const player = new Player(iframe);
const currentSeconds = localStorage.getItem('videoplayer-current-time')
const duration = localStorage.getItem('videoplayer-duration')
console.log(duration);
console.log(currentSeconds);

const onPlay = function ({ seconds, duration}) {

    localStorage.setItem('videoplayer-current-time', seconds , duration); 
    localStorage.setItem('videoplayer-duration', duration);
    // if (currentSeconds === duration) {
    //     localStorage.removeItem('videoplayer-current-time')
    // }
};


console.log(localStorage);



player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentSeconds).then(function (currentSeconds) {
 
});





// {
//     duration: 61.857
//     percent: 1
//     seconds: 61.857
// }