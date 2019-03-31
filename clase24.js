function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto= function () {
  return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolador/a`)
}

var cristian = new Persona('Cristian', 'Jimenez', 1.82)

// var cristian = new Persona('Cristian', 'Jimenez', 1.82)
// var erika = new Persona('Erika', 'Luna', 1.58)
// var pedro = new Persona('Pedro', 'Martinez', 1.85)
// var patricia = new Persona('Patricia', 'Escobar', 1.62)
// var jaime = new Persona('Jaime', 'Ochoa', 1.81)
