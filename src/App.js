import './App.css';
import React from 'react';
class App extends React.Component {

//Constructor
constructor(props) {
  super(props);

  this.state = {
    pokemons: [],
    DataisLoaded: false
  };
}

//Fetch Data from API
//Fetch all 898 Pokemon (need loop)
componentDidMount(){
  fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=898")
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
  if(!DataisLoaded){ return <div>
    <h1>Please wait some time...</h1> </div>;
  }

  return (
    <div className = "App">
      <h1>Pokedex</h1> {
        items.results.map((item) => (
          <ol key = {item.id} >
            <div className='PokeCard'><p>{item.id} - {item.name}:</p></div>
          </ol>
        ))
      }
    </div>
  );
}
};

export default App;
