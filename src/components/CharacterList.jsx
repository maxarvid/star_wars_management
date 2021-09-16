import React, { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "semantic-ui-react";
// import Character from "./Character";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    setCharacters(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const characterList = characters.map((character) => {
    return (
      <Item>
        <Item.Content>
          <Item.Header className="name">{character.name}</Item.Header>
        </Item.Content>
      </Item>
    );
  });

  return <Item.Group>{characterList}</Item.Group>;
};

export default CharacterList;
