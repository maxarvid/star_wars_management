import React from "react";
import CharacterList from "./components/CharacterList";

const App = () => {
  return (
    <div>
      <h1 id="header">Star Wars Character List</h1>
      <div id="character-list">{CharacterList}</div>
    </div>
  );
};

export default App;
