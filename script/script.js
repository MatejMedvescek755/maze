var first= document.getElementById("content-one");
var second = document.getElementById("content-two");
var bisect = document.getElementById("second")
var closeTwo = document.getElementById("close-two");
var counter = 1;
document.getElementById("right").addEventListener("click", ()=>{
    if(counter%2 == 0){
        first.style.display= "flex";
        second.style.display = "none";
        counter++;
    }else{
        second.style.display = "flex";
        first.style.display = "none";
        counter++;
    }
});
document.getElementById("left").addEventListener("click", ()=>{
    if(counter%2 == 0){
        first.style.display= "flex";
        second.style.display = "none";
        counter++;
    }else{
        second.style.display = "flex";
        first.style.display = "none";
        counter++;
    }
});

document.getElementById("second-button").addEventListener("click", ()=>{
    console.log("lol")
    bisect.style.display="flex";
});
closeTwo.addEventListener("click", ()=>{
    console.log("close");
    bisect.style.display="none";
})