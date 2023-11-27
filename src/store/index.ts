import { createStore } from "redux";
import { favoriteReducer } from "./reducers/favoritesReducer";


export const store = createStore(favoriteReducer)