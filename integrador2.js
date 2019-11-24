const usuarios = [
  [0, "Carla", 1545628984, "carla@gmail.com"],
  [1, "Pedro", 1545251245, "pedro@gmail.com"],
  [2, "Lucas", 1523357849, "lucas@gmail.com"],
  [3, "Ana", 15789456, "ana@gmail.com"],
];
const respuestaAfirmativa = "Si";
const respuestaNegativa = "No";
let repeticionOperacion;
let salirDelPrograma;

do {

  let operacionARealizar = prompt(`¿Qué operación desea realizar?`);

  /*=================================== AGREGAR USUARIO ===============================*/

  do {
    if (operacionARealizar === "agregar") {
      let usuarioAAgregar = prompt("Ingrese el nombre del usuario")
      let telefonoUsuario = prompt("Ingrese el teléfono del usuario")
      telefonoUsuario = Number(telefonoUsuario);
      let mailUsuario = prompt("Ingrese mail del usuario")
      let respuestaConfirmacion = prompt(`Ingresaste los siguientes datos:
    Nombre: ${usuarioAAgregar}
    Teléfono: ${telefonoUsuario}
    Mail: ${mailUsuario}
    
    ¿Desea confirmar la operación?`)

      if (respuestaConfirmacion === respuestaAfirmativa) {
        let datosUsuarioAAgregar = [usuarios.length, usuarioAAgregar, telefonoUsuario, mailUsuario]
        usuarios.push(datosUsuarioAAgregar)
        alert("Operación realizada con éxito")
      }
      else {
        alert("La operación ha sido cancelada")
      }
      repeticionOperacion = prompt("¿Desea realizar la operación nuevamente?")
    }
  }
  while (repeticionOperacion === respuestaAfirmativa);

  /*=================================== OBTENER USUARIO ===============================*/

  do {
    if (operacionARealizar === "obtener") {
      let datoABuscar = prompt(`Seleccione una opción de búsqueda:
    ID
    NOMBRE
    TELEFONO
    EMAIL`)
      let valorDeDatoABuscar = prompt(`Ingrese el valor de ${datoABuscar}`);

      //acá hay un problema si el usuario ingresa un numero para realizar la búsqueda porque se guarda como string 

      for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].length; j++) {

          if (usuarios[i][j] === valorDeDatoABuscar) {
            alert(`Los datos del usuario son:
          ID: ${usuarios[i][0]}
          NOMBRE: ${usuarios[i][1]}
          TELÉFONO: ${usuarios[i][2]}
          EMAIL: ${usuarios[i][3]}`)
            break;
          }
          /////////////////////// ERROR: se ejecuta el loop 4 veces. Por ende, si el usuario que busco tiene índice 2, primero veré 2 alertas
          ////////////////////// de usuario no encontrado y luego si, el alert con los datos.
          else {
            alert("Usuario no encontrado")
          }
        }
      }
      repeticionOperacion = prompt("¿Desea realizar la operación nuevamente?")
    }
  }
  while (repeticionOperacion === respuestaAfirmativa);

  /*=================================== LISTAR USUARIOS ===============================*/

  if (operacionARealizar === "listar") {

    alert(`
  ID: ${usuarios[0][0]}
  NOMBRE: ${usuarios[0][1]}
  TELEFONO: ${usuarios[0][2]}
  EMAIL: ${usuarios[0][3]}
  ----------------------
  ID: ${usuarios[1][0]}
  NOMBRE: ${usuarios[1][1]}
  TELEFONO: ${usuarios[1][2]}
  EMAIL: ${usuarios[1][3]}
  ----------------------
  ID: ${usuarios[2][0]}
  NOMBRE: ${usuarios[2][1]}
  TELEFONO: ${usuarios[2][2]}
  EMAIL: ${usuarios[2][3]}
  ----------------------
  ID: ${usuarios[3][0]}
  NOMBRE: ${usuarios[3][1]}
  TELEFONO: ${usuarios[3][2]}
  EMAIL: ${usuarios[3][3]}
  `)
  }

  /*=================================== MODIFICAR USUARIO ===============================*/

  /*Modificar un usuario
    Debe pedir ingresar el id del usuario a modificar
    Si el usuario existe debe pedir ingresar uno por uno los datos a modificar del usuario:
    Nombre
    Teléfono
    Email
    Luego debe mostrar los datos ingresados y preguntar si desea confirmar la operación
    Si la respuesta es afirmativa debe modificar los datos del usuario con los nuevos ingresados y mostrar un mensaje de éxito
    Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
    Si el usuario no existe debe mostrar un mensaje informándolo
    A continuación debe pedir si se desea realizar nuevamente el procedimiento
    Si la respuesta es afirmativa debe volver a realizar el procedimiento
    Si la respuesta es negativa debe llevar al menú de operaciones
  */

  /*=================================== ELIMINAR USUARIO ===============================*/

  do {
    if (operacionARealizar === "eliminar") {
      let usuarioAEliminar = prompt("Indique el ID del usuario que desea eliminar");
      usuarioAEliminar = Number(usuarioAEliminar);

      for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].length; j++) {
          if (usuarios[i][j] === usuarioAEliminar) {
            let confirmacionOperacion = prompt(`
          ID: ${usuarios[i][0]}
          NOMBRE: ${usuarios[i][1]}
          TELÉFONO: ${usuarios[i][2]}
          EMAIL: ${usuarios[i][3]}
        
          ¿Desea confirmar la operación?`);
            if (confirmacionOperacion === respuestaAfirmativa) {
              usuarios.splice(i, 1);
              alert(`Se ha eliminado al usuario con ID ${usuarioAEliminar}`);
              break;
            }
            else {
              alert(`La operación ha sido cancelada`)
            }
          }
        }
      }
      repeticionOperacion = prompt("¿Desea realizar la operación nuevamente?");
    }
  }
  while (repeticionOperacion === respuestaAfirmativa);

  /*=================================== SALIR DEL PROGRAMA ===============================*/

  salirDelPrograma = prompt(`¿Desea abandonar el programa?`);

  /*Debe preguntar si desea confirmar la operación
    Si la respuesta es afirmativa debe mostrar un mensaje de despedida y salir del programa
    Si la respuesta es negativa debe volver al menú de operaciones
  */




  //Sí es requerido que si se ingresa una opción incorrecta (cuando tengamos que hacerlo) el programa nos avise del hecho, 
  //y tome una acción por default (por ejemplo, volver al menú) 

}
while (salirDelPrograma != respuestaAfirmativa)