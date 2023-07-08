AFRAME.registerComponent("game-play",{
    schema:{
        eId:{type:"string",default:"#coin1"}
    },
    init:function(){
    var duration=120;
    var timerEl=document.querySelector("#timer");
    this.startTimer(duration,timerEl);
    },
    startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
        setInterval(()=> {
          if (duration >=0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            this.gameOver();        
          }
        },1500)
      },
    //manal did not call the custom function in update
    update: function() {
        // this.data.eId
        this.IsCollide(this.data.eId);
      },
    IsCollide:function(new_eId){
        const element=document.querySelector(new_eId)
        element.addEventListener("collide",(e) => {
            if(new_eId.includes("#coin")){
                element.setAttribute("visible", false);
                this.updateScore();
                this.updateTargets();
            }
            else if(new_eId.includes("#fish")){
                this.gameOver()
            }


        })
    },
   updateTargets:function(){
    var elem = document.querySelector("#targets")
    var count = elem.getAttribute("text").value
    var currentTargets=parseInt(value)
    currentTargets-=1
    elem.setAttribute("text",{value:currentTargets})
   },
   updateScore:function(){
    var elem = document.querySelector("#score")
    var count = elem.getAttribute("text").value
    var currentScore=parseInt(value)
    currentScore-=1
    elem.setAttribute("text",{value:currentScore})
   },
   gameOver: function () {
    var gameOverEl =document.querySelector("#game_over_text")
    var islandEl =document.querySelector("#island")
    gameOverEl.setAttribute("visible",true)
    planeEl.setAttribute("dynamic-body",{mass:1})
}

})