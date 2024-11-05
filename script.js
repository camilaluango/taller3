let nombre = prompt ("ingrese su nombre")
let eCivil = parseInt(prompt("¿cual es su estado civil? : soltero = 1 , casado = 2, separado = 3, viudo = 4, union libre = 5 "))

switch (eCivil){
    case 1: 
    document.write("señor@ : ", nombre , " su estado civil es: solter@");
    break;
    case 2:  
    document.write("señor@ : ", nombre , " su estado civil es: casad@");
    break;
    case 3: 
    document.write("señor@ : ", nombre , " su estado civil es: separad@");
    break;
    case 4: 
    document.write("señor@ : ", nombre , " su estado civil es: viud@");
    break;
    case 5: 
    document.write("señor@ : ", nombre , " su estado civil es: union libre");
    break;
    default:
        document.write ("error")
}