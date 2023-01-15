let one = document.getElementById('tampa1');
let two = document.getElementById('tampa2');
let three = document.getElementById('tampa3');
var tmp;
let contador=0; 
function inicio(){
    
    contador ++;
    
    if(contador== 1){
            //Div (1)
            one.classList.remove('closed');
            one.classList.add('open');
            //Div (2)
            two.classList.remove('closed');
            two.classList.add('closed');
            //Div(3)
            three.classList.remove('open');
            three.classList.add('closed');

          }else if(contador==2){
                //Div (1)
            one.classList.remove('open');
            one.classList.add('closed');
            //Div (2)
            two.classList.remove('closed');
            two.classList.add('open');
            //Div(3)
            three.classList.remove('closed');
            three.classList.add('closed');       
            }else{
                 //Div (1)
            one.classList.remove('closed');
            one.classList.add('closed');
            //Div (2)
            two.classList.remove('open');
            two.classList.add('closed');
            //Div(3)
            three.classList.remove('closed');
            three.classList.add('open');
            contador=0; 
    }
            }
          
     

 setInterval(inicio, 1000);










