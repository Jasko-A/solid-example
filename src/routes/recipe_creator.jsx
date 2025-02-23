import { Title } from "@solidjs/meta";
import Recipe from "~/components/Recipe/Recipe";
import { IngredientsContextProvider } from "~/contexts/IngredientsContextProvider";

export default function RecipeCreator() {
  return (
    <main>
      <Title>Recipe Creator</Title>
      <h1>Recipe</h1>
      <IngredientsContextProvider>
        <Recipe/>
      </IngredientsContextProvider>
    </main>
  );
}