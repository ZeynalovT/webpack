import './styles/index.scss'

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
