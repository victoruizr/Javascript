function tellFortune(){
    var numero=prompt("Number of children");
    var nombre =prompt("Partner's name");
    var location=prompt("Geographic location");
    var trabajo=prompt("Job Title");
    if(numero!='' && nombre!='' && location!='' && trabajo!=''){
        document.write("You will be a "+trabajo+" in "+location+",and married to "+nombre+" with "+numero+" kids <br>");}
    else { 
        alert("Algo fallo");
    } 
}
tellFortune();
tellFortune();
tellFortune();