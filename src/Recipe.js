import React from "react";

const Recipes = () => {
  return (
    <div className="Recipes">
      <p>{ingredient}</p>
      <h1>{Title}</h1>
      <p>{calories}</p>
      <img src="{image}" alt="" />
    </div>
  );
};

export default Recipes;
