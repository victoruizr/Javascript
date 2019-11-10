function calculateSupply(){
    var age=19;
    var amount=800;
    var maxAge=99;
    var res= parseFloat(((amount*365)*(maxAge-age)+" max "));
    var total = Math.round(res);
    if(age!=0 && amount!=0){
        document.write("You will need "+total+" to last you until the ripe old age of "+maxAge+"<br>");}
    else{
        document.write("Campos vacios<br>");
    }
}
calculateSupply();
calculateSupply();
calculateSupply();