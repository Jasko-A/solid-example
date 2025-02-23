import { createContext } from "solid-js";
import { createStore, produce } from "solid-js/store";

const IngredientsContext = createContext();

const IngredientsContextProvider = (props) => {
	const [ingredients, setIngredients] = createStore([{ name: '' }]);

	const ingredientsObj = {
		items: ingredients,
		addItem(i) {
			setIngredients([...ingredients, i]); // No re-render issue
		},
		updateItem(e, index) {
			setIngredients(produce((draft) => {
				draft[index].name = e.target.value; // Direct mutation
			}));
		}
	};

	return (
		<IngredientsContext.Provider value={ingredientsObj}>
			{props.children}
		</IngredientsContext.Provider>
	);
};

export { IngredientsContext, IngredientsContextProvider };
