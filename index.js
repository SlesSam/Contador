
const ti =document.getElementById('numbers');
var  counter =1;
const step = parseInt(document.getElementById('step').value);


//funcion expresada 
const fu = (btn)=>{

     if(btn.value=='start'){
        counter = setInterval(()=>{
            console.log(` empieza la cuenta  "${counter}" `),
            timer()
        }, document.getElementById('setTo').value);

    }else if(btn.value=='pause'){
        pause();
        
    }else if(btn.value=='reset'){
        parseInt(document.getElementById('numbers').innerHTML);
        document.getElementById('numbers').innerHTML = 0;
        console.log("volvemos a 0 ")
        pause();
        
    }
// este quiero hacer que cuando le damos click al btn aunmente o disminuya el contador 
    if(btn.value=='up'){
        counter++;
    }else if(btn.value=='down'){
        counter--;
    }

}
//me falta poner que el usuario me de los intervalos que vaya el contador.
const timer=()=>{ 
   const tio = parseInt(ti.innerHTML);
   document.getElementById('numbers').innerHTML = eval(tio, 1);
}

const pause=()=>{
    clearInterval(counter)
    console.log("Se paro....... ")

}

//me faltaron dos para que este ejercicio este muy bien.
// no se como sulocionarlo, aqui me quede un poco bloqueada 






