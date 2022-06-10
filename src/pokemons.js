export function getList() {
    return fetch('https://pokeapi.co/api/v2/pokemon/151/')
      .then(data => data.json())
}
  