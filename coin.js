AFRAME.registerComponent("coins", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `coin${i}`;

      //position variables
      var posX = Math.random() * 3000 + (-1000);      
      var posY = Math.random() * 2 + (-1);
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createCoins(id, position);
    }
  },

  createCoins: function(id,position) {
    //ID value was given incorrectly
    var islandEl = document.querySelector("#treasureCoins")
    var coinEl = document.createElement("a-entity");

    coinEl.setAttribute("id",id);
    coinEl.setAttribute("material","color","#ff9100");
    coinEl.setAttribute("position",position);
    coinEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   
    coinEl.setAttribute("static-body",{shape:"sphere" ,sphereRadius:2})
    coinEl.setAttribute("animation", {
      property: "rotation",
      to: "0 360 0",
      loop: "true",
      dur: 1000,
    });
    coinEl.setAttribute("scale", { x: 4, y: 4, z: 4 });
    
    //attribute name "game-play" was incorrectly written 
    coinEl.setAttribute("game-play", {
      eId: `#${id}`
    });
    islandEl.appendChild(coinEl);
  }
});
