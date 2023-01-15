let one = document.getElementById('tampa1');
let two = document.getElementById('tampa2');
let three = document.getElementById('tampa3');
let contador = 0;
var tmp;

function inicio(){
    contador ++;
    
    if(contador= 1){

        if(one.classList.contains('closed')){
            one.classList.add('open');
        }else{
            one.classList.add('closed');
        }

    }else if(contador=2){
        if(two.classList.contains('closed')){
            two.classList.add('open');
        }else{
            two.classList.add('closed')
        }
    }else{
        if(three.classList.contains('closed')){
            three.classList.add('open');
        }else{
            three.classList.add('closed')
        }
        
    }
  
  contador=1;
}


function start(){
    tmp=setInterval(inicio,1000);
 

    
}









