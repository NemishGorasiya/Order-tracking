let done = document.querySelectorAll(".done");

done.forEach((ele,index)=>{
    setTimeout(()=>{
        ele.style.color = "#61E000";
        ele.childNodes[0].classList.add("fa-circle-check");
        ele.childNodes[0].classList.remove("fa-circle");
        ele.childNodes[0].style.boxShadow = "rgba(15, 133, 8, 0.8) 0px 5px 20px";
       ele.classList.add("green");
   },1200*(index+1))
})

