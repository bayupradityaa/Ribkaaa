const audio = document.getElementById("background-music");

    window.addEventListener('load', function() {
        if (localStorage.getItem("isAudioPlaying") === "true") {
            audio.muted = false;
            audio.play();
        }
    });