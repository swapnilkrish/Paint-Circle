canvas = document.getElementById("myCanvas");
color = "black";
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
width_of_line = 2;
radius = 20;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}