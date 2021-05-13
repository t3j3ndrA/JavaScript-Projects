let count = document.querySelector(".currentCount");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const reset = document.querySelector(".reset");

let number = 0;

up.addEventListener("click",function(){
    number++;
    if(number >=0)
    {
        count.classList.add("green");
        count.classList.remove("red");
    }
    count.textContent = number;

})

down.addEventListener("click",function(){
    number--;
    if(number < 0)
    {
        count.classList.remove("green");
        count.classList.add("red");
    }
    count.textContent = number;
})

reset.addEventListener("click",function(){
    number = 0;
    count.classList.remove("red");
    count.classList.add("green");
    count.textContent = number;
})


