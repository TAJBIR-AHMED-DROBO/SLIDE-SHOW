var total = document.querySelectorAll(".contents");
console.log(total);


count = 1;
setInterval(()=>{
count++;

ce = document.querySelector(".current");
ce.classList.remove("current");

if(count>total.length){
 

total[0].classList.add("current");
count = 1;
}
 else{

    ce.nextElementSibling.classList.add("current");
 }

 
  



},1000);


















