const jsautogui = require('jsautogui');
console.log('hello I am a working javascript file. hows it goin');

async function moveMouse() {
    try {
        await jsautogui.moveMouse(100, 100);
        console.log('Mouse moved to position (100, 100).');
    } catch (error) {
        console.error('Failed to move the mouse:', error);
    }
}

moveMouse();
