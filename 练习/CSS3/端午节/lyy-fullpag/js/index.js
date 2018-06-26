window.onload=function(){
var music_icon = document.getElementsByClassName("music")[0];
var music = document.getElementById("music");
var n=true;
music_icon.onclick = function(){
    if(n){
        music.pause();
        music_icon.classList.add("stop");
        music_icon.classList.remove("strat");
        n = false;
    }else{
        music.play();
        music_icon.classList.add("strat");
        music_icon.classList.remove("stop");
        n = true;
    }
  }
}