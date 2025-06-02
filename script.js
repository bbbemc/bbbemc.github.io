const audio = document.getElementById("myAudio");
  const timeDisplay = document.getElementById("timeDisplay");

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function updateTime() {
    const current = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration || 0);
    timeDisplay.textContent = `${current} / ${duration}`;
  }

  audio.addEventListener("timeupdate", updateTime);

  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }




