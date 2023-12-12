export interface IMarcers {
  [key: string]: boolean;
  new: boolean;
  hot: boolean;
  promotion: boolean;
  discount: boolean;
  no: boolean;
}


export interface IShopItem {
  _id: string;
  price: number;
  oldPrice: number;
  name: string;
  image: string;
  marcers: IMarcers;
  description: string;
  count: number;
  category: string;
  brand: string;
}


