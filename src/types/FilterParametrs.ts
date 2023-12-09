export interface IPrice {
    minPrice: string;
    maxPrice: string;
}

export interface IFiltersParametrs {
    price: IPrice,
    inStock: boolean,
    sortOptions: { name: string; isActive: boolean }[],

}