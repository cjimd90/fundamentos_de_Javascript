var cristian = {
  nombre: 'Cristian',
  apellido: 'Jimenez',
  estatura: 1.82
}
var juan = {
  nombre: 'Juan',
  apellido: 'Lopez',
  estatura: 1.56
}
var manuel = {
  nombre: 'Manuel',
  apellido: 'Jimenez',
  estatura: 1.86
}
var paula = {
  nombre: 'Paula',
  apellido: 'Becerra',
  estatura: 1.60
}
var pedro = {
  nombre: 'Pedro',
  apellido: 'Torres',
  estatura: 1.90
}
var alex = {
  nombre: 'Alex',
  apellido: 'Estupiñan',
  estatura: 1.78
}


var personas = [cristian, juan, manuel, paula, pedro, alex]

const ESTATURA_PROMEDIO = 1.8

const esAlta = ({ estatura }) => estatura > ESTATURA_PROMEDIO
const esBaja = ({ estatura }) => estatura < ESTATURA_PROMEDIO

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
// var personasAltas = personas.filter(function (persona) {
//   return persona.estatura > 1.8
// })

const pasarAlturaCms = persona => ({
  ...persona,
  estatura: persona.estatura * 100
})

// {
// persona.estatura * persona.estatura = 100
// }


//   {
//   persona.estatura *= 100
//   // return persona
//   return {
//     ...persona,
//     altura: persona.altura
//   }
// }

var personasCms = personas.map(pasarAlturaCms)


console.log(personasCms)
// console.log(personasAltas)
// console.log(personasBajas)
