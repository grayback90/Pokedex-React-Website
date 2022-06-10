import './App.css';
import React, {useEffect, useState} from 'react';
import {getList} from '../src/pokemons';

function App() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])
  
  return(
    <>
    <h1>Pokedex</h1>
      <div className='PokeCard'>
        <h3>{list.name}</h3>
      </div>
    </>
  )
}

export default App;
