var cristian = {
  nombre: 'Cristian',
  apellido: 'Jimenez',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

// function imprimirProfesiones(persona) {
//   console.log(`${persona.nombre} es:`)
//
//   if (persona.ingeniero === true) {
//     console.log('Ingeniero')
//   } else {
//     console.log('No es Ingeniero')
//   }
//
//   if (persona.cocinero === true) {
//     console.log('Cocinero')
//   } else {
//     console.log('No es Cocinero')
//
//   if (persona.cantante === true) {
//     console.log('Cantante')
//   } else {
//     console.log('No es Cantante')
//
//   if (persona.dj === true) {
//     console.log('Dj')
//   } else {
//     console.log('No es Dj')
//
//   if (persona.guitarrista === true) {
//     console.log('Guitarrista')
//   } else {
//     console.log('No es Gutarrista')
//
//   if (persona.drone === true) {
//     console.log('Piloto de Drone')
//   } else {
//     console.log('No es Piloto de Drone')
//
// }


// imprimirProfesiones(cristian)


function imprimirSiesMayorDeEdad(persona) {
  if(persona.edad >= 18) {
    console.log(`${persona.nombre} es Mayor de edad`)
  }
}

imprimirSiesMayorDeEdad(cristian)
