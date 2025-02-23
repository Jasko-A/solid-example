import { createSignal, onMount, createContext } from "solid-js";

const Ingredient = ({name, index, updateItem}) => {

    let inputRef;

  // Handle focus when clicking on the input
  const handleFocus = () => {
    if (inputRef) {
      inputRef.focus();
    }
  };

    return (
        <input type="text" placeholder="enter name" value={name} onInput={(e) => updateItem(e, index)} onClick={handleFocus}></input>
    )
}

export default Ingredient;