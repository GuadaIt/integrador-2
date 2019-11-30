const usuarios = [
  [0, "Carla", 1545628984, "carla@gmail.com"],
  [1, "Pedro", 1545251245, "pedro@gmail.com"],
  [2, "Lucas", 1523357849, "lucas@gmail.com"],
  [3, "Ana", 15789456, "ana@gmail.com"],
];
const respuestaAfirmativa = "si";
const respuestaNegativa = "no";
let repeticionOperacion;
let confirmacionOperacion;
let salirDelPrograma = respuestaNegativa;
let usuarioEncontrado = false;
let datosUsuarioEncontrado = "";
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

      if (respuestaConfirmacion.toLowerCase() === respuestaAfirmativa) {
        let datosUsuarioAAgregar = [usuarios.length, usuarioAAgregar, telefonoUsuario, mailUsuario]
        usuarios.push(datosUsuarioAAgregar)
        alert("Operación realizada con éxito")
      }
      else {
        alert("La operación ha sido cancelada")
      }
      repeticionOperacion = prompt("¿Desea realizar la operación nuevamente?")
      repeticionOperacion = Number(repeticionOperacion)
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

      if (datoABuscar.toUpperCase() === "ID" || datoABuscar.toUpperCase() === "TELEFONO") {
        valorDeDatoABuscar = Number(valorDeDatoABuscar);
      }

      for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].length; j++) {

          if (usuarios[i][j] === valorDeDatoABuscar) {
            usuarioEncontrado = true;
            datosUsuarioEncontrado = `Los datos del usuario son:
            ID: ${usuarios[i][0]}
            NOMBRE: ${usuarios[i][1]}
            TELÉFONO: ${usuarios[i][2]}
            EMAIL: ${usuarios[i][3]}`

          }
        }
      }
      if (usuarioEncontrado === true) {
        alert(datosUsuarioEncontrado)
      } else {
        alert(`Usuario no encontrado`)
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
            usuarioEncontrado = true;
            let nuevoNombre = prompt(`Ingrese un nuevo nombre`)
            let nuevoTelefono = prompt(`Ingrese un nuevo teléfono`)
            nuevoTelefono = Number(nuevoTelefono)
            let nuevoEmail = prompt(`Ingrese un nuevo email`)

            confirmacionOperacion = prompt(`Datos ingresados:
            Nombre: ${nuevoNombre}
            Teléfono: ${nuevoTelefono}
            Email: ${nuevoEmail}
            
            ¿Desea confirmar la operación?`)

            if (confirmacionOperacion.toLowerCase() === respuestaAfirmativa) {
              let nuevoUsuario = [usuarios[i][0], nuevoNombre, nuevoTelefono, nuevoEmail]
              usuarios[i] = nuevoUsuario;
              alert(`Operación realizada con éxito`)
            } else {
              alert(`La operación ha sido cancelada`)
            }
          }
        }
      }
      if (usuarioEncontrado === false) {
        alert(`Usuario no encontrado`)
      }
      repeticionOperacion = prompt(`¿Desea realizar la operación nuevamente?`)
    }
  } while (repeticionOperacion === respuestaAfirmativa);
  
  /*=================================== ELIMINAR USUARIO ===============================*/

  do {
    if (operacionARealizar === "eliminar") {
      let usuarioAEliminar = prompt("Indique el ID del usuario que desea eliminar");
      usuarioAEliminar = Number(usuarioAEliminar);

      for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].length; j++) {
          
          if (usuarios[i][j] === usuarioAEliminar) {
            usuarioEncontrado = true;
            confirmacionOperacion = prompt(`
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
      if (usuarioEncontrado === false) {
        alert(`Usuario no encontrado`)
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

} while (salirDelPrograma === respuestaNegativa)

//Faltaría agregar que el programa le avise al usuario si ingresa alguna opcion incorrecta y poner como default que vuelva al menu principal