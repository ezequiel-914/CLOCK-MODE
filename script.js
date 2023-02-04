var contador = 0;
var tmp;
var voltas;
var data;
var tempototaldetreino;
let tmpt;
let tela;
   

function start(){
    tmp = setInterval(timer, 1000);
    data = setInterval(data,1000);
    tmpt = setInterval(tempototal,1000);
    tela = setInterval(telaverif, 1000);
    document.getElementById('dados-definidos').style.display="block";
    document.getElementById('title').style.display="none";
    document.getElementById('continuar').style.display="none";
    document.getElementById('title').style.display="none";
    document.getElementById('myvideo').play();

   
    
    
  
 }
function telaverif(){
    var largura = window.innerWidth;
    console.log(largura);
    if(largura<=950){
        document.getElementById('totaltreino-inf').style.display="block";
        document.getElementById('totaltreino-lat').style.display="none";
    }else{
        document.getElementById('totaltreino-inf').style.display="none";
        document.getElementById('totaltreino-lat').style.display="block";
    }
}

 function data(){   
    var data = new Date();
    
    // Guarda cada pedaço em uma variável
    var dia     = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2    = data.getYear();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    var mseg    = data.getMilliseconds();   // 0-999
    var tz      = data.getTimezoneOffset(); // em minutos
    
    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + '/' + (mes+1) + '/' + ano4;
    var str_hora = hora + ':' + min + ':' + seg;
    
    
    document.getElementById('data-txt').innerHTML=str_data
    document.getElementById('hora-txt').innerHTML=str_hora
    
    
}

function timer(){
    var tempo = document.getElementById('tempo').value;
    document.getElementById('botaopausa').style.display="block";
    document.getElementById('voltar').style.display="block";



    switch(tempo){
        case "minuto":
            voltas = 5;
            document.getElementsByClassName("temp-def")[0].innerHTML="00:01:00";
            document.getElementsByClassName("temp-def")[1].innerHTML="00:01:00";
            break;
        case "minuto-medio":
            voltas = 7;
            document.getElementsByClassName("temp-def")[0].innerHTML="00:01:30";
            document.getElementsByClassName("temp-def")[1].innerHTML="00:01:30";
            break;
        case "dois-minutos":
            voltas = 10;
            document.getElementsByClassName("temp-def")[0].innerHTML="00:02:00";
            document.getElementsByClassName("temp-def")[1].innerHTML="00:02:00";
            break;
        case "dois-medio":
            voltas = 12;
            document.getElementsByClassName("temp-def")[0].innerHTML="00:02:30";
            document.getElementsByClassName("temp-def")[1].innerHTML="00:02:30";
            break;
        case "tres-minutos":
             voltas = 15;
             document.getElementsByClassName("temp-def")[0].innerHTML="00:03:00";
             document.getElementsByClassName("temp-def")[1].innerHTML="00:03:00";
            break;
        case "tres-medio":
            voltas = 17;
            document.getElementsByClassName("temp-def")[0].innerHTML="00:03:30";
            document.getElementsByClassName("temp-def")[1].innerHTML="00:03:30";
            break;
        case "quatro":
            voltas = 20;
            document.getElementsByClassName("temp-def")[0].innerHTML="00:04:00";
            document.getElementsByClassName("temp-def")[1].innerHTML="00:04:00";
            break;
        case "quatro-medio":
            voltas = 22;
            document.getElementsByClassName("temp-def")[0].innerHTML="00:04:30";
            document.getElementsByClassName("temp-def")[1].innerHTML="00:04:30";
            break;
        case "cinco-minutos":
            voltas = 25;
            document.getElementsByClassName("temp-def")[0].innerHTML="00:05:00";
            document.getElementsByClassName("temp-def")[1].innerHTML="00:05:00";
            break;
    }
    console.log(voltas);
    document.getElementById('header').style.display="none";
    document.getElementById('corpo').style.display="flex";
    contador++;
    
    if(contador<(voltas*1)){
        document.getElementById('cor12').style.backgroundColor= "var(--cor12closed)";
        document.getElementById('cor1').style.backgroundColor= "var(--cor1open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor1open)";
        document.getElementById('png-12').style.display= "none";
        document.getElementById('png-1').style.display= "block";
    } else if(contador<(voltas*2)){
        document.getElementById('cor1').style.backgroundColor= "var(--cor1closed)";
        document.getElementById('cor2').style.backgroundColor= "var(--cor2open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor2open)";
        document.getElementById('png-1').style.display= "none";
        document.getElementById('png-2').style.display= "block";
    } else if(contador<(voltas*3)){
        document.getElementById('cor2').style.backgroundColor= "var(--cor2closed)";
        document.getElementById('cor3').style.backgroundColor= "var(--cor3open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor3open)";
        document.getElementById('png-2').style.display= "none";
        document.getElementById('png-3').style.display= "block";
    } else if(contador<(voltas*4)){
        document.getElementById('cor3').style.backgroundColor= "var(--cor3closed)";
        document.getElementById('cor4').style.backgroundColor= "var(--cor4open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor4open)";
        document.getElementById('png-3').style.display= "none";
        document.getElementById('png-4').style.display= "block";
    } else if(contador<(voltas*5)){
        document.getElementById('cor4').style.backgroundColor= "var(--cor4closed)";
        document.getElementById('cor5').style.backgroundColor= "var(--cor5open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor5open)";
        document.getElementById('png-4').style.display= "none";
        document.getElementById('png-5').style.display= "block";
    } else if(contador<(voltas*6)){
        document.getElementById('cor5').style.backgroundColor= "var(--cor5closed)";
        document.getElementById('cor6').style.backgroundColor= "var(--cor6open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor6open)";
        document.getElementById('png-5').style.display= "none";
        document.getElementById('png-6').style.display= "block";
    } else if(contador<(voltas*7)){
        document.getElementById('cor6').style.backgroundColor= "var(--cor6closed)";
        document.getElementById('cor7').style.backgroundColor= "var(--cor7open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor7open)";
        document.getElementById('png-6').style.display= "none";
        document.getElementById('png-7').style.display= "block";
    } else if(contador<(voltas*8)){
        document.getElementById('cor7').style.backgroundColor= "var(--cor7closed)";
        document.getElementById('cor8').style.backgroundColor= "var(--cor8open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor8open)";
        document.getElementById('png-7').style.display= "none";
        document.getElementById('png-8').style.display= "block";
    } else if(contador<(voltas*9)){
        document.getElementById('cor8').style.backgroundColor= "var(--cor8closed)";
        document.getElementById('cor9').style.backgroundColor= "var(--cor9open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor9open)";
        document.getElementById('png-8').style.display= "none";
        document.getElementById('png-9').style.display= "block";
    } else if(contador<(voltas*10)){
        document.getElementById('cor9').style.backgroundColor= "var(--cor9closed)";
        document.getElementById('cor10').style.backgroundColor= "var(--cor10open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor10open)";
        document.getElementById('png-9').style.display= "none";
        document.getElementById('png-10').style.display= "block";
    } else if(contador<(voltas*11)){
        document.getElementById('cor10').style.backgroundColor= "var(--cor10closed)";
        document.getElementById('cor11').style.backgroundColor= "var(--cor11open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor11open)";
        document.getElementById('png-10').style.display= "none";
        document.getElementById('png-11').style.display= "block";
    } else if(contador<(voltas*12)){
        document.getElementById('cor11').style.backgroundColor= "var(--cor11closed)";
        document.getElementById('cor12').style.backgroundColor= "var(--cor12open)";
        document.getElementById('clock-center').style.backgroundColor= "var(--cor12open)";
        document.getElementById('png-11').style.display= "none";
        document.getElementById('png-12').style.display= "block";
       
} else{
         contador=0;
}

}
//########################## CONTADOR DO TEMPO TOTAL DE TREINO #######################################################

   let minutostotal=0;
   let segundostotal=0;
   

   function tempototal(){
       segundostotal++;
       if(segundostotal>59){
           minutostotal++;
           segundostotal=0;
           if(minutostotal<10){
               document.getElementById('mintot').innerHTML='0'+minutostotal;
               document.getElementsByClassName("mintot")[0].innerHTML='0'+minutostotal;
               document.getElementsByClassName("mintot")[1].innerHTML='0'+minutostotal;
           }else{
               document.getElementById('mintot').innerHTML=minutostotal;
               document.getElementsByClassName("mintot")[0].innerHTML= minutostotal;
               document.getElementsByClassName("mintot")[1].innerHTML= minutostotal;
               
           }
           
       }
       if(segundostotal<10){
           document.getElementById('segtot').innerHTML='0'+segundostotal;
           document.getElementsByClassName("segtot")[0].innerHTML='0'+segundostotal;
           document.getElementsByClassName("segtot")[1].innerHTML='0'+segundostotal;
       }else{
           document.getElementById('segtot').innerHTML=segundostotal;
           document.getElementsByClassName("segtot")[0].innerHTML= segundostotal;
           document.getElementsByClassName("segtot")[1].innerHTML= segundostotal;
       }
       
   } 
   //########################## PARAR // PAUSAR CLOCK #######################################################

   function parar(){
       clearInterval(tmp);
       clearInterval(tmpt);
       document.getElementById('continuar').style.display="block";
       document.getElementById('iniciar').value="CONTINUAR";
       document.getElementById('botaopausa').style.display="none";
   }
      //########################## PARAR // PAUSAR CLOCK #######################################################


      var select = document.getElementById('tempo');
      select.addEventListener('blur', sair);
      function sair(){
        document.getElementById('tempo').style.display="none;";
      }