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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO  = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = cristian.peso - 3
var dias = 0


while (cristian.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(cristian)
  }
  if (realizaDeporte()) {
    adelgazar(cristian)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días que ${cristian.nombre} adelgazó 3 kg`)
