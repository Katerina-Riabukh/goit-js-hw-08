 import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//ctrl + alt + l ;

const iframe = document.getElementById('vimeo-player')
const player = new Player(iframe);
//const player = new Player("vimeo-player", "https://player.vimeo.com/video/236203659");

const onPlay = function({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);      
};

const currentSeconds = localStorage.getItem('videoplayer-current-time')
// console.log( currentSeconds)

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentSeconds).then(function (currentSeconds) {
  
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            //localStorage.removeItem('videoplayer-current-time')
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});



 //if (currentTime === duration) {
//       localStorage.removeItem('videoplayer-current-time')
//   }


// player.on('timeupdate', throttle(onPlay, 1000));


// // player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));


// // import throttle from 'lodash.throttle';

// // const iframe = document.querySelector('iframe');
// // const player = new Vimeo.Player(iframe);

// // player.on('timeupdate', throttle(onPlay, 1000));

// // function onPlay({ seconds }) {
// //   localStorage.setItem('videoplayer-current-time', seconds);
// // }

// // player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));