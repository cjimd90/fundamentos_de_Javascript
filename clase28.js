const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

// $.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, { crossDomain: true })

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

// const onResponse = function (luke){
//   console.log(`Hola yo soy, ${luke.name}`)
// }

const onPeopleResponse = function (persona){
  console.log(`Hola yo soy, ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)
