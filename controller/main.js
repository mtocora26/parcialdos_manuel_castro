//Controlador principal
//Funciones

//CRUD (Create, Read, Update, Delete)
//Función Agregar Empleado (C - Crear)
function crearEmpleado(){

	document.getElementById('divAgregarEmpleado').style.display='block';
	//alert("Entró a crear Empleado");
}

function agregarEmpleado(){
    // Manejar envío del formulario
    
      event.preventDefault();

      const empleado = new Empleado(
        document.getElementById('cc').value,
        document.getElementById('nombresyApellidos').value,
        document.getElementById('direccion').value,
        document.getElementById('email').value,
        document.getElementById('telefono').value,
        document.getElementById('sueldoBase').value,
        document.getElementById('tipoEmpleado').value,
        document.getElementById('tipoBonificacion').value
      );
        // Validación básica para evitar empleados vacíos
  if (!cc || !nombresyApellidos || !direccion || !email || !telefono || !sueldoBase || !tipoEmpleado || !tipoBonificacion) {
    alert("Por favor, complete todos los campos.");
    return;
  }

      // Obtener lista existente o crear nueva
      let empleados = JSON.parse(localStorage.getItem('empleados')) || [];

      // Agregar nuevo empleado
      empleados.push(empleado);

      // Guardar nuevamente
      localStorage.setItem('empleados', JSON.stringify(empleados));
      // Actualizar tabla
      mostrarEmpleados();
      // Limpiar formulario
    document.getElementById('formEmpleado').reset();
    document.getElementById('divAgregarEmpleado').style.display = 'none';
}

function hallarTotalNomina() {
  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
  let total = 0;
  empleados.forEach(emp => {
    const empleadoObj = new Empleado(
      emp.cc,
      emp.nombresyApellidos,
      emp.direccion,
      emp.email,
      emp.telefono,
      emp.sueldoBase,
      emp.tipoEmpleado,
      emp.tipoBonificacion
    );
    total += empleadoObj.obtenerSueldoTotal();
  });
  return total;
}
    // Mostrar empleados en tabla
    function mostrarEmpleados() {
      const tbody = document.querySelector('#tablaEmpleados tbody');
      tbody.innerHTML = '';

      const empleados = JSON.parse(localStorage.getItem('empleados')) || [];

      empleados.forEach((emp,index) => {

      const empleadoObj = new Empleado(
      emp.cc,
      emp.nombresyApellidos,
      emp.direccion,
      emp.email,
      emp.telefono,
      emp.sueldoBase,
      emp.tipoEmpleado,
      emp.tipoBonificacion
    );
    const sueldoTotal = empleadoObj.obtenerSueldoTotal();

        const fila = `<tr>
          <td>${index + 1}</td> <!-- Aquí se genera el número autoincremento con el index del array -->
          <td>${emp.cc}</td>
          <td>${emp.nombresyApellidos}</td>
          <td>${emp.direccion}</td>
          <td>${emp.email}</td>
          <td>${emp.telefono}</td>
          <td>${emp.sueldoBase}</td>
          <td>${emp.tipoEmpleado}</td>
          <td>${emp.tipoBonificacion}</td>
          <td>${sueldoTotal}</td>
        </tr>`;
        tbody.innerHTML += fila;
      });
      document.getElementById('totalNomina').textContent = "Total Nómina: $" + hallarTotalNomina();
}

	// Cargar empleados guardados al iniciar
    document.addEventListener("DOMContentLoaded", mostrarEmpleados);
    

