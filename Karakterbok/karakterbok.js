var calculate = [];

class Fag
    {
        constructor(fag, karakter)
        {
            this.fag = fag;
            this.karakter = karakter;
            this.extrapoints;
            
            
            if(this.fag === "Mattematikk R1")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "Kjemi 1")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "Fysikk 1")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "IT 1")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "Biologi 1")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "Mattematikk S1")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "Mattematikk S2")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "Mattematikk R2")
            {
                this.extrapoints = 1;
            }
            else if(this.fag === "Fysikk 2")
            {
                this.extrapoints = 1;
            }
            else if(this.fag === "Kjemi 2")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "Biologi 2")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "IT 2")
            {
                this.extrapoints = 0.5;
            }
            else if(this.fag === "Fremmedspråk 3")
            {
                this.extrapoints = 1;
            }
            else 
            {
                this.extrapoints = 0;
            }
        }
    }

var isIn = function(string)
{
    for(var index = 0; index < calculate.length; index++)
        {
            if(calculate[index].fag === string)
                {
                    return true;
                }
        }
    return false;
};

var btn1 = function()
{
    if(!isIn(document.getElementById("fag1").value))
        {
            calculate.push(new Fag(document.getElementById("fag1").value, Number(document.getElementById("karakter1").value)));
            document.getElementById("array").innerHTML += document.getElementById("fag1").value + ": " + "karakter " +                            document.getElementById("karakter1").value + "<br>";
        }
    else
        {
            alert("Du har allerede valgt dette faget.");
        }
};

var btn2 = function()
{
    if(!isIn(document.getElementById("fag2").value))
        {
            calculate.push(new Fag(document.getElementById("fag2").value, Number(document.getElementById("karakter2").value)));
            document.getElementById("array").innerHTML += document.getElementById("fag2").value + ": " + "karakter " +  document.getElementById("karakter2").value + "<br>";
        }
    else
        {
            alert("Du har allerede valgt dette faget.");
        }
};
var btn3 = function()
{
    if(!isIn(document.getElementById("fag3").value))
        {
            calculate.push(new Fag(document.getElementById("fag3").value, Number(document.getElementById("karakter3").value)));
            document.getElementById("array").innerHTML += document.getElementById("fag3").value + ": " + "karakter " +  document.getElementById("karakter3").value + "<br>";
        }
    else
        {
            alert("Du har allerede valgt dette faget.");
        }
};

var btn4 = function()
{
    var points = 0;
    for (var index = 0; index < calculate.length; index++)
        {
            points += calculate[index].karakter;
            
        }
    points /= calculate.length;
    points *= 10;
    
    var points2 = 0;
    for (var index = 0; index < calculate.length; index++)
        {
            points2 += calculate[index].karakter;
            
        }
    points2 /= calculate.length;
    
    for(var index = 0; index < calculate.length; index++)
        {
            points += calculate[index].extrapoints;
            
        }
    document.getElementById("print").innerHTML = "Dine studiepoeng: " + points.toFixed(2) + "<br>" + "Karaktersnitt: " + points2.toFixed(2);
};

var btn5 = function() 
{
    document.getElementById("array").innerHTML = "";
    document.getElementById("print").innerHTML = "";
    calculate = [];
};

document.getElementById("btn1").addEventListener("click", btn1);
document.getElementById("btn2").addEventListener("click", btn2);
document.getElementById("btn3").addEventListener("click", btn3);
document.getElementById("btn4").addEventListener("click", btn4);
document.getElementById("btn5").addEventListener("click", btn5);