const question = document.querySelectorAll(".question"),
answer = document.querySelectorAll(".answer"),
quesbox = document.querySelector(".quesbox");


question.forEach( item =>{
    item.addEventListener("click",()=>{
        console.log(item);
        item.nextElementSibling.classList.toggle('active')
        
        })
})