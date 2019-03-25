var cristian = {
  nombre: 'Cristian',
  apellido: 'Jimenez',
  edad: 28,
  peso: 78
}

console.log(`Al inicio del año ${cristian.nombre} pesa ${cristian.peso} Kg`)

// function aumentarDePeso(persona) {
//   return persona.peso += 200
// }

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO  = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i<= DIAS_DEL_ANO; i++) {
  var random = Math.random ()

  if (random < 0.25) {
    aumentarDePeso(cristian)
  } else if (random < 0.5){
    adelgazar(cristian)
  }
}

console.log(`Al final del año ${cristian.nombre} pesa ${cristian.peso} kg`)
