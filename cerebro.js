function onClickAceptar(){
    var txtEmpleado = document.getElementById("txtEmpleado");
    newFunction();
    console.log(txtEmpleado.value);

    function newFunction() {
        console.log("txtEmpleado -> ", txtEmpleado);
    }
}

function onClickBorrar(){
    document.getElementById("txtEmpleado").value = "";
}