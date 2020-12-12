var a = parseInt(document.getElementById("span").textContent);
var span = document.getElementById("span");


function reset()
{
  span.textContent = "0";
  stateColor();
}

function decrease()
{
  a--;
  span.textContent = a.toString();
  stateColor();
}

function increase()
{
   a++;
   span.textContent = a.toString();
   stateColor();
}

function stateColor()
{
    if(a < 0)
    {
        span.style.color = "red";
    }

    else if(a > 0)
    {
        span.style.color = "green";
    }

    else {
        span.style.color = "gray";
    }
    
}


