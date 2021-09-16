import React from "react";
import CharacterList from "./components/CharacterList";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <h1 id="header">Star Wars Character List</h1>
      <div id="character-list">
        <CharacterList />
      </div>
    </Container>
  );
};

export default App;
