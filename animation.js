"use strict";
var Scene, Scene1;
Scene = Scene1 = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined
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
        //Scene.sprite.offset=Scene.sprite.frames[Scene.sprite.frame].frame.w;
        Scene.mainLoop();
    };
};

// Once the basic HTML document is loaded and its parsing has taken place, 
// Start the scene
document.addEventListener('DOMContentLoaded', Scene.start);

Scene.clearCanvas = function(){
    Scene.canvasContext.fillStyle = "#FFFFFF";
    Scene.canvasContext.fillRect(0,0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
	
	// Animate at 9 frames a second.
    window.setTimeout(Scene.mainLoop, 1000 /9);
};

Scene.update = function(){
    // Set the canvas width to be that of the display Window. 
    // Which helps if you resize the window
    Scene.canvas.width = window.innerWidth;

    // Set the location of the next frame
    Scene.sprite.offset = 460;
}

Scene.draw = function() {
	Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[Scene.sprite.frame].frame.x,Scene.sprite.frames[Scene.sprite.frame].frame.y,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h,Scene.sprite.offset,0,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h);

    if(Scene.sprite.frame >= 8){
        Scene.canvasContext.strokeStyle="#000000";
        Scene.canvasContext.fillStyle="#FFFFFF";
        Scene.canvasContext.lineWidth="2";
        Scene.canvasContext.beginPath();
        Scene.canvasContext.arc(900, 70,83,0,2*Math.PI);
        Scene.canvasContext.stroke();
        Scene.canvasContext.fill();

        // After pikachu picks up an apple
        // Text of pikachu appears
        Scene.canvasContext.font = "30px Arial";
        Scene.canvasContext.fillStyle = "#000000";
        Scene.canvasContext.fillText("Please", 850, 50);
        Scene.canvasContext.fillText("have an", 844, 80);
        Scene.canvasContext.fillText("apple!", 850, 110);
    }
	// Advance to the next frame.
	Scene.sprite.frame++;

	// At the end of the sprite sheet, start at the second gif.
	if(Scene.sprite.frame==Scene.sprite.frames.length){
        Scene.sprite.frame =0;
    }
};

// Scene1.start = function(){
//     // Get the canvas and it's context
//     Scene1.canvas = document.getElementById("myCanvas");
//     Scene1.canvasContext = Scene1.canvas.getContext("2d");

//     // Setup caterpie to be displayed
//     Scene1.sprite = caterpie;

//     // Attach the image to be used for the sprite
//     Scene1.sprite.img = new Image();
//     Scene1.sprite.img.src = Scene1.sprite.src;

//     //Wait till the caterpie image is loaded before starting the animation
//     Scene1.sprite.img.onload = function(){
//         Scene1.mainLoop();
//     };
// };

// Scene1.clearCanvas = function(){
//     Scene1.canvasContext.fillStyle = "#FFFFFF";
//     Scene1.canvasContext.fillRect(0,0, Scene1.canvas.width, Scene1.canvas.height);
// };

// Scene1.mainLoop = function(){
//     Scene1.clearCanvas();
//     Scene1.update();
//     Scene1.draw();

//     // Animate at 9 frames a second.
//     window.setTimeout(Scene1.mainLoop, 1000/9);
// };

// Scene1.update = function(){
//     // Set the canvas width to be that of the display Window
//     // Which helps if you resize the window
//     Scene1.canvas.width = window.innerWidth;

//     // Set the location of the next frame
//     Scene1.sprite.offset = 460;
// }

// Scene1.draw = function(){
//     Scene1.canvasContext.drawImage(Scene1.sprite.img,Scene1.sprite.frames[Scene1.sprite.frame].frame.x,Scene1.sprite.frames[Scene1.sprite.frame].frame.y,Scene1.sprite.frames[Scene1.sprite.frame].frame.w,Scene1.sprite.frames[Scene1.sprite.frame].frame.h,Scene1.sprite.offset,0,Scene1.sprite.frames[Scene1.sprite.frame].frame.w,Scene1.sprite.frames[Scene1.sprite.frame].frame.h);

//     // Advance to the next framw
//     Scene1.sprite.frame++;

//     // At the end of the sprite sheet, begin at the first gif
//     if(Scene1.sprite.frame== Scene1.sprite.frames.length){
//         Scene.sprite.frame=0;
//     }
// };