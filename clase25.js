class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido) {
    super(nombre, apellido, altura)
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolador/a`)
  }
}

var cristian = new Persona('Cristian', 'Jimenez', 1.82)

// var cristian = new Persona('Cristian', 'Jimenez', 1.82)
// var erika = new Persona('Erika', 'Luna', 1.58)
// var pedro = new Persona('Pedro', 'Martinez', 1.85)
// var patricia = new Persona('Patricia', 'Escobar', 1.62)
// var jaime = new Persona('Jaime', 'Ochoa', 1.81)
