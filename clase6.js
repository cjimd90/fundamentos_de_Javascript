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
function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())

}

imprimirNombreEnMayusculas(cristian)
imprimirNombreEnMayusculas(manuel)
imprimirNombreEnMayusculas( {nombre: 'Pepito'} )
imprimirNombreEnMayusculas( { apellido: 'Jerez' } )
