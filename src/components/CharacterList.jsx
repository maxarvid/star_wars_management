import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const CharacterList = () => {
  const { characters, setCharacters } = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    setCharacters(response.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default CharacterList;
