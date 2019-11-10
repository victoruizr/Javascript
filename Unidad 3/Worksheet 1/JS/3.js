function lanzamiento(){
        cont=1;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;
        for(var i=0;i<=6000;i++){
        aleatorio=Math.trunc(Math.random()*6+1);
        switch(aleatorio){
            case 1: uno=uno+1;break;
            case 2: dos=dos+1;break;
            case 3: tres=tres+1;break;
            case 4: cuatro=cuatro+1;break;
            case 5: cinco=cinco+1;break;
            case 6: seis=seis+1;break;
            default:  document.write("");      
        }
    }
return document.write("Ha salido el uno "+uno+" veces<br>"+
"Ha salido el dos "+dos+" veces<br>"+
"Ha salido el tres "+tres+" veces<br>"+
"Ha salido el cuatro "+cuatro+" veces<br>"+
"Ha salido el cinco "+cinco+" veces<br>"+
"Ha salido el seis "+seis+" veces");
}

lanzamiento();