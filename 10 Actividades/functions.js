function sumar (a, b) {
    
}
//función ejercicio 1
function func_ej1(){
    let ej1_n1 = parseFloat (document.getElementById('ej1_n1').value);
    let ej1_n2 = parseFloat (document.getElementById('ej1_n2').value);
    let ej1_n3 = parseFloat (document.getElementById('ej1_n3').value);
    //const suma = ej1_n1 + ej2_n2 + ej3_n3
    if (ej1_n1>ej1_n2 && ej1_n1>ej1_n3) {
            var suma = ej1_n1
        } else {
         if (ej1_n2>ej1_n1 && ej1_n2>ej1_n3) {
                var suma = ej1_n2
            } else { var suma = ej1_n3
            
            }
        }

        document.getElementById('ej1_r1').value = suma
}

function func_ej2(){
    let ej2_n1 = parseFloat (document.getElementById('ej2_n1').value); 
    let ej2_n2 = parseFloat (document.getElementById('ej2_n2').value);
    const suma=ej2_n1 + ej2_n2
    document.getElementById('ej2_r1').value = suma
}
        
function func_ej3(){
    let ej3_t1 = (document.getElementById('ej3_t1').value);
    let ej3_n1 = parseFloat (document.getElementById('ej3_n1').value);
    let frase = ""
    for (let index = 0; index < ej3_n1; index++) {
       frase = frase + ej3_t1
        
    } 
    document.getElementById('ej3_r1').value = frase
}
function func_ej4() {
    let ej4_n1 = parseFloat (document.getElementById('ej4_n1').value);
    let ej4_n2 = parseFloat (document.getElementById('ej4_n2').value);
    alert (ej4_n1)
    if (ej4_n1 == 0 && ej4_n2!=0) {
       const celsius = ((ej4_n2 - 32) * (5/9)) 

         document.getElementById('ej4_n2').value = 0
        document.getElementById('ej4_n1').value = celsius
    } else {
        const farentheit = ((ej4_n1 * (9/5)) +32)
        alert ("El else funciona")
        document.getElementById('ej4_n2').value = farentheit
        document.getElementById('ej4_n1').value = 0
    }
    
}

function func_ej5() {
    const palabra = document.getElementById("ejercicio5Palabra").value;
    const resultado = document.getElementById("ejercicio5Resultado");
    resultado.textContent = "La palabra " + palabra + " tiene " + palabra.length + " letras"
}

function func_ej6() {  
    let num = parseFloat(document.getElementById('ej6_n1').value);
    calc = num % 2
    if (calc == 0) {
        var res = "par";
        document.getElementById("ej6_t1").value = res;
    }else{
        var res = "impar";
        document.getElementById("ej6_t1").value = res;
    }
}

function func_ej7(){
    let ej7_c1 = parseFloat(document.getElementById("ej7_c1").value);
    let ej7_c2 = parseFloat(document.getElementById("ej7_c2").value);

    const multiposDeTres = [];

    for (let i=1; i <= ej7_c2 && i <= ej7_c1; i++){
        if (i % 3 == 0){
          multiposDeTres.push(i);
        }
    }
    document.getElementById("ej7_resultado").value = multiposDeTres.toString();
}


function func_ej8(){

    let num1= parseInt(document.getElementById('ej8_n1').value);


var primos = []
for (let index = 0; index <= num1; index++) {

if (esPrimo(index)) {
    primos.push(index)
}
    
}
alert (primos.toString())
}

function esPrimo(numero) {

    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }
function func_ej9(){

    const nombre = document.getElementById("ejercicio9Nombre").value;
  const apellido = document.getElementById("ejercicio9Apellido").value;
  const edad = parseInt(document.getElementById("ejercicio9Edad").value);
  const ciudad = document.getElementById("ejercicio9Ciudad").value;
  const resultado = document.getElementById("ejercicio9Resultado");

  resultado.textContent = "Mi nombre es " + nombre + " " + apellido + " , tengo " + edad + " años. Nací en la ciudad de " + ciudad;
}

function func_ej10(){
    const num1 = parseInt(document.getElementById("ejercicio10Num1").value);
    const num2 = parseInt(document.getElementById("ejercicio10Num2").value);
    const resultado = document.getElementById("ejercicio10Resultado");
  
    if(num1 < num2){
      for(let i=num1+1; i < num2; i++){
          resultado.textContent = resultado.innerHTML + " | " + i;
        }
    }else{
      for(let i=num1+1; i < num1; i++){
        resultado.textContent = resultado.innerHTML + " | " + i;
      }
    }
}