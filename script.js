let on=document.querySelector("#on");//accessed ON button
let off=document.querySelector("#off");//accessed OFF button
let indicator=document.querySelector("#indicator");//accessed indicator div
let body=document.querySelector("body");//accessed body to turn dark mode & white mode
let reset=document.querySelector("#reset");//access reset button
let color="black";
on.onclick=()=>{
     document.querySelector("#indicator").style.backgroundColor="green";
     document.querySelector("#loader").style.height="500px";
     document.querySelector("#loader").style.width="500px";
     document.querySelector("#loader").style.border="10px solid yellow";
     document.querySelector("#loader").style.borderRadius="50%";
     document.querySelector("#loader").style.borderTop="10px solid blue";
     document.querySelector("#loader").style.animation="spin 1s linear 0s infinite normal";    
}
off.onclick=()=>{
     document.querySelector("#indicator").style.backgroundColor="red";
     document.querySelector("#loader").style.height="500px";
     document.querySelector("#loader").style.width="500px";
     document.querySelector("#loader").style.border="10px solid yellow";
     document.querySelector("#loader").style.borderRadius="50%";
     document.querySelector("#loader").style.borderTop="10px solid blue";
     document.querySelector("#loader").style.animation="spin 1s linear 0s 0 normal";
}
mode.onclick=()=>{
    if(color==="black")
    {
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("#parent").style.backgroundColor="black";
        color="white";
        document.querySelector("#mode").innerText="White Mode";
    }
    else
    {
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("#parent").style.backgroundColor="white";
        color="black";
        document.querySelector("#mode").innerText="Dark Mode";
    }
    
}
reset.onclick=()=>{
     location.reload();
}
