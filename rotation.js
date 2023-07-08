
   //Plane rotation component
   AFRAME.registerComponent("dive-rotation", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var diverRotation = this.data.speedOfRotation;      
        var diverPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys

        // control with arrow keys was incorrect 
        
        if (e.key === "ArrowDown") {
         if (diverPosition.z < 20) {
           diverPosition.z += 0.3;
           this.el.setAttribute("position", diverPosition);
         }
       }
       if (e.key === "ArrowUp") {
         if (diverPosition.y> -10) {
           diverPosition.y -= 0.1;
           this.el.setAttribute("position", diverPosition);
         }
       }
       if (e.key === "ArrowRight") {
         if (diverRotation.y > -360) {
           diverRotation.y -= 0.5;
           this.el.setAttribute("rotation", diverRotation);
         }
         if (diverPosition.x < 20) {
           diverPosition.x += 0.05;
           this.el.setAttribute("position", diverPosition);
         }
       }
       if (e.key === "ArrowLeft") {
         if (diverRotation.y <360) {
           diverRotation.y += 0.5;
           this.el.setAttribute("rotation", diverRotation);
         }
         if (diverPosition.x > -20) {
           diverPosition.x -= 0.05;
           this.el.setAttribute("position", diverPosition);
         }
       }
     });
   }
 });