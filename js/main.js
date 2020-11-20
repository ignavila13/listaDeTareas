var contador = 0;
function crearTarea(){
    
    var inputAgregarTarea = document.getElementById("inputTarea");

    if(inputAgregarTarea.value != ""){

        var listaTareas = document.getElementById("listaTareas");
    
        //creo los elementos
        var divTarea = document.createElement("div");
        var inputTarea = document.createElement("input");
        var check = document.createElement("input");
        var btnEliminar = document.createElement("button");
        
        //accedo a los atributos del divTarea
        divTarea.setAttribute("class", "tarea-"+contador);
        divTarea.setAttribute("id", "tarea-"+contador);

        //accedo a los atributos del input
        inputTarea.value = document.getElementById("inputTarea").value;
        inputTarea.className = "tareaPendiente tareaPendiente-"+contador;
        inputTarea.id = "tareaPendiente-"+contador;
        inputTarea.disabled = false;
        
        //accedo a los atributos del checkbox
        check.type = "checkbox";
        check.className = "checkTarea checkTarea-"+contador;
        check.id = "checkTarea checkTarea-"+contador;
        check.name = "checkTarea checkTarea-"+contador;
        check.setAttribute("onchange", "estadoTarea(this);");
        
        //accedo a los atributos del boton eliminar
        btnEliminar.type = "button";
        btnEliminar.innerText = "Eliminar";
        btnEliminar.className = "btnEliminar btnEliminar-"+contador;
        btnEliminar.id = "btnEliminar-"+contador;
        btnEliminar.name = "btnEliminar-"+contador;
        btnEliminar.setAttribute("onclick", "eliminarTarea(this)");

    
        listaTareas.appendChild(divTarea); //envio el divTarea al div listaTareas
        //envio los elementos al divTarea, de manera que cada componente se cree en un div separado 
        divTarea.appendChild(check);
        divTarea.appendChild(inputTarea);
        divTarea.appendChild(btnEliminar);
        
        inputAgregarTarea.value = ""; 
        contador++;
    } else{
        alert("Ingrese al menos una tarea!");
    }
    
}


function eliminarTarea(btnTarea){
    //alert(idbtnTarea);
    var idbtnTarea = btnTarea.id;
    //alert(idbtnTarea);
    var cortar = idbtnTarea.split("btnEliminar-");//split divide en un arreglo una cadena separando hasta donde le diga
    idbtnTarea = cortar[1]; //me interesa el numero de tarea que quiero eliminar
    //alert(idbtnTarea);
    listaTareas = document.getElementById("listaTareas"); //obtengo el div que engloba las tareas
    divTarea = document.getElementById("tarea-"+idbtnTarea); //obtengo el especificamente el div que quiero eliminar
    listaTareas.removeChild(divTarea);


}

function estadoTarea(checkMarcado){
    var idCheckMarcado = checkMarcado.id;
    
    if(checkMarcado.checked == true){
        var cortar = idCheckMarcado.split("checkTarea-");
        idCheckMarcado = cortar[1];
        inputTarea = document.getElementById("tareaPendiente-"+idCheckMarcado);
        inputTarea.disabled = true;
    } else{
        inputTarea.disabled = false;
    }

}




