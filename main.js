var last_position_of_x, last_position_of_y;

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
    
var color = "black";
var width_of_line = 2;

var width = screen.width;
var height = screen.height;

var new_width = width - 100;
var new_height = height - 300;

if(width < 992) {
    canvas.width = new_width;
    canvas.height = new_height;
    document.body.style.overflow = "hidden";
}

    canvas.addEventListener("touchstart", my_touchStart);
    
    function my_touchStart(e) {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("line_width").value;
        //Addictonal Activity ends
    }

    canvas.addEventListener("touchmove", my_touchMove);
    function my_touchMove(e) {
        console.log("my_touchMove");
        current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

function clearArea() {
    ctx.clearRect(0, 0, width, height);
}