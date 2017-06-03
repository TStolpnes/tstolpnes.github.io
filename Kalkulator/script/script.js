var result = document.getElementById("answer");

//funticon for addition
function addition(num1, num2)
{
    return(num1 + num2);
};

//function for subtraction
function subtraction(num1, num2)
{
    return num1 - num2;
};

//function for multipliction
function multiply(num1, num2)
{
    return num1 * num2;
};

//function for division
function divide(num1, num2)
{
    if(num2 === 0) 
    {
        alert("Can't divide by zero");
    }
    else
    {
        return num1 / num2;
    }
};

//giving function to the + button using numberinput 1 and 2 as variables
document.getElementById("plus").onclick = function() 
{
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    result.innerHTML = addition(num1, num2).toFixed(2);
};

//giving function to the - button using numberinput 1 and 2 as variables
document.getElementById("minus").onclick = function() 
{
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    result.innerHTML = subtraction(num1, num2).toFixed(2);
};

//giving function to the * button using numberinput 1 and 2 as variables
document.getElementById("multiply").onclick = function() 
{
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    result.innerHTML = multiply(num1, num2).toFixed(2);
};

//giving function to the / button using numberinput 1 and 2 as variables
document.getElementById("division").onclick = function() 
{
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    result.innerHTML = divide(num1, num2).toFixed(2);
};

//giving function the C button 
document.getElementById("clear").onclick = function()
{
    document.getElementById("calc").reset();
    result.innerHTML = " ";
};

