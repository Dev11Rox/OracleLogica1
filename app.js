
let numMax = 10;
let numSec = Math.floor(Math.random()*numMax)+1;
alert(`el numero secreto es ${numSec}`);
let intentos =1;
let intMax =3;
let numUser = parseInt(prompt(`Indícame un número entre 1 y  ${numMax} porfavor:`));
console.log(numUser);

while(numSec!=numUser){
    if (numUser>=numSec){
        alert('El número es incorrecto, prueba con uno menor'); 
    }else if(numUser<=numSec) {
        alert('El número es incorrecto, prueba con uno mayor');
    }
    numUser = prompt("Indíca el nuevo número:");
    intentos=intentos+1;
    if (intentos==intMax){
        alert('Llegaste al numero maximo de intentos');
        break;
    }
    
}
if (numUser == numSec) {
    alert(`Acertaste, el número correco es el ${numSec} en ${intentos} ${intentos ==1? 'intento':'intentos'} ¡Felicitaciones!`);
}else{
    alert(`Fallaste ${intMax} itentos, el número correcto es el ${numSec} `);
}



