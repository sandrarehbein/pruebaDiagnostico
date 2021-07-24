var n =parseInt(prompt("Ingresa un numero"));
var suma=0;
for(let i=1; i<=n;i++){
if(i%2!=0){
    console.log(i);
    suma=suma+i;
}


}console.log("la suma es "+ suma);