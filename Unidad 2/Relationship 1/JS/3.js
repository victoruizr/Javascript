function contador(){
    for(let i=60;i!=0;i--){
        document.write(i+" ")
        window.setTimeout(contador(),1000);
    }  
}

