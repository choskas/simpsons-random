import React, { useEffect, useState } from "react";
import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";
import axios from "axios";
import AllCharactersComponent from '../components/AllCharactersComponent'
import SimpsonsIntro from '../components/SimpsonIntro';

const Index = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [character, setCharacter] = useState(null);

  const onGetCharacterInfo = async () => {
    const url = "https://simpsons-quotes-api.herokuapp.com/quotes";
    const response = await axios.get(url);
    console.log(response);
    setCharacter(response.data[0]);
  };

  const onGetAllCharacters = async () => {
      const url = "https://simpsons-quotes-api.herokuapp.com/quotes?count=100"
      const response = await axios.get(url)
      console.log(response.data, 'all')
      setAllCharacters(response.data);
  }

  useEffect(() => {
    onGetCharacterInfo();
    onGetAllCharacters();
  }, []);

  return (
    <div className="custom-main-container">
        <SimpsonsIntro />
      <div className="custom-secondary-container">
        {isNil(character) === false && isEmpty(character) === false ? (
          <div>
            <img
              className="main-image"
              src={character.image}
              alt="simpson-img"
            />
            <h3>{character.character}</h3>
            <p>{character.quote}</p>
          </div>
        ) : (
          <div className="loader-container">
            {" "}
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>{" "}
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={() => {
            onGetCharacterInfo();
          }}
        >
          Get random character
        </button>
      </div>
      <h3>Ten random quotes</h3>
      <AllCharactersComponent characters={allCharacters} /> 
    </div>
  );
};

export default Index;
