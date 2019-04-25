const cristian = {
  nombre: 'Cristian',
  apellido: 'Jimenez'
}

const nereida = {
  nombre: 'Nereida',
  apellido: 'Escobar'
}

// OPCION A

function saludar(saludo = 'Hola') {
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

//  OTRA OPCION FUNCTION
// function saludar() {
  //   console.log(`Hola, mi nombre es ${this.nombre}`)
  // }

const saludarACristian = saludar.bind(cristian, 'Hola che')
const saludarANereida = saludar.bind(nereida, 'Hola che')

const saludarsetTimeout(saludar.bind(cristian, 'Hola che'), 1000)

//  OPCION B


const saludarACristianB = saludar.bind(cristian)
const saludarANereidaB = saludar.bind(nereida)

//  OPCION C


const saludarACristianC = saludar.call(cristian)
const saludarACristianC2 = saludar.call(cristian, 'Hola che')


// OPCION D

const saludarACristianD = saludar.apply(cristian)
const saludarACristianD2 = saludar.apply(cristian, ['Hola che'])
