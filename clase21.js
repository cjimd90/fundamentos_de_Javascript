function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  return this
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto= function () {
  if (this.altura >= 1.8) {
    console.log(`${this.nombre} es una persona alta`)
  } else {
    console.log(`${this.nombre} es una persona baja`)
  }
}

var cristian = new Persona('Cristian', 'Jimenez', 1.82)
var erika = new Persona('Erika', 'Luna', 1.58)
var pedro = new Persona('Pedro', 'Martinez', 1.85)
var patricia = new Persona('Patricia', 'Escobar', 1.62)
var jaime = new Persona('Jaime', 'Ochoa', 1.81)
