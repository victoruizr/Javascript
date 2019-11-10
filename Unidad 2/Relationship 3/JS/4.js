function consonantes(cadena1){
    for(k=0;k < cadena1.length;k++){       
        switch(cadena1[k]){
            case "b":
                document.write("b");
                break;
            case "c":
                document.write("c");
                break;
            case "d":
                document.write("d");
                break;
            case "f":
                document.write("f");
                break;
            case "g":
                document.write("u");
                break;
            case "h":
                document.write("h");
                break;
            case "j":
                document.write("j");
                break;
            case "k":
                document.write("k");
                break;
            case "l":
                document.write("l");
                break;
            case "m":
                document.write("m");
                break;
            case "ñ":
                document.write("ñ");
                break;
            case "p":
                document.write("p");
                 break;
            case "q":
                document.write("q");
                break;
            case "r":
                document.write("r");
                break;
            case "s":
                document.write("s");
                break;
            case "t":
                document.write("t");
                break;
            case "v":
                document.write("v");
                break;
            case "w":
                document.write("w");
                 break;
            case "x":
                document.write("x");
                break;
            case "y":
                document.write("y");
                break;
            case "z":
                document.write("z");
                break;
    } 
}  
    
    for(k=0;k < cadena1.length;k++){       
        switch(cadena1[k]){
            case "a":
            case "à":
            case "á":
                document.write("a");
                break;
            case "e":
            case "é":
            case "è":
                document.write("e");
                break;
            case "i":
            case "í":
            case "ì":
                document.write("i");
                break;
            case "o":
            case "ó":
            case "ò":
                document.write("o");
                break;
            case "u":
            case "ú":
            case "ù":
                document.write("u");
                break;
            case " ":
                document.write("");
        }
    }
}

consonantes("esto vivo");
    
