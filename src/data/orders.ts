import { IProductOrder } from "../types/orderProduct";
import { minishopData } from "./minishopData";

export const ordersData: IProductOrder[] = [
  {
    id: 0,
    date: "10.05.2021",
    numberOrder: 58145,
    countProduct: 25,
    sum: 58180,
    status: "Выдан",
    contactPerson: {
      id: 0,
      fullName: "Иванов Иван Иванович",
      mail: "Ivanov2021@mail.ru",
      number: "8 800 555-35-35",
      city: "г. Москва",
      streetAndHouse: "ул. Ленина, д.50",
      flat: 50,
    },
    products: [
      { item: minishopData[0], itemId: minishopData[0].id, count: 4 },
      { item: minishopData[1], itemId: minishopData[1].id, count: 2 },
      { item: minishopData[2], itemId: minishopData[2].id, count: 3 },
    ],
  },
  {
    id: 1,
    date: "12.06.2021",
    numberOrder: 6713,
    countProduct: 21,
    sum: 23768,
    status: "Доставка",
    contactPerson: {
      id: 0,
      fullName: "Петров Пётр Петрович",
      mail: "Petrov2021@mail.ru",
      number: "8 800 555-35-35",
      city: "г. Томск",
      streetAndHouse: "ул. Елизаровых, д.12",
      flat: 10,
    },
    products: [
      { item: minishopData[3], itemId: minishopData[3].id, count: 4 },
      { item: minishopData[2], itemId: minishopData[2].id, count: 2 },
      { item: minishopData[4], itemId: minishopData[4].id, count: 3 },
      { item: minishopData[7], itemId: minishopData[7].id, count: 1 }
    ],
  },
];
