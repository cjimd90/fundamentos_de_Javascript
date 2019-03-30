var cristian = {
  nombre: 'Cristian',
  apellido: 'Jimenez',
  estatura: 1.82,
  cantidadDeLibros: 87
}
var juan = {
  nombre: 'Juan',
  apellido: 'Lopez',
  estatura: 1.56,
  cantidadDeLibros: 98
}
var manuel = {
  nombre: 'Manuel',
  apellido: 'Jimenez',
  estatura: 1.86,
  cantidadDeLibros: 124
}
var paula = {
  nombre: 'Paula',
  apellido: 'Becerra',
  estatura: 1.60,
  cantidadDeLibros: 196
}
var pedro = {
  nombre: 'Pedro',
  apellido: 'Torres',
  estatura: 1.90,
  cantidadDeLibros:201
}
var alex = {
  nombre: 'Alex',
  apellido: 'Estupiñan',
  estatura: 1.78,
  cantidadDeLibros: 145
}

var personas = [cristian, juan, manuel, paula, pedro, alex]

const esAlta = ({ estatura }) => estatura > 1.8
const esBaja = ({ estatura }) => estatura < 1.8

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaCms = persona => ({
  ...persona,
  estatura: persona.estatura * 100
})

var personasCms = personas.map(pasarAlturaCms)

// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total ellos tienen ${totalDeLibros} libros`)
