
document.getElementById("button").onclick = function()
{
    var blp = Number(document.getElementById("num1").value);
    var spår = Number(document.getElementById("num2").value);
    var rente = Number(document.getElementById("num3").value);
    var result = document.getElementById("sum");
    
    if(blp <= 0)
    {
        alert("sparebeløpet kan ikke være negativt");
    }
    else if(spår <= 0)
    {
        alert("kan ikke spare i 0 år eller mindre");
    }
    else if (rente < 0)
    {
        alert("renten kan ikke være lavere enn 0");
    }
    else
    {
        for(var index = 1; index <= spår; index++)
        {
            
            var calculate = blp * Math.pow((1+(rente/100)),index);
            result.innerHTML += "Etter " + index + " år har du " + calculate.toFixed(2) + " kroner på konto.<br>"

        }
        
    }
}

document.getElementById("clear").onclick = function()
{
    var result = document.getElementById("sum");
    document.getElementById("calc").reset();
    result.innerHTML = " ";
}