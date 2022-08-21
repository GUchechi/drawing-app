const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10
let isPressed = true;
let color = 'black';
let x
let y

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;

    console.log(x,y);
})

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;

    console.log(isPressed,x,y);
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

drawCircle(100,200)