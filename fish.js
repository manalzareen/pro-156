AFRAME.registerComponent("water-fishes", {
     init: function () {
          for (i = 1; i <= 20; i++) {
               var id = `fish${i}`

               var posX = (Math.random() * 3000 + (-1000));
               var posY = (Math.random() * 2 + (-1));
               var posZ = (Math.random() * 3000 + -1000);

               var position = { x: posX, y: posY, z: posZ };

               this.waterfish(id, position)

          }
     },
     //manal did not add the keyword function and unwanted arrow 
     waterfish: function (id, position) {
          // id name #fishModels was wrong
          var islandEl = document.querySelector("#fishModels");
          var fishEl = document.createElement("a-entity");
          fishEl.setAttribute("gltf-model", "./assets/models/orange_fish/scene.gltf");
          fishEl.setAttribute("id", id)
          fishEl.setAttribute("position", position)
          fishEl.setAttribute("rotation", { x: 0, y: 180, z: 0 });
          fishEl.setAttribute("scale", { x: 7, y: 7, z: 7 });
          fishEl.setAttribute("animation", {
               property: "position",
               to: "100 10 -20",
               loop: "true",
               dur: 20000
          });
          fishEl.setAttribute("animation-mixer", {});

          fishEl.setAttribute("static-body", {
               shape: "sphere",
               sphereRadius: 2
          })
          fishEl.setAttribute("game-play", {
               eId: `#${id}`
          })
          islandEl.appendChild(fishEl)


     }
})