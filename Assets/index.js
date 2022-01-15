import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./Plugins/AutoPlay.js";
import AutoPause from "./Plugins/AutoPause.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const buttonPlay = document.querySelector("#btnPlay");
const buttonMute = document.querySelector("#btnMute");
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
