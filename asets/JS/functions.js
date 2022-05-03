
function func_ej1(){
    let ej1_c1 = parseFloat (document.getElementById("ej1_c1").value);
    let ej1_c2 = parseFloat (document.getElementById("ej1_c2").value);
    let ej1_c3 = parseFloat (document.getElementById("ej1_c3").value);

    if ((ej1_c1>ej1_c2) && (ej1_c1>ej1_c3)){
    document.getElementById("ej1_resultado").value = "El valor mayor es C1"
    }
    if ((ej1_c2>ej1_c1) && (ej1_c2>ej1_c1)){
    document.getElementById("ej1_resultado").value = "El valor mayor es C2"
    }
    if ((ej1_c3>ej1_c1) && (ej1_c3>ej1_c2)){
    document.getElementById("ej1_resultado").value = "El valor mayor es C3"
    }
}

function func_ej2(){
    let ej2_c1 = parseFloat (document.getElementById("ej2_c1").value);
    let ej2_c2 = parseFloat (document.getElementById("ej2_c2").value);

    let ej2_suma= ej2_c1 + ej2_c2
    document.getElementById("ej2_resultado").value = ej2_suma;
}

function func_ej3(){
    let ej3_c1 = document.getElementById("ej3_c1").value;
    let ej3_c2 = parseFloat (document.getElementById("ej3_c2").value);
    let ej3_resultado = ""
 
    for (let index= 0; index < ej3_c2; index++) {
        ej3_resultado= ej3_resultado + ej3_c1 + "-"

    }
    document.getElementById("ej3_resultado").value = ej3_resultado
}

function func_ej4() {
    let ej4_c1=document.getElementById("ej4_c1").value
  

    let ej4_resultado = 1.8 * ej4_c1 + 32 
    document.getElementById("ej4_resultado").value = ej4_resultado 
}

function func_ej5() {
  
    let ej5_c1 = document.getElementById("ej5_c1").value;
    

    let resultado_ej5 = ej5_c1.length;
      document.getElementById("ej5_resultado").value = resultado_ej5;      
}

function func_ej6() {
           
    let ej6_c1 =document.getElementById("ej6_c1").value

  if (ej6_c1 % 2 == 0) {
        document.getElementById("ej6_resultado").value = "El número " + ej6_c1 + " es Par";
    } else {
        document.getElementById("ej6_resultado").value = "El número " + ej6_c1 + " no es Par";
    }
    
}

function func_ej7() {
  
    let ej7_c1 = document.getElementById('ej7_c1').value * 1;
    let ej7_c2 = document.getElementById('ej7_c2').value * 1;
    ej7_resultado = ""
    let mayor, menor;

    if (ej7_c1 > ej7_c2) {
            mayor = ej7_c1;
            menor = ej7_c2;
        } else {
            mayor = ej7_c2;
            menor = ej7_c1;
        }
        while (menor <= mayor) {
            let calculo = menor % 3;
            if (calculo === 0) {
                ej7_resultado = ej7_resultado + ' | ' + menor;
            }
            menor++;
    }
}

function func_ej9() {
        let ej9_c1=document.getElementById("ej9_c1").value;
        let ej9_c2=parseFloat(document.getElementById("ej9_c2").value);
        let ej9_c3=document.getElementById("ej9_c3").value;
    
        document.getElementById("ej9_resultado").value = "Mi nombre es " + ej9_c1 + ", tengo " + ej9_c2 + " años. Nací en la ciudad de " + ej9_c3 + "."; 

}

function func_ej10 () {
  
    let ej10_c1= parseFloat(document.getElementById("ej10_c1").value);
    let ej10_c2= parseFloat(document.getElementById("ej10_c2").value);
    let ej10_resultado= ""

if (ej10_c1>ej10_c2){
    for(i=ej10_c2 + 1; i < ej10_c1; i ++){
        ej10_resultado= ej10_resultado + i + "-"
    }
}else{
    for(i=ej10_c1 + 1; i < ej10_c2; i++){
        ej10_resultado= ej10_resultado + i + "-"
    }

}
document.getElementById("ej10_resultado").value = ej10_resultado;
}