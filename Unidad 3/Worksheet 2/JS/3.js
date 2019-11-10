function base(){
    var dado1=Array(),dado2=Array(),dos=0,tres=0,cuatro=0,cinco=0,seis=0,
    siete=0,ocho=0,nueve=0,diez=0,once=0,doce=0;
    for(var i=0;i<36000;i++){
        var d1 = Math.trunc(Math.random()*6+1);
        var d2 = Math.trunc(Math.random()*6+1);
        dado1[i]=d1;
        dado2[i]=d2;
        suma= (d1+d2);
        switch (suma){
            case 2:dos+=1;break;
            case 3:tres+=1;break;
            case 4:cuatro+=1;break;
            case 5:cinco+=1;break;
            case 6:seis+=1;break;
            case 7:siete+=1;break;
            case 8:ocho+=1;break;
            case 9:nueve+=1;break;
            case 10:diez+=1;break;
            case 11:once+=1;break;
            case 12:doce+=1;break;
        }
        document.write("<table border=1>"+
        "<tr><td>"+dado1[i]+" "+dado2[i]+"</td></tr>"        
        );
    }
    return    document.write(
    "<tr><td> Ha salido el dos "+dos+" veces<tr></td>"+   
    "<tr><td> Ha salido el tres "+tres+" veces<tr></td>"+  
    "<tr><td> Ha salido el cuatro "+cuatro+" veces<tr></td>"+   
    "<tr><td> Ha salido el cinco "+cinco+" veces<tr></td>"+   
    "<tr><td> Ha salido el seis "+seis+" veces<tr></td>"+   
    "<tr><td> Ha salido el siete "+siete+" veces<tr></td>"+   
    "<tr><td> Ha salido el ocho"+ocho+" veces<tr></td>"+   
    "<tr><td> Ha salido el nueve "+nueve+" veces<tr></td>"+  
    "<tr><td> Ha salido el diez "+diez+" veces<tr></td>"+   
    "<tr><td> Ha salido el once "+once+" veces<tr></td>"+   
    "<tr><td> Ha salido el doce "+doce+" veces<tr></td></table>");
}
base();