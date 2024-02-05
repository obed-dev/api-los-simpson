
import { useState } from 'react';
import './App.css';
import simpsonImage from './img/lossimpsons.png';
import Characters from './components/Characters';

function App() {
 const [ characters , setCharacters ] = useState(null);



 const  getCharacters  = async  () =>  { 
try {
  const apiCharacters = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes?count=50');
   const jsoncharacters = await apiCharacters.json();
   let charactersMap = jsoncharacters.map(item  =>  { 

 
    return [item.character , item ]
  
  });
 

 
let charactersMapArr = new Map (charactersMap);


let uniqueCharacters = [ ...charactersMapArr.values()];
console.log(uniqueCharacters);


setCharacters(uniqueCharacters);

 } catch (error) {
    console.log(error);
}

}
  return (
    <div className="App">
      <header className="App-header">
        {characters ?  ( 
    
    <Characters characters={characters}  setCharacters={setCharacters}/>
     )  : (  
           
     <>
        <img src={simpsonImage}  alt='los simpson' className='img-home' />
        <button className='btn' onClick={getCharacters} > Buscar Personajes </button>


        </>
        )}
      </header>
    </div>
  );
}

export default App;
