 import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//ctrl + alt + l ;

const iframe = document.getElementById('vimeo-player')
const player = new Player(iframe);
const currentSeconds = localStorage.getItem('videoplayer-current-time') || '';
//const duration = localStorage.getItem('videoplayer-duration')


const onPlay = function ({ seconds, duration}) {

    localStorage.setItem('videoplayer-current-time', seconds , duration); 
    localStorage.setItem('videoplayer-duration', duration);
};




player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentSeconds).then(function (currentSeconds) {
 
});
