var contador = 0;
var tmp;
var voltas;



function start(){
    tmp = setInterval(timer, 1000);
 }  

function timer(){
    var tempo = document.getElementById('tempo').value;
    switch(tempo){
        case "minuto":
            voltas = 5;
            break;
        case "minuto-medio":
            voltas = 7;
            break;
        case "dois-minutos":
            voltas = 10;
            break;
        case "dois-medio":
            voltas = 12;
            break;
        case "tres-minutos":
             voltas = 15;
            break;
        case "tres-medio":
            voltas = 17;
            break;
        case "quatro":
            voltas = 20;
            break;
        case "quatro-medio":
            voltas = 22;
            break;
        case "cinco-minutos":
            voltas = 25;
            break;
    }
    console.log(voltas);
    document.getElementById('header').style.display="none";
    document.getElementById('clock').style.display="flex";
    contador++;
    
    if(contador<=(voltas*1)){
        document.getElementById('cor12').style.backgroundColor= "var(--cor12closed)";
        document.getElementById('cor1').style.backgroundColor= "var(--cor1open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor1open)";
    } else if(contador<=(voltas*2)){
        document.getElementById('cor1').style.backgroundColor= "var(--cor1closed)";
        document.getElementById('cor2').style.backgroundColor= "var(--cor2open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor2open)";
    } else if(contador<=(voltas*3)){
        document.getElementById('cor2').style.backgroundColor= "var(--cor2closed)";
        document.getElementById('cor3').style.backgroundColor= "var(--cor3open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor3open)";
    } else if(contador<=(voltas*4)){
        document.getElementById('cor3').style.backgroundColor= "var(--cor3closed)";
        document.getElementById('cor4').style.backgroundColor= "var(--cor4open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor4open)";
    } else if(contador<=(voltas*5)){
        document.getElementById('cor4').style.backgroundColor= "var(--cor4closed)";
        document.getElementById('cor5').style.backgroundColor= "var(--cor5open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor5open)";
    } else if(contador<=(voltas*6)){
        document.getElementById('cor5').style.backgroundColor= "var(--cor5closed)";
        document.getElementById('cor6').style.backgroundColor= "var(--cor6open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor6open)";
    } else if(contador<=(voltas*7)){
        document.getElementById('cor6').style.backgroundColor= "var(--cor6closed)";
        document.getElementById('cor7').style.backgroundColor= "var(--cor7open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor7open)";
    } else if(contador<=(voltas*8)){
        document.getElementById('cor7').style.backgroundColor= "var(--cor7closed)";
        document.getElementById('cor8').style.backgroundColor= "var(--cor8open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor8open)";
    } else if(contador<=(voltas*9)){
        document.getElementById('cor8').style.backgroundColor= "var(--cor8closed)";
        document.getElementById('cor9').style.backgroundColor= "var(--cor9open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor9open)";
    } else if(contador<=(voltas*10)){
        document.getElementById('cor9').style.backgroundColor= "var(--cor9closed)";
        document.getElementById('cor10').style.backgroundColor= "var(--cor10open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor10open)";
    } else if(contador<=(voltas*11)){
        document.getElementById('cor10').style.backgroundColor= "var(--cor10closed)";
        document.getElementById('cor11').style.backgroundColor= "var(--cor11open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor11open)";
    } else if(contador<=(voltas*12)){
        document.getElementById('cor11').style.backgroundColor= "var(--cor11closed)";
        document.getElementById('cor12').style.backgroundColor= "var(--cor12open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor12open)";
       
} else{
         contador=0;
}

}
