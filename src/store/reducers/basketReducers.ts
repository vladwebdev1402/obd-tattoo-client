import { IShopItem } from "../../types/shopItem";


const ADD_BASKET = "ADD_BASKET";
const DELETE_BASKET = "DELETE_BASKET";

export interface IBasket {
    count: number;
    item: IShopItem;
    itemId: number;
}

export interface IBasketState {
    basket: IBasket[]; 
} 

const initialState: IBasketState = {
    basket: [],
}

export interface IBasketAction {
    type: string;
    payload: any;
}

export const basketReducer = (state = initialState, action: IBasketAction): IBasketState=> {
    switch (action.type) {
        case ADD_BASKET:
            return {...state, basket: [...state.basket, action.payload]  }
        case DELETE_BASKET:
            return {...state, basket: [...state.basket.filter(b => b !== action.payload)]  }
        default: return state
    }
}