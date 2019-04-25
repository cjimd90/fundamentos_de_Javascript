const cristian = {
  nombre: 'Cristian',
  apellido: 'Jimenez',
  edad: 28
}

const cumpleaños = persona => persona.edad++

const cumpleañosInmutables = persona => ({
  ...persona,
  edad: persona.edad + 1
})
