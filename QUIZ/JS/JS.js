//givng the sjekk svar button a function
document.getElementById("check").onclick = function()
{
    //oppgave 1 testting if anwer is correct
    var textAnswer = document.getElementById("textans");
    var textInput = document.getElementById("textInput");
    
    if(textInput.value === textAnswer.innerHTML)
    {
       document.getElementById("oppg1R").style.display = "inherit"; 
    }
    else
    {
        document.getElementById("oppg1W").style.display = "inherit";
    }
    
    //oppgave 2 testing if answer is correct
    var numberAnswer = Number(document.getElementById("numberans"));
    var numberInput = Number(document.getElementById("numberInput"));
    
    if(numberInput.value === numberAnswer.innerHTML)
     {
       document.getElementById("oppg2R").style.display = "inherit"; 
    }
    else
    {
        document.getElementById("oppg2W").style.display = "inherit";
    }   
    
    //Oppgve 3 testing if answer is correct
    var radioAnswer = Number(document.getElementById("radioans").innerHTML);
    var radioInput = document.getElementById("oppgave3").getElementsByTagName("input");
    
    
    if(radioInput[radioAnswer - 1].checked)
    {
    document.getElementById("oppg3R").style.display = "inherit";   
    }
    else
    {
    document.getElementById("oppg3W").style.display = "inherit";
    }
    
    //Oppgve 4 testing if answer is correct
    var option1 = document.getElementById("opt1").checked;
    var option2 = document.getElementById("opt2").checked;
    var option3 = document.getElementById("opt3").checked;
    var option4 = document.getElementById("opt4").checked;
    
    if(option1 && !option2 && !option3 && !option4)
    {
        document.getElementById("oppg4R").style.display = "inherit";
    }
    else
    {
        document.getElementById("oppg4W").style.display = "inherit";
    }
    
    //Oppgve 5 testing if answer is correct
    var selectValue = document.getElementById("dropdowntask");
    var selectAnswer = document.getElementById("dropdownans");
    
    if(selectValue.value === selectAnswer.innerHTML)
     {
    document.getElementById("oppg5R").style.display = "inherit";   
    }
    else
    {
    document.getElementById("oppg5W").style.display = "inherit";
    }    
     
    //removing button and disabling inputs
    document.getElementById("check").remove();
   
    document.getElementById("textInput").disabled = true;
    
    document.getElementById("numberInput").disabled = true;
    
    document.getElementById("rad1").disabled = true;
    document.getElementById("rad2").disabled = true;
    document.getElementById("rad3").disabled = true;
    document.getElementById("rad4").disabled = true;
    
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
    
    document.getElementById("dropdowntask").disabled = true;
}

