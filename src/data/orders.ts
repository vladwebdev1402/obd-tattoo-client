import { IProductOrder } from "../types/entity/orderProduct";

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
     
    ],
  },
];
