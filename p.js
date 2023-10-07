var hr=0;
var x=0;
var min=0;
var sec=0;
var ms=0;
var s=0;
var b=0;
var dif=0;
var status="stopped";
var sett=false;
function start()
{  

    if(status=="stopped" && x==0)
    {
        b=new Date();
    sett=true;
    stopwatch();}
    if(x!=0)
    {
        b=new Date() - dif;
        sett=true;
        stopwatch();
    }
}
function stop()
{
    x=x+1;
    sett=false;
    status = "stopped";
}
function reset()
{
    status="stopped";
    sett=false;
    hr=0;
    ms=0;
    min=0;
    sec=0;
    document.getElementsByClassName("digit")[0].innerHTML = "0" +hr;
    document.getElementsByClassName("digit")[1].innerHTML = "0" +min;
    document.getElementsByClassName("digit")[2].innerHTML = "0" +sec;
    document.getElementsByClassName("digit")[3].innerHTML = "0" +"0" +ms;
    x=0;
}
function stopwatch()
{ var c=new Date();
     dif=new Date(c - b);
   if(sett == true)
   {
    ms= dif.getMilliseconds();
    sec= dif.getUTCSeconds();
    min = dif.getUTCMinutes();
    hr = dif.getUTCHours();
    if(sec<10)
    {
      sec = "0" +sec;
    }
    if(min<10)
    {
        min = "0" + min;
    }
    if(hr<10)
    {
        hr = "0" + hr;
    }
    if(ms<100)
    {
        if(ms<10)
        {
        ms =   "0" + ms;}
        ms = "0" + ms;
    }

     document.getElementById("hr").innerHTML = hr;       
       document.getElementById("min").innerHTML = min;       
       document.getElementById("sec").innerHTML = sec;  
       document.getElementById("ms").innerHTML = ms;
     
       setTimeout("stopwatch()",1);
       status="started";
   }  
}





