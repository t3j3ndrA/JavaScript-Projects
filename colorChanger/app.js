//array of random hex numbers
const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.querySelector(".btn");
let clrDisplay = document.querySelector(".color")

//click even listner on button
btn.addEventListener('click',function(){
    let color = "#";
    for(let i=0; i<6; ++i){
        color += hex[getRandomNumber()];
    }    
    document.body.style.backgroundColor = color;
    clrDisplay.textContent = color;
})

// Random Number Generator
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}