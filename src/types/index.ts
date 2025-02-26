import { IEvents } from "../components/base/events";

export type Id = string;

export type Payment = 'online' | 'cash';

export interface IProductItem {
    id: Id;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export interface IProductList {
    items: IProductItem[];
}

export interface ICart {
    items: Map<Id, number>;
}

export interface IOrderForm {
    payment: Payment;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: Id[];
}

export interface IOrderDetails {
    id: Id;
    total: number;
}

export interface IViewComponent {
    render(data?: object): HTMLElement;
}

export interface IViewInitializer {
    new(container: HTMLElement, events?: IEvents): IViewComponent;
}