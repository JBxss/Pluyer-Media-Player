import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./Plugins/AutoPlay";
import AutoPause from "./Plugins/AutoPause";
import Ads from "./Plugins/Ads/Index";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads() ],
});

const buttonPlay: HTMLElement = document.querySelector("#btnPlay");
const buttonMute: HTMLElement = document.querySelector("#btnMute");
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

// Source index.js para llamar el Service Worker
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error =>{
    console.log(error.message);
  });
}