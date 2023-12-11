export interface IServiceItem {
    id: number;
    title: string;
    img: string;
    description: string;
    price: {
        moneyPrice?: number;
        procentPrice?: number;
    }
    
}