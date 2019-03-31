class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    var { nombre, apellido } = this

    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if(fn) {
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrolador/a`)
    if(fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log (`Buen dias ${nombre} ${apellido}`)
  if (esDev) {
    console.log('Ah mirá, no sabía que eras Desarrollador/a')
  }
}

var cristian = new Persona('Cristian', 'Jimenez', 1.82)
var erika = new Persona('Erika', 'Luna', 1.58)
var pedro = new Persona('Pedro', 'Martinez', 1.85)
var patricia = new Persona('Patricia', 'Escobar', 1.62)
var jaime = new Desarrollador('Jaime', 'Ochoa', 1.81)

cristian.saludar(responderSaludo)
erika.saludar(responderSaludo)
pedro.saludar(responderSaludo)
patricia.saludar(responderSaludo)
jaime.saludar(responderSaludo)
