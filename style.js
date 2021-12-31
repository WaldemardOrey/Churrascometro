
    var dentro = document.getElementById("dentro");

//calcular em gramas

function quantoDeCarne(elemento){

        
    let qtdAdultos = document.getElementById("Adultos");
    let qtdCrianças = document.getElementById("Crianças");
    let qtdHoras = document.getElementById("Horas");
    let qtdAdulto = qtdAdultos.value;
    let qtdCriança = qtdCrianças.value;

if(elemento >= 6){ return Math.round(qtdAdulto * 650) + Math.round(qtdCriança * 650/2)  }
else
{ return  Math.round(qtdAdulto * 450) + Math.round(qtdCriança * 450/2) }
}

//calcular em ml

function quantoDeCerveja(elemento){

            
    let qtdAdultos = document.getElementById("Adultos");
    let qtdCrianças = document.getElementById("Crianças");
    let qtdHoras = document.getElementById("Horas");
    let qtdAdulto = qtdAdultos.value;
    let qtdCriança = qtdCrianças.value;

if(elemento >= 6){ return Math.round(qtdAdulto * 1400)}
else
{ return  Math.round(qtdAdulto * 1200)}
}


// calcular em ml
function quantoDeBebida(elemento){

        
    let qtdAdultos = document.getElementById("Adultos");
    let qtdCrianças = document.getElementById("Crianças");
    let qtdHoras = document.getElementById("Horas");
    let qtdAdulto = qtdAdultos.value;
    let qtdCriança = qtdCrianças.value;

if(elemento >= 6){ return Math.round(qtdAdulto * 700) + Math.round(qtdCriança * 700/2)  }
else
{ return  Math.round(qtdAdulto * 500) + Math.round(qtdCriança * 500/2) }
}

var d1 = 1;

function a () {
    let qtdAdultos = document.getElementById("Adultos");
    let qtdCrianças = document.getElementById("Crianças");
    let qtdHoras = document.getElementById("Horas");
    let qtdAdulto = qtdAdultos.value;
    let qtdCriança = qtdCrianças.value;
    let qtdHora = qtdHoras.value;
    

    let a = quantoDeCarne(qtdHoras.value);
    let b = quantoDeCerveja(qtdHoras.value);
    let c = quantoDeBebida(qtdHoras.value);



        if(dentro.innerHTML == "<hr><h1>Impossível Calcular, faltam dados!</h1>"){

            dentro.innerHTML = "";

        }
   dentro.innerHTML += `<hr><h1>${d1}</h1><span>Para ${qtdAdulto} adultos, ${qtdCriança} crianças e duração de ${qtdHora}(h), você precisa de: </span>

                        <p>${a/1000}Kg de carne.</p>
                        <p>${Math.ceil(b/355)} latas de cerveja. </p>
                        <p>${c/1000}L de gasosa.  </p>
                        </br></br></br></br></br>`
d1++;
}



function limpar(){
ficarclaro1()
;
    let qtdAdultos = document.getElementById("Adultos");
    let qtdCrianças = document.getElementById("Crianças");
    let qtdHoras = document.getElementById("Horas");
    qtdAdultos.value = "";
    qtdCrianças.value = "";
    qtdHoras.value = "";

    dentro.innerHTML = "";
    d1 = 1;
}




function ficarclaro(){

let claro = document.getElementsByTagName("button")[0];

claro.style.backgroundColor =" white";
claro.style.color =" black";


setTimeout(ficarescuro,500);

}

function ficarescuro(){
    let claro = document.getElementsByTagName("button")[0];

    claro.style.backgroundColor ="black";
    claro.style.color ="white";
    
    

}




function ficarclaro1(){


    let claro1 = document.getElementsByTagName("button")[1];
  
    
    claro1.style.backgroundColor =" white";
    claro1.style.color =" black";
    
    setTimeout(ficarescuro1,500);
    
    }
    
    function ficarescuro1(){
   
    
        let claro1 = document.getElementsByTagName("button")[1];
    
        
        claro1.style.backgroundColor ="black";
        claro1.style.color = "white";
        
    
    }








function calcular(){

    ficarclaro();




    let qtdAdultos = document.getElementById("Adultos");
    let qtdCrianças = document.getElementById("Crianças");
    let qtdHoras = document.getElementById("Horas");
   
    let qtdAdulto = qtdAdultos.value;
    let qtdCriança = qtdCrianças.value;
    let qtdHora = qtdHoras.value;


    if(qtdAdulto == "" || qtdHora == "" || qtdCriança == ""){

        dentro.innerHTML = "<hr><h1>Impossível Calcular, faltam dados!</h1>";
    }else if(qtdAdulto < 0 || qtdHora < 0 || qtdCriança < 0 ){
        dentro.innerHTML = "<hr><h1>Impossível Calcular, não aceitamos números negativos!</h1>";

     }

    else{
    a();
    }

    }
