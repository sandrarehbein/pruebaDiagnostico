var min =parseInt(prompt("Ingresa un numero minimo"));
var max=parseInt(prompt("Ingrese numer maximo"));
var suma=0;
for(let i=min; i<=max ;i++){
if(i%2!=0){
    console.log(i);
    suma=suma+i;
}


}console.log("la suma es "+ suma);