var cristian ={
  nombre: 'Cristian',
  apellido: 'Jimenez',
  edad: 28
}

function esMayorDeEdad(persona) {
  if (persona.edad > 18) {
    var mensaje = 'Es mayor de edad'
  } else {
    var mensaje = 'Es menor de edad'
  }
  console.log (mensaje)
}

function esMayorDeEdad(persona) {
  let mensaje
  const MAYORIA_DE_EDAD = 18
  if (persona.edad > MAYORIA_DE_EDAD) {
    let mensaje = 'Es mayor de edad'
  } else {
    let mensaje = 'Es menor de edad'
  }
  console.log (mensaje)
}

// esMayorDeEdad(cristian)

for (var i = 0; i < 10; i++) {
  console.log(i)
}

console.log(`Termino el fo, el valor de es ${i}`)
