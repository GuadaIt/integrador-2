
// Excelente trabajo, Guada. 
// Codigo muy claro y bien escrito. Excelente el uso de do while y los for anidados. Gran uso de variables. 

// Me parece un gesto muy lindo que me hayas dejado comentados los errores que encontraste, algo poco habitual
// y que como profe realmente se agradece. Tambien evidencia un gran control sobre tu codigo -
// no solo identificas correctamente que errores tenes, sino que podes identificar tambien el problema en el codigo
// Eso no es habitual a esta altura del aprendizaje, y es maravilloso que ya tengas esa capacidad. 
// Tambien muestra que pensas en tu codigo como un producto a entregar, que tiene que ser lo mas 
// claro posible para el usuario, y no solo como una serie de consignas a cumplir. Eso es buenisimo! 
// Intente en todos esos casos ser lo mas clara posible para que puedas entender como solucionar el problema, 
// pero si no se entiende no dejes de escribirme

// Quiero insistir en el enorme trabajo que es haber hecho este trabajo sola, un trabajo pensado para 
// ser hecho entre 4 personas, ya que la idea que no se le ocurre a una le puede surgir a una compañera. 
// Entiendo que sos perfeccionista y quiza te moleste no haber podido encontrar todas las soluciones vos, 
// pero de mi parte solo tengo admiracion por el enorme trabajo que hiciste y lo lejos que llegaste por tu cuenta. 

// Felicitaciones, y seguí así. 


const usuarios = [
  [0, "Carla", 1545628984, "carla@gmail.com"],
  [1, "Pedro", 1545251245, "pedro@gmail.com"],
  [2, "Lucas", 1523357849, "lucas@gmail.com"],
  [3, "Ana", 15789456, "ana@gmail.com"],
];
const respuestaAfirmativa = "Si";
const respuestaNegativa = "No";
let repeticionOperacion;

// Tu programa no muestra siempre el menu, por ejemplo si agrego un usuario, despues no me aparece el menu de opciones
// Eso es porque "salirDelPrograma" esta definida como variable vacia, y la ultima linea de codigo dice que el codigo
// se va a ejecutar repetidas veces solo mientras salirDelPrograma === respuestaNegativa. 
// Una solucion rapida es declarar inicialmente salirDelPrograma = "No"
// Si el usuario dice que quiere salir, tu codigo correctamente cambia esta variable a "Si"
// Y ahora si, el codigo se ejecuta bien
let salirDelPrograma = "";
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

  // excelente esto, para permitirle al usuario escribir en mayusculas o minusculas y que el codigo funcione
  operacionARealizar = operacionARealizar.toLowerCase();

  /*=================================== AGREGAR USUARIO ===============================*/

  do {
    if (operacionARealizar === "agregar") {
      let usuarioAAgregar = prompt("Ingrese el nombre del usuario")
      let telefonoUsuario = prompt("Ingrese el teléfono del usuario")
      // excelente esta coercion a Number, un detalle que se le escapó a la mayoría y que es importante
      // para mantener la coherencia de los datos ya escritos

      telefonoUsuario = Number(telefonoUsuario);
      let mailUsuario = prompt("Ingrese mail del usuario")
      let respuestaConfirmacion = prompt(`Ingresaste los siguientes datos:
      Nombre: ${usuarioAAgregar}
      Teléfono: ${telefonoUsuario}
      Mail: ${mailUsuario}
    
      ¿Desea confirmar la operación?`)

   // podriamos decir asi
   // if (respuestaConfirmacion.toUpperCase() === respuestaAfirmativa.toUpperCase())
   // y de esta manera el codigo funciona aunque el usuario escriba "Si", "si" o "SI"
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
  // misma observaciones que mas arriba en el if, aunque es solo un detalle
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

// Es excelente que no solo hayas detectado el problema, sino tambien la fuente del mismo en el codigo. 
// Y agradezco mucho que la hayas dejado comentada en el codigo, asi yo no pierdo tiempo buscando el error
// Es una practica que tus colegas van a agradecer :) 
// Se puede solucionar chequeando si el usuario esta buscando por ID o telefono, y solo en ese caso, convertir
// la busqueda a un numero
// Asi: 

// if (datoABuscar === "ID" || datoABuscar === "TELEFONO") {
//   valorDeDatoABuscar = Number(valorDeDatoABuscar)
// }


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

// Nuevamente, me parece genial que hayas encontrado la fuente del error y me la hayas dejado comentada en el codigo. 
// Encontrar la fuente de un error es la parte mas dificil - solucionarlo es algo que te va a venir con la practica. 
// Y dejar el error comentado para quien lee el codigo es una practica que se agradece muchisimo :) 
// Efectivamente, el problema es que el for hace la busqueda muchas veces, y siempre que el dato en cuestion
// no coincida con el dato que javascript esta viendo en ese momento, nos va a dar un alerta. 
// No queremos un alerta muchas veces - queremos el alerta una sola vez, asi que tiene que estar afuera del for. 
// La tarea del for va a ser mirar los datos y ver si alguno coincide con lo que escribio el usuario. 
// Como hace el for para decirnos si encontró el usuario, y decirnos los datos de ese usuario?
// La solucion es hacer una variable que llamamos "flag", bandera, que indica si encontramos el dato que necesitamos
// El for solo va a hacer la busqueda. Si encuentra el dato, nos avisa (cambia la "flag" a true) y guarda los datos
// de ese usuario en otra variable. 
// Despues, usamos esas variables para mostrarle al usuario los datos. 
// Te dejo el codigo, pero si no se entiende mi explicacion no dejes de escribirme. 
// El codigo quedaria asi:

// let usuarioEncontrado = false
// let datosDelUsuarioEncontrado = ""
// for (let i = 0; i < usuarios.length; i++) {
//   for (let j = 0; j < usuarios[i].length; j++) {
//     if (usuarios[i][j] === valorDeDatoABuscar) {
//       usuarioEncontrado = true;
//       datosDelUsuarioEncontrado = `Los datos del usuario son:
//       ID: ${usuarios[i][0]}
//       NOMBRE: ${usuarios[i][1]}
//       TELÉFONO: ${usuarios[i][2]}
//       EMAIL: ${usuarios[i][3]}`
//     }
//   }
// }
// if (usuarioEncontrado === true) {
//   alert(datosDelUsuarioEncontrado)
// }
// else {
//   alert("Usuario no encontrado")
// }




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


  // Creo que quiza en este caso te complicaste sola, porque estabas muy cerca de llegar a la respuesta correcta. 
  // De todos modos te lo habia dejado como opcional porque se que encontrarle la vuelta no es tan facil. 
  // En lugar de ir modificando los datos uno a uno, como creo que fue tu intencion (algo dificil de hacer en un for)
  // Podiamos crear un nuevo array para el usuario, y reemplazar todo el array que ya estaba
  // El codigo del if quedaria asi

  // if (usuarios[i][j] === usuarioAModificar) {
  //   let nuevoNombre = prompt(`Ingrese un nuevo nombre`)
  //   let nuevoTelefono = prompt(`Ingrese un nuevo teléfono`)
  //   let nuevoEmail = prompt(`Ingrese un nuevo email`)
  //   let nuevoUsuario = [usuarios[i][0], nuevoNombre, nuevoTelefono, nuevoEmail]
  //   usuarios[i] = nuevoUsuario;
  // }
  // Avisame si no se entiende lo que hice. El primer campo es el del id, que dejo igual a como estaba. 

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

// La solucion al comentario que me dejas mas arriba deberia ser similar a la del "flag" que te comente antes. 
// Una variable afuera del for, que empieza el false, y que solo se convierte en true si encontramos al usuario
// Una vez afuera del for, si esa variable sigue en false, le podemos mostrar al usuario un alerta que diga 
// que no existe el usuario en cuestion. 
// De todos modos haber mencionado esto solo te suma puntos, porque no era un requerimiento de las consignas
// Y demuestra tus ganas de hacer un buen codigo, pensando en el usuario final, y no solo en lo que te pedimos los profes :D 
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
