import { IShopItem } from "./shopItem";

export default interface IBasket {
    item: IShopItem;
    itemId: number;
    count: number;
}