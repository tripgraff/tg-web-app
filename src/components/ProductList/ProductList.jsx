import React, { useState } from "react";
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Футболка @tripgraff', price: 1900, description: 'черная'},
    {id: '2', title: 'Футболка @tripgraff', price: 1900, description: 'белая'}
]

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadeAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadeAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.mainButton.hide();
        } else {
            tg.mainButton.show();
            tg.mainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div className={'list'}>
             {products.map(item => (
                <ProductItem
                    product = {item}
                    onAdd = {onAdd}
                    className={'item'}
                />
             ))}
        </div>
    );
};

export default ProductList;