var num=parseInt(prompt("Ingresa un numero"));
var valor1=1;
var valor2=1;
var temp;
console.log(valor1);
console.log(valor2);
while(valor1+valor2 <=num){
    temp=valor1;
    valor1=valor2;
    valor2=temp+valor1;
    console.log(valor2);
}