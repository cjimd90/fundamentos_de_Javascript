const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPeronaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $.get(url, opts, function (persona){
    console.log(`Hola yo soy, ${persona.name}`)

    if (callback) {
      callback()
    }
  })
}

obtenerPeronaje(1, function () {
  obtenerPeronaje(2, function() {
    obtenerPeronaje(3, function() {
      obtenerPeronaje(4, function() {
        obtenerPeronaje(5, function() {
          obtenerPeronaje(6, function() {
            obtenerPeronaje(7, function() {

            })
          })
        })
      })
    })
  })
})
