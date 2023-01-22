

var tmp;
var milisegundos;


function test(){
    var tempo = document.getElementById('tempo').value;
    switch(tempo){
        case "minuto":
            milisegundos = 5000;
            break;
        case "minuto-medio":
            milisegundos = 7500;
            break;
        case "dois-minutos":
            milisegundos = 10000;
            break;
        case "dois-medio":
            milisegundos = 12500;
            break;
        case "tres-minutos":
            milisegundos = 15000;
            break;
        case "tres-medio":
            milisegundos = 17500;
            break;
        case "quatro-minutos":
            milisegundos = 20000;
            break;
        case "quatro-medio":
            milisegundos = 22500;
            break;
        case "cinco-minutos":
            milisegundos = 25000;
            break;
    }
    console.log(typeof(milisegundos));
    console.log(milisegundos);
    
    document.getElementById('header').style.display="none";
    document.getElementById('clock').style.display="flex";
}
function start(){
    tmp = setInterval(timer, 5000);
}
var contador = 0;
function timer(){
    
    contador++;
    if(contador==1){
        document.getElementById('cor12').style.backgroundColor= "var(--cor12closed)";
        document.getElementById('cor1').style.backgroundColor= "var(--cor1open)";
    } else if(contador==2){
        document.getElementById('cor1').style.backgroundColor= "var(--cor1closed)";
        document.getElementById('cor2').style.backgroundColor= "var(--cor2open)";
    } else if(contador==3){
        document.getElementById('cor2').style.backgroundColor= "var(--cor2closed)";
        document.getElementById('cor3').style.backgroundColor= "var(--cor3open)";
    } else if(contador==4){
        document.getElementById('cor3').style.backgroundColor= "var(--cor3closed)";
        document.getElementById('cor4').style.backgroundColor= "var(--cor4open)";
    } else if(contador==5){
        document.getElementById('cor4').style.backgroundColor= "var(--cor4closed)";
        document.getElementById('cor5').style.backgroundColor= "var(--cor5open)";
    } else if(contador==6){
        document.getElementById('cor5').style.backgroundColor= "var(--cor5closed)";
        document.getElementById('cor6').style.backgroundColor= "var(--cor6open)";
    } else if(contador==7){
        document.getElementById('cor6').style.backgroundColor= "var(--cor6closed)";
        document.getElementById('cor7').style.backgroundColor= "var(--cor7open)";
    } else if(contador==8){
        document.getElementById('cor7').style.backgroundColor= "var(--cor7closed)";
        document.getElementById('cor8').style.backgroundColor= "var(--cor8open)";
    } else if(contador==9){
        document.getElementById('cor8').style.backgroundColor= "var(--cor8closed)";
        document.getElementById('cor9').style.backgroundColor= "var(--cor9open)";
    } else if(contador==10){
        document.getElementById('cor9').style.backgroundColor= "var(--cor9closed)";
        document.getElementById('cor10').style.backgroundColor= "var(--cor10open)";
    } else if(contador==11){
        document.getElementById('cor10').style.backgroundColor= "var(--cor10closed)";
        document.getElementById('cor11').style.backgroundColor= "var(--cor11open)";
    } else {
        document.getElementById('cor11').style.backgroundColor= "var(--cor11closed)";
        document.getElementById('cor12').style.backgroundColor= "var(--cor12open)";

        contador=0;
    }
    
    
}



