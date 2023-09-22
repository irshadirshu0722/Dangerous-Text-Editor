const textarea = document.getElementById("textbox")
const restart = document.querySelector(".restart")


let timer;
let timer2;



function typing() { 
   
   
    clearTimeout(timer)
    clearTimeout(timer2)
    textarea.style.opacity = 0.9;
    timer = setTimeout(() => {

        textarea.style.transition = "opacity 5s"; 

        textarea.style.opacity = 0;
        
        timer2=setTimeout(() => {

            textarea.disabled = true;
            restart.style.opacity = 1            
    
          }, 5000)
      }, 5000)


  }







  


  restart.addEventListener("click",()=>{
    restart.style.opacity = 0

    console.log("clciked");
    textarea.value = ""
    textarea.style.opacity = 0.9;
    textarea.disabled = false;


  })