import { createSignal, onMount, createEffect, useContext } from "solid-js";
import { IngredientsContext } from "~/contexts/IngredientsContextProvider";
import Ingredient from "./Ingredients/Ingredient";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Ensure Quill styles are loaded
import QuillEditor from "./QuillEditor";

const Recipe = () => {
  const ItemsContext = useContext(IngredientsContext);
  const { items: ingredients, addItem, updateItem } = ItemsContext;

  const [editorMounted, setEditorMounted] = createSignal(false);

  // // Log current state on mount for debugging
  // createEffect(() => {
  //   console.log("Editor mounted:", editorMounted());
  //   if (editorMounted()) {
  //     const editor = document.getElementById("editor");
  //     if (editor) {
  //       console.log("Initializing Quill...");
  //       new Quill(editor, {
  //         placeholder: "Hello, World!",
  //         theme: "snow"
  //       });
  //     }
  //   }
  // });

  // onMount(() => {
  //   const editor = document.getElementById("editor");
  //     if (editor) {
  //       console.log("Initializing Quill...");
  //       new Quill(editor, {
  //         placeholder: "Hello, World!",
  //         theme: "snow"
  //       });
  //     }
  // });

  return (
    <div>
      <h2>Recipe</h2>
      {ingredients.map((item, index) => (
        <Ingredient name={item.name} index={index} updateItem={updateItem} />
      ))}
      <input type="button" value="+" onClick={() => addItem({ name: "" })} />
      
      <QuillEditor />
    </div>
  );
};

export default Recipe;
