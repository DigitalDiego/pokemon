import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'
import Logo from './PokemonLogo.png'
import {AiOutlineArrowUp} from 'react-icons/ai'
import './App.css'

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v2/cards`)
    .then(res => {
      setPokemon(res.data.data)
    }).catch(error => console.log(error))
  }, []);
  const handleChange = (event) => {
    setSearch(event.target.value);
  }
  const filteredPokemon = pokemon.filter(item => (
    item.name.toLowerCase().includes(search.toLowerCase())
  ));
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <header>
        <img src={Logo} alt="image" className='logo'/>
        <input type="text" placeholder='Search Pokemon' onChange={handleChange}/>
      </header>
      <div className="container">
          {filteredPokemon.map(item => (
            <Pokemon name={item.name} set={item.set.name} image={item.images.small}/>
          ))}
      </div>
      <div className="scroll-up">
            <AiOutlineArrowUp className='arrow' onClick={scrollUp}/>
      </div>
    </div>
  )
}

export default App
