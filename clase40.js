function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log(`Hola ${nombre} $finalDeFrase`)
  }
}

const saludoArgetino = crearSaludo('che')
const saludoMexicano = crearSaludo('güey')
const saludoColombniano = crearSaludo('amigo')
