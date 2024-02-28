// Obtener el arreglo de citas del localStorage
var citas = JSON.parse(localStorage.getItem('citas')) || [];

// Obtener la referencia a la tabla en el HTML
var tablaCitas = document.getElementById('tablaCitas');

// Iterar sobre cada cita y agregar una fila a la tabla
citas.forEach(function (cita, index) {
  var fila = tablaCitas.insertRow();

  fila.innerHTML = `
  <td>${cita.fecha}</td>
  <td>${cita.nombre}</td>
  <td>${cita.apellidos}</td>
  <td>${cita.dni}</td>
  <td>${cita.email}</td>
  <td>${cita.telefono}</td>
  <td>${cita.fechaNacimiento}</td>
  <td>${cita.observaciones}</td>
  <td>
    <button onclick="eliminarCita(${index})">Eliminar</button>
    <button onclick="modificarCita(${index})">Modificar</button>
  </td>
`;
});
// Función para eliminar una cita
function eliminarCita(index) {
  citas.splice(index, 1);
  localStorage.setItem('citas', JSON.stringify(citas));
  location.reload(); 
}

function modificarCita(index) {
  // Obtener la cita que queremos modificar
  var citaAModificar = citas[index];

  // Construir la URL con los parámetros
  var queryParams = new URLSearchParams({
    'index': index,
    'fecha': citaAModificar.fecha,
    'nombre': citaAModificar.nombre,
    'apellidos': citaAModificar.apellidos,
    'dni': citaAModificar.dni,
    'email': citaAModificar.email,
    'telefono': citaAModificar.telefono,
    'fechaNacimiento': citaAModificar.fechaNacimiento,
    'observaciones': citaAModificar.observaciones
  });
  
  // Redirigir al formulario con los datos de la cita a modificar
  window.location.href = 'formulario.html?' + queryParams.toString();
}
