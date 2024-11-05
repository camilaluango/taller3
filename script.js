/*let nombre = prompt ("ingrese su nombre")
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

document.write("ejercicio 2")
let num
let opor = 5
while(true){
    num = parseInt(prompt("ingrese un numero del 1 al 10"))
    if(num>=1 && num<=10){
        alert("gracias");
        break;
    }else
        alert("debe ingresar un número válido entre 1 y 10")
}
*/
document.write("ejercicio 3")
let suma = 0
let numero

do{
    numero = prompt("ingresa un numero para sumar (ingresa el 0000 para parar la suma)");
    if (numero!=="0000"){
        valor = parseFloat(numero);
       
    }if (!isNaN(numero)) {
        suma += valor;

    } else {
        alert("Por favor, ingresa un número válido.");
    }
}
while(numero!=="0000"){
    alert(`el valor acumulado de la suma es ${suma}`)
    
    if(suma > 0 ){
        alert("el valor es mayor a 0")
    }else if(suma < 0){
        alert("el valor es menor a 0 ")
    }else {
        alert("el valor es igual a 0")
    }
}
