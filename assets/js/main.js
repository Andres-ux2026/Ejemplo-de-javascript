let nombre=" Andres "
let saludos="Como estas"
const pi= 3.14655  

let texto="esto es un string"

let numero="123456789"

let pepito= document.getElementById("h1");

pepito.textContent = "hola"


pepito.addEventListener("mouseover", function(){
    pepito.style.color = "green"
});

//condicionales 
let nota =7;
if(nota >=4){
    console.log("aprobado");
}else{
    console.log("reprobado")
}

//funciones 

function saludar(apellido){
    console.log("hola"+ apellido);
}

saludar("carlos")

function esmayor(edad){
    if (edad >= 18 && edad <=100){
        console.log("puede ver el contenido")
    }else { 
        console.log("No estas vivo para ver el contenido")
    }
    if (edad < 18){
        console.log("Menor de edad no puede ver el contenido")
    }
}

esmayor("101")

function minusamayus(texto){
    console.log(texto.toUpperCase();
}
minusamayus("pepito")

