
$(document).ready(function(){
    var image = document.getElementById("play_pause");
    var audio = document.getElementById("myAudio");
    image.onclick = function() {
        src= image.src.split('/').pop();
        if(src=="play-buttton.png"){
          image.setAttribute('src',"media/pause.png");
          audio.play();
        }
        else{
          image.setAttribute('src',"media/play-buttton.png");
          audio.pause();
        }      
      };

})