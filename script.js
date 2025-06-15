
      const playButton = document.getElementById("playButton");
      const playIcon = document.querySelector(".play-icon");
      const pauseIcon = document.querySelector(".pause-icon");
      const audioElement = document.getElementById("audioElement");
      const musicPlayer = document.querySelector(".music-player");

      let isPlaying = false;

      playButton.addEventListener("click", function () {
        if (isPlaying) {
          // Pause music
          audioElement.pause();
          playIcon.style.display = "block";
          pauseIcon.style.display = "none";
          musicPlayer.classList.remove("playing");
        } else {
          // Play music
          audioElement.play();
          playIcon.style.display = "none";
          pauseIcon.style.display = "block";
          musicPlayer.classList.add("playing");
        }

        isPlaying = !isPlaying;
      });

      // Optional: Reset button state when audio ends
      audioElement.addEventListener("ended", function () {
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        musicPlayer.classList.remove("playing");
        isPlaying = false;
      });
    