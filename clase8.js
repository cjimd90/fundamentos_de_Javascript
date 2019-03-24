var cristian = {
  nombre: 'Cristian',
  apellido: 'Jimenez',
  edad: 28
}

var manuel = {
  nombre: 'Manuel',
  apellido: 'Jimenez',
  edad: 46
}
function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())

}

function imprimirNombreYEdad(persona ) {
  var {nombre, edad} = persona
  console.log(`Hola, me llamo ${ nombre } y tengo ${ edad } años`)
}

function cumpleaños (persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
  persona.edad += 1
}



// imprimirNombreYEdad(cristian)
imprimirNombreEnMayusculas(cristian)
imprimirNombreEnMayusculas(manuel)
// imprimirNombreEnMayusculas( {nombre: 'Pepito'} )
// imprimirNombreEnMayusculas( { apellido: 'Jerez' } )
