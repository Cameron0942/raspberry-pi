const jsautogui = require('jsautogui');
const {mouse} = jsautogui;
console.log('hello I am a working javascript file. hows it goin');

mouse.moveTo(100, 200, 5000) // duration is in milliseconds, 5000ms is the equavalent of 5 seconds.
