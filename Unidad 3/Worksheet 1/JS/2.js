function lanzamiento(){
    aleatorio=Math.trunc(Math.random()*6+1);
    return aleatorio;
}

document.write("El lanzado un dado y ha salido "+lanzamiento());