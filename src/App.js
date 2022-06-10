import './App.css';
import React from 'react';
class App extends React.Component {

//Constructor
constructor(props) {
  super(props);

  this.state = {
    items: [],
    DataisLoaded: false
  };
}

//Fetch Data from API
//Fetch all 898 Pokemon (need loop)
componentDidMount(){
  fetch(
    "https://pokeapi.co/api/v2/pokemon/151")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true
      });
    })
}



render() {
  const { DataisLoaded, items } = this.state;
  let pokemonID = 1;
  if(!DataisLoaded){ return <div>
    <h1>Please wait some time...</h1> </div>;
  }

  return (
    <div className = "App">
      <h1>Pokedex</h1> {
          <ol key = { items.id } >
            <h3>{ items.name } </h3>
            <div className='PokeCard'><p>Normal:</p><img src={items.sprites.front_default}></img></div>
            <div className='PokeCard'><p>Shiny:</p><img src={items.sprites.front_shiny}></img></div>
            <div className='PokeCard'><p>Normal:</p><img src={items.sprites.front_default}></img></div>
            <div className='PokeCard'><p>Shiny:</p><img src={items.sprites.front_shiny}></img></div>
            <div className='PokeCard'><p>Normal:</p><img src={items.sprites.front_default}></img></div>
            <div className='PokeCard'><p>Shiny:</p><img src={items.sprites.front_shiny}></img></div>
          </ol>
      }
    </div>
  );
}
};

export default App;
