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
let listaDeUsuarios = ``;

do {

  let operacionARealizar = prompt(`¿Qué operación desea realizar?
  - [AGREGAR] un usuario
  - [OBTENER] un usuario
  - [LISTAR] usuarios
  - [MODIFICAR] un usuario
  - [ELIMINAR] un usuario
  - [SALIR] del programa
  `);

  operacionARealizar = operacionARealizar.toLowerCase();

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

            /////////////////////// ERROR: se ejecuta el loop 4 veces. Por ende, si el usuario que busco tiene índice 2, primero veré 2 alertas
            ////////////////////// de usuario no encontrado y luego si, el alert con los datos.
          } else {
            alert("Usuario no encontrado");
          }
        }
      }
      repeticionOperacion = prompt("¿Desea realizar la operación nuevamente?")
    }
  }
  while (repeticionOperacion === respuestaAfirmativa);

  /*=================================== LISTAR USUARIOS ===============================*/

  if (operacionARealizar === "listar") {
    for (let i = 0; i < usuarios.length; i++) {
      listaDeUsuarios += `
      ID: ${usuarios[i][0]} 
      NOMBRE: ${usuarios[i][1]} 
      TELÉFONO: ${usuarios[i][2]} 
      EMAIL: ${usuarios[i][3]}
      ---------------------------`;
    }
    alert(listaDeUsuarios);
  }

  /*=================================== MODIFICAR USUARIO ===============================*/

  do {
    if (operacionARealizar === "modificar") {
      let usuarioAModificar = prompt("Indique el ID del usuario que desea modificar");
      usuarioAModificar = Number(usuarioAModificar);

      for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].length; j++) {

          if (usuarios[i][j] === usuarioAModificar) {
            let nuevoNombre = prompt(`Ingrese un nuevo nombre`)
            let nuevoTelefono = prompt(`Ingrese un nuevo teléfono`)
            let nuevoEmail = prompt(`Ingrese un nuevo email`)
            usuarios[i][j] = nuevoNombre;
            console.log(usuarios)
          }

        }
      }
    }
  } while (repeticionOperacion === respuestaAfirmativa);
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
          ///////////////acá tenía intenciones de agregar un alert en caso de que se ingresen datos incorrectos o que no correspondan 
          ////////////// a ningun usuario. Pero si lo hago el alert aparece por cada vuelta del for que no se encontro al usuario
          ////////////// en cuestion y siguen apareciendo hasta que damos con los datos que buscamos
        }
      }
      repeticionOperacion = prompt("¿Desea realizar la operación nuevamente?");
    }
  }
  while (repeticionOperacion === respuestaAfirmativa);

  /*=================================== SALIR DEL PROGRAMA ===============================*/

  if (operacionARealizar === "salir") {
    salirDelPrograma = prompt(`¿Desea abandonar el programa?`);

    if (salirDelPrograma === respuestaAfirmativa) {
      alert(`Hasta la vista, baby`);
    }
  }

  //Sí es requerido que si se ingresa una opción incorrecta (cuando tengamos que hacerlo) el programa nos avise del hecho, 
  //y tome una acción por default (por ejemplo, volver al menú) 

} while (salirDelPrograma === respuestaNegativa)