function paresImpares(){
    var myArray= Array(100);
    var pares = Array();
    var impares = Array();
    for(var i=0;i<100;i++){
        var numero = Math.trunc(Math.random()*1000+1);
        myArray[i]=numero;
        if(myArray[i]%2==0)
           pares[i]=numero;
        else if (myArray[i]%2!=0)
            impares[i]=numero;
        console.log(myArray[i]);   
    }
    myArray.length = 0;
    var nums = myArray.concat(pares,impares);
    return nums;
}
console.log(paresImpares());