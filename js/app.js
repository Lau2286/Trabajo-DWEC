<script>
document.querySelector("input [class=form_cta]").addEventListener("click",function(e)){
    e.preventDefault();
    var nombre=document.querySelector("input[name=nombre]");
    var dni=document.querySelector("input[name=dni]");
    var tr=document.createElement("tr");
 
    var tdNombre=document.createElement("td");
    var txt=document.createTextNode(nombre.value);
    tdNombre.appendChild(txt);
    tdNombre.className="nombre";


}



</script>


