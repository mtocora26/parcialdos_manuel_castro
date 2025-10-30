class Empleado {
  //atributos

  //Constructor

  //contructor vacío - En la nueva versión no es necesario...
  //constructor(){}

  constructor(
    cc,
    nombresyApellidos,
    direccion,
    email,
    telefono,
    sueldoBase,
    tipoEmpleado,
    tipoBonificacion
  ) {
    this.cc = cc;
    this.nombresyApellidos = nombresyApellidos;
    this.direccion = direccion;
    this.email = email;
    this.telefono = telefono;
    this.sueldoBase = sueldoBase;
    this.tipoEmpleado = tipoEmpleado;
    this.tipoBonificacion = tipoBonificacion;
  }

  //Métodos
  obtenerAdicion() {
    switch (this.tipoBonificacion) {
      case "A":
        return 200000;
      case "B":
        return 150000;
      case "C":
        return 100000;
      case "D":
        return 50000;
      default:
        return 0;
    }
  }

  obtenerSueldoTotal(){
	return Number(this.sueldoBase) + Number(this.obtenerAdicion());
  }
}
