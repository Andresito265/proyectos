function onClickAceptar(){
    var txtEmpleado = document.getElementById("txtEmpleado");
    console.log("txtEmpleado -> ", txtEmpleado);
    console.log(txtEmpleado.value);
}

function onClickBorrar(){
    document.getElementById("txtEmpleado").value = "";
}