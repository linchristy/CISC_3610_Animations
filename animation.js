"use strict";

var Scene = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined, 
};

Scene.start = function(){
    // Get the canvas and it's context
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");

    // Setup the pikachu to be displayed
    Scene.sprite = pikachu;

    // Attach the iamge to be used for the sprite.
    Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;

    //Wait till the pikachu image is loaded before starting the animation
    Scene.sprite.img.onload = function(){
        Scene.sprite.offset=Scene.sprite.frames[Scene.sprite.frame].frame.w;
        Scene.mainLoop();
    };
};

// Once the basic HTML document is loaded and its parsing has taken place, 
// Start the scene
document.addEventListener('DOMContentLoaded', Scene.start);

Scene.clearCanvas = function(){
    Scene.canvasContext.fillStyle = "#000000";
    Scene.canvasContext.fillRect(0,0, Scene.canvas.width, Scene.canvas.height);
};

Scene.textBubble = function(){
    Scene.canvasContext.strokeStyle="#000000";
    Scene.canvasContext.fillStyle="#FFFFFF";
    Scene.canvasContext.lineWidth="2";
    Scene.canvasContext.beginPath();
    Scene.canvasContext.arc(586,129,83,0,2*Math.PI);
    Scene.canvasContext.stroke();
    Scene.canvasContext.fill();

    // After pikachu picks up an apple
    // Text of pikachu appears
    Scene.canvasContext.font = "30px Arial";
    Scene.canvasContext.fillStyle = "#000000";
    Scene.canvasContext.fillText("Please", 540, 100);
    Scene.canvasContext.fillText("have an", 534, 130);
    Scene.canvasContext.fillText("apple!", 542, 160);
}

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
    if(Scene.sprite.frame >= 8){
        Scene.textBubble();
    }

	// Animate at 9 frames a second.
    window.setTimeout(Scene.mainLoop, 1000 /9);
};

Scene.update = function(){
    // Set the canvas width to be that of the display Window. 
    // Which helps if you resize the window
    //Scene.canvas.width = window.innerWidth;

    // Set the location of the next frame
    Scene.sprite.offset = 0;
}

Scene.draw = function() {
    Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[Scene.sprite.frame].frame.x,Scene.sprite.frames[Scene.sprite.frame].frame.y,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h,135,50,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h);

    Scene.sprite.frame++;

    // At the end of the sprite sheet, start at the second gif.
	if(Scene.sprite.frame==Scene.sprite.frames.length){
        Scene.sprite.frame =0;
    }
};