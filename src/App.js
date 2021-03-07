import React, { useEffect, useState } from "react";
import Recipes from "./Recipe";

const App = () => {
  const [Recipe, setRecipe] = useState("");
  const [Search, setSearch] = useState("");
  const [Query, setQuery] = useQuery("");

  useEffect(async () => {
    getRecipes();
    setRecipe(data);
  }, []);

  const getRecipes = async () => {
    const response = await fetch();
    const data = await response.json();
    setRecipe(data.hit);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(Search);
  };

  // const APP_ID = '';
  // const APP_KEY = '';

  // const example = "";
  return (
    <div className="App">
      <form action="" className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={getSearch}
        />
        <button type="submit" className="search-button"></button>
      </form>

      <div>
        {Recipe.map((recipe) => (
          <Recipes title={recipe.recipe.title} />
        ))}
      </div>
    </div>
  );
};

export default App;
