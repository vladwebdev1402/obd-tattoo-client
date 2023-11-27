export interface IMarcers {
  new?: boolean;
  hot?: boolean;
  promotion?: boolean;
  discount?: boolean;
  no?: boolean;
}
interface ICharacteristicsName {
  [key: string]: string
}
export const characteristicsName: ICharacteristicsName = {
  needleStroke: "Ход иглы",
  voltage: "Вольтаж",
  connector: "Разъём",
  manufacturer: "Производитель",
  type: "Тип",
  purpose: "Назначение",

}

export interface ICharacteristics {
  needleStroke?: "Универсальная";
  voltage?: number;
  connector?: "RCA";
  manufacturer?: string;
  type?: "Роторная" | "Индукционная";
  purpose?: "Универсальная";
}

export interface IItemImg {
  img0: string;
  img1: string;
  img2: string;
  img3: string;
}


export interface IShopItem {
  id: number;
  price: number;
  oldPrice: number;
  name: string;
  img: IItemImg;
  marcers?: IMarcers;
  description: string;
  count: number;
  type: "tattoo-kits" | "holders" | "tattoo-machine" 
  | "wires" | "paints" | "power" | "tattoo-tips" | 
  "tattoo-needles" | "consumables" | "accessories" | "printers";
  characteristics?: ICharacteristics
  brand: string;
}


