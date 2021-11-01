import React, { useState } from 'react'


const elevenShieldRecipe = {
  leatherStripe: 2,
  ironIgnot: 6,
  refineMoonstone: 4,
};

const elevenTotalRecipe = {
  ...elevenShieldRecipe,
  leather: 1,
  refineMoonStone: 4,
}

console.log(elevenShieldRecipe)

console.log(elevenTotalRecipe)



const Recepies = () => {
  const [recipem setRecipe] = useState([])
  return (
    <div>
    <button onClick={() => setRecipe(elevenShieldRecipe)}>add elevenShieldRecipe</button>
    <button onClick={() => setRecipe(elevenTotalRecipe)}>add elevenTotalRecipe</button>
    <ul>
    {Object.keys(recipe).map((material) => (
      <li key={material}>
          {material}: {recipe[material]}
      </li>
    ))}
    </ul>


    </div>
  )
}

export default Recepies
