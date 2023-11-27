const ADD_FAVORITE = "ADD_FAVORITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";

export interface IFavorite {
    id: number;
}

export interface IFavoriteReducer {
    favorites: IFavorite[];
}

export interface IFavoriteAction {
    type: string;
    payload?: any;
}

export const initioalState: IFavoriteReducer = {
    favorites: []
}

export const favoriteReducer = (state = initioalState, action: IFavoriteAction): IFavoriteReducer=> {
    switch (action.type) {
        case ADD_FAVORITE:
            return {...state, favorites: [...state.favorites, action.payload]  }
        case DELETE_FAVORITE:
            return {...state, favorites: [...state.favorites.filter(f => f !== action.payload)] }
        default: return state
    }
}

export const itemInFavorites = (favorites: IFavorite[] | unknown, id: number): boolean => {
    return Array.isArray(favorites) && favorites.filter(f => f == id).length > 0;
}