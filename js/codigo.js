// Obtener el arreglo de citas del localStorage
var citas = JSON.parse(localStorage.getItem('citas')) || [];

// Definir la clase Cita
class Cita {
  constructor(fecha, nombre, apellidos, dni, email, telefono, fechaNacimiento, observaciones) {
    this.fecha = fecha;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.email = email;
    this.telefono = telefono;
    this.fechaNacimiento = fechaNacimiento;
    this.observaciones = observaciones;
  }
}

function validarEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validarTelefono(telefono) {
  var re = /^[0-9()+\- ]+$/;
  return re.test(telefono);
}

function validarDNI(dni) {
  var re = /^[0-9]{8}[A-Za-z]$/;
  return re.test(dni);
}

function validarFecha(fechaNacimiento) {
  var re = /^\d{4}-\d{2}-\d{2}$/;
  return re.test(fechaNacimiento);
}

function validarFormulario() {
  var fecha = document.getElementById('fecha').value;
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value;
  var dni = document.getElementById('dni').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;
  var fechaNacimiento = document.getElementById('fechaNacimiento').value;
  var observaciones = document.getElementById('observaciones').value;


  if (!fecha) {
    alert("Por favor, ingresa tu fecha cita.");
  } else if (!nombre) {
    alert("Por favor, ingresa tu nombre.");
  } else if (!apellidos) {
    alert("Por favor, ingresa tus apellidos.");
   } else if (!validarDNI(dni)) {
    alert("Por favor, ingresa un DNI válido.");
  } else if (!validarEmail(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
  } else if (!validarTelefono(telefono)) {
    alert("Por favor, ingresa un número de teléfono válido.");
  } else if (!validarFecha(fechaNacimiento)) {
    alert("Por favor, ingresa una fecha de nacimiento válida en formato YYYY-MM-DD.");
  } else {
    // Almacenar la cita si la validación es exitosa
    almacenarCitaTemporal(fecha, nombre, apellidos, dni, email, telefono, fechaNacimiento, observaciones);
    alert("Formulario válido. Cita almacenada.");
  }

  // Devolver false para evitar que el formulario se envíe de forma predeterminada
  return false;
}

function almacenarCitaTemporal(fecha, nombre, apellidos, dni, email, telefono, fechaNacimiento, observaciones, index) {
  // Si se proporciona el índice, significa que se está modificando una cita existente
  if (index !== undefined && index !== null) {
    // Reemplazar la cita existente en el array
    citas[index] = new Cita(fecha, nombre, apellidos, dni, email, telefono, fechaNacimiento, observaciones);
  } else {
    // Crear un objeto de tipo Cita con los datos
    var cita = new Cita(fecha, nombre, apellidos, dni, email, telefono, fechaNacimiento, observaciones);

    // Agregar la nueva cita al arreglo de citas
    citas.push(cita);
  }

  // Mostrar el contenido de citas en la consola (para verificar que se están guardando las citas)
  console.log(citas);

  // Almacenar temporalmente la cita en localStorage
  localStorage.setItem('citas', JSON.stringify(citas));

  // Redirigir a la segunda página
  window.location.href = 'citas.html';

}

