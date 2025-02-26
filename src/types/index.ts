import { IEvents } from "../components/base/events";

export type Id = string

export type Payment = 'online' | 'cash';

export interface IProduct {
    id: Id;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export interface ICatalog {
    items: IProduct[]
}

export interface IBasket {
    items: Map<Id, number>;
}

export interface IOrderRequest {
    payment: Payment;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: Id[];
}

export interface IOrder {
    id: Id;
    total: number;
}

export interface IView {
    render(data?: object): HTMLElement;
}

export interface IViewConstructor {
    new(container: HTMLElement, events?: IEvents): IView;
}