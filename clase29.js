const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function (persona){
  console.log(`Hola yo soy, ${persona.name}`)
}

function obtenerPeronaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $.get(url, opts, onPeopleResponse)
}

obtenerPeronaje(1)
obtenerPeronaje(2)
obtenerPeronaje(3)
