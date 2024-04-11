const {mouse} = require("jsautogui");
console.log('hello I am a working javascript file. hows it goin');

// mouse.moveTo(100, 200, 5000); // duration is in milliseconds, 5000ms is the equavalent of 5 seconds.
mouse.position = { x: 300, y: 400 };
mouse.moveTo(100, 200, 5000)