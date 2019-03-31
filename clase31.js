const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPeronaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $
    .get(url, opts, callback)
    .fail(function() {
      console.log(`sucedio un error. No se pudo obtener el personaje ${id}`)
    })
}

obtenerPeronaje(1, function (personaje) {
  console.log(`Hola yo soy, ${personaje.name}`)

  obtenerPeronaje(2, function(personaje) {
    console.log(`Hola yo soy, ${personaje.name}`)

    obtenerPeronaje(3, function(personaje) {
      console.log(`Hola yo soy, ${personaje.name}`)

      obtenerPeronaje(4, function(personaje) {
        console.log(`Hola yo soy, ${personaje.name}`)

        obtenerPeronaje(5, function(personaje) {
          console.log(`Hola yo soy, ${personaje.name}`)

          obtenerPeronaje(6, function(personaje) {
            console.log(`Hola yo soy, ${personaje.name}`)

            obtenerPeronaje(7, function(personaje) {
              console.log(`Hola yo soy, ${personaje.name}`)

            })
          })
        })
      })
    })
  })
})
