function playPause() {
    if(video.paused) {
      video.play()
  } else {
      video.pause();
  }
}

function stop() {
    video.pause();
    video.currentTime = 0;
  }
  
function skip(value) {
    video.currentTime += value;
}