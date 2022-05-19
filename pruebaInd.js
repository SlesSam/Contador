let count = 0;
const ti =document.getElementById('numbers');

const btns =  document.querySelectorAll("button");


btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if (btn.value ==='start') {
            count=   setInterval(()=>{
                console.log(` empieza la cuenta  "${count}" ` )
                
            },1000);
        console.log(count, setInterval())
        } if (btn.value ==='reset') {
            clearInterval(count)
            count = 0;
        } else {
            
        }

        ti.textContent = count;

    });

});



const timer=()=>{ 
    const tio = parseInt(ti.innerHTML);
    document.getElementById('numbers').innerHTML = eval(tio, 1);
 }
 
 const pause=()=>{
     clearInterval(count)
     console.log("Se paro.......fin " + count)
 
 }