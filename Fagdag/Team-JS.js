var canvas = document.getElementById("tegnebrett").getContext("2d");

canvas.fillStyle = "#f23a83";

var x = 50;
var y = 50;
var speedX = 5;
var speedY = 3;


var bounce = function()
{
    canvas.clearRect(0, 0, 500, 500);
    
    canvas.fillRect(x, y, 50, 50);
    
    if(x + speedX + 50 > 500)
        {
            speedX *= -1;
        }
    else
        {
            x += speedX;
        }
    if(y + speedY + 50 > 500)
        {
            speedY *= -1;
        }
    else
        {
            y += speedY;
        }
    if(y + speedY < 0)
        {
            speedY *= -1;
        }
    else
        {
            y += speedY;
        }
    if(x + speedX < 0)
        {
            speedX *= -1;
        }
    else
        {
            x += speedX;
        }
    window.requestAnimationFrame(bounce);
};
bounce();