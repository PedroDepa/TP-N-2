
function func_ej1 (){
    let ej1_c1 = parseFloat (document.getElementById("ej1_c1").value);
    let ej1_c2 = parseFloat (document.getElementById("ej1_c2").value);
    let ej1_c3 = parseFloat (document.getElementById("ej1_c3").value);

    if ((ej1_c1>ej1_c2) && (ej1_c1>ej1_c3))
    document.getElementById("ej1_resultado").value = "El valor mayor es C1"
    if ((ej1_c2>ej1_c1) && (ej1_c2>ej1_c1))
    document.getElementById("ej1_resultado").value = "El valor mayor es C2"
    if ((ej1_c3>ej1_c1) && (ej1_c3>ej1_c2))
    document.getElementById("ej1_resultado").value = "El valor mayor es C3"
}

