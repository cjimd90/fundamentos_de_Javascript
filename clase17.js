var cristian = {
  nombre: 'Cristian',
  apellido: 'Jimenez',
  estatuta: 1.78
}
var juan = {
  nombre: 'Juan',
  apellido: 'Lopez',
  estatuta: 1.56
}
var manuel = {
  nombre: 'Manuel',
  apellido: 'Jimenez',
  estatuta: 1.65
}
var paula = {
  nombre: 'Paula',
  apellido: 'Becerra',
  estatuta: 1.60
}
var pedro = {
  nombre: 'Pedro',
  apellido: 'Torres',
  estatuta: 1.82
}
var alex = {
  nombre: 'Alex',
  apellido: 'Estupiñan',
  estatuta: 1.78
}

var personas = [cristian, juan, manuel, paula, pedro, alex]


for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.estatuta}mts`)
}
