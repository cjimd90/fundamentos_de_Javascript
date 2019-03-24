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

var juan = {
  nombre: 'Juan',
  apellido: 'Lopez',
  edad: 13
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
//   }
//
//   if (persona.cantante === true) {
//     console.log('Cantante')
//   }
//
//   if (persona.dj === true) {
//     console.log('Dj')
//   }
//
//   if (persona.guitarrista === true) {
//     console.log('Guitarrista')
//   }
//
//   if (persona.drone === true) {
//     console.log('Piloto de Drone')
//   }
//
// }

const MAYORIA_DE_EDAD = 18
// var esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD


function imprimirSiesMayorDeEdad(persona) {
  if(esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es Mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD

function permitirAcceso(persona) {
  if(esMenorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  } else {
    console.log ('ACCESO PERMITIDO')
  }
}
