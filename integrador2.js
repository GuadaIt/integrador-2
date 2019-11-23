const usuarios = [
  [0, "Carla", 1545628984, "carla@gmail.com"],
  [1, "Pedro", 1545251245, "pedro@gmail.com"],
  [2, "Lucas", 1523357849, "lucas@gmail.com"],
  [3, "Ana", 15789456, "ana@gmail.com"],
];
const respuestaAfirmativa = "Si";
const respuestaNegativa = "No";
let repeticionOperacion;

//while (respuestaOperación != "salir") {

let operacionARealizar = prompt(`¿Qué operación desea realizar?`);

/*=================================== AGREGAR USUARIO ===============================*/

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
    alert("Operación realizado con éxito")
  }
  else {
    alert("La operación ha sido cancelada")
  }
  repeticionOperacion = prompt("¿Desea realizar la operación nuevamente?")
}

/*=================================== OBTENER USUARIO ===============================*/

while (repeticionOperacion != respuestaNegativa) {
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
        }
        else {
          alert("Usuario no encontrado")
        }
      }
    }
  }
  repeticionOperacion = prompt("¿Desea realizar la operación nuevamente?")
}

/*🔎 Buscar un usuario
 Debe pedir seleccionar por qué dato se va a buscar: id, nombre, celular o email
 A continuación debe pedir ingresar el valor que se va a buscar
 Si el usuario existe debe mostrar la información del usuario con todos sus datos
 Si el usuario no existe debe mostrar un mensaje informándolo
 A continuación debe pedir si se desea realizar nuevamente el procedimiento
 Si la respuesta es afirmativa debe volver a realizar el procedimiento
 Si la respuesta es negativa debe llevar al menú de operaciones
*/

/*=================================== LISTAR USUARIOS ===============================*/

if (operacionARealizar === "listar") {
  
  for (let i = 0; i < usuarios.length; i++) {
    for (let j = 0; j < usuarios[i].length; j++) {
      console.log(usuarios[i][j])
      alert(`
      ID: ${usuarios[i][0]}
      NOMBRE: ${usuarios[i][1]}
      TELÉFONO: ${usuarios[i][2]}
      EMAIL: ${usuarios[i][3]}`)
    }
    
  }
  
}
/*Listar todos los usuarios
  Debe mostrar un listado con todos los usuarios y todos sus datos:
  Id
  Nombre
  Teléfono
  Email
  Luego debe llevar al menú de operaciones
*/

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

/*Eliminar un usuario
  Debe pedir ingresar el id del usuario a eliminar
  Si el usuario existe debe mostrar los datos del usuario y preguntar si desea confirmar la operación
  Si la respuesta es afirmativa debe eliminar el usuario de la lista de usuarios y mostrar un mensaje de éxito
  Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
  A continuación debe pedir si se desea realizar nuevamente el procedimiento
  Si la respuesta es afirmativa debe volver a realizar el procedimiento
  Si la respuesta es negativa debe llevar al menú de operaciones
*/

/*=================================== SALIR DEL PROGRAMA ===============================*/

/*Debe preguntar si desea confirmar la operación
  Si la respuesta es afirmativa debe mostrar un mensaje de despedida y salir del programa
  Si la respuesta es negativa debe volver al menú de operaciones
*/




//Sí es requerido que si se ingresa una opción incorrecta (cuando tengamos que hacerlo) el programa nos avise del hecho, 
//y tome una acción por default (por ejemplo, volver al menú) 




//}