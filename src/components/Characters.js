import React from 'react';


export default function Characters (props) {
 
  const {characters , setCharacters} = props;



  const resetCharacters = () => { 
    setCharacters(null);
  } 

   

  return (
    <div className='characters'>
        
        <div className='characterContainer'> 
             {characters.map((character , index ) => (
               <div className='characters-details' key={index}> 
                   <h3>{character.character}</h3>
                   <img src={character.image}  alt={character.character} />
                   <p> {character.quote}</p>
                  
               </div>
                 
                 
             ))}
            
        
    </div> 
    <button className='btn' onClick={resetCharacters}> 
        <span className='back'> Volver </span> 
        <span class="material-icons">arrow_back</span>
        </button>
        </div>
  );
            
};
