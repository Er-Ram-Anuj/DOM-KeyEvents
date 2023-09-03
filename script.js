// This is for First example on click

const btn=document.getElementById("btn1");
function first(){
    document.getElementById("heading2").innerText="This is Example Of Click Event";
}
btn.addEventListener("click",first);


// This is for Second example OnClick
function second(){
    document.getElementById("para2").innerText="This is Example Of On-Click Event";
}



// This is for Third example Dbl Click
const btnthird=document.getElementById("btn3");
function firstMessage(){
    document.getElementById("thirdHeadingI").innerText="You Not DoubleClick " ;
    document.getElementById("thirdHeadingI").style.color="Green";
}
function SecondMessage(){
    document.getElementById("thirdHeadingI").innerText="Yes You DoubleClick "; 
    document.getElementById("thirdHeadingI").style.color="red";
}
btnthird.addEventListener("click",firstMessage);
btnthird.addEventListener("dblclick",SecondMessage);

// This is for Four example on Mouseover

let mover=document.getElementById("four");
function fourdiv(){
    document.getElementById("HeadindFourI").innerText="Mouse is Inside";
    document.getElementById("four").style.backgroundColor="Green";
    document.getElementById("four").style.color="white";
}
function fourdiv1(){
    document.getElementById("HeadindFourI").innerText="Mouse is Not Inside";
    document.getElementById("four").style.backgroundColor="yellow";
    document.getElementById("four").style.color="Black";
}

mover.addEventListener("mouseover",fourdiv);
mover.addEventListener("mouseout",fourdiv1);


// this is example five ...... 
function onefun(){
    document.getElementById("Display").style.backgroundColor="pink";
    document.getElementById("Display").innerText="This is example of onkeypress";
    
}
function twofun(){
    document.getElementById("Display").style.backgroundColor="yellow";
    document.getElementById("Display").innerText="This is example of keydown";
    
}
function threefun(){
    document.getElementById("Display").style.backgroundColor="green";
    document.getElementById("Display").innerText="This is example of keyup";
    
}