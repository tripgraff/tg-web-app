import React, { useState } from "react";
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

const products = [
    {id: '1', title: 'Футболка @tripgraff', price: 1900, description: 'черная'},
    {id: '2', title: 'Футболка @tripgraff', price: 1900, description: 'белая'}
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    // const onSendData = useCallback(() => {
    //     const data = {
    //         products: addedItems,
    //         totalPrice: getTotalPrice(addedItems),
    //         queryId,
    //     }
    //     fetch('http://45.138.162.222:8000/web-data', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    // }, [addedItems, queryId])

const onSendData = useCallback(() => {
    if (!tg) {
        alert('Telegram Web App не инициализирован');
        return;
    }
    if (!queryId) {
        alert('queryId не определён');
        return;
    }
    if (!addedItems.length) {
        alert('Корзина пуста');
        return;
    }
    const data = {
        products: addedItems,
        totalPrice: getTotalPrice(addedItems),
        queryId,
    };
    console.log('Отправляемые данные:', JSON.stringify(data));
    alert('Отправляем данные: ' + JSON.stringify(data));
    fetch('http://45.138.162.222:8000/web-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            console.log('Ответ сервера:', {
                status: response.status,
                statusText: response.statusText,
                headers: [...response.headers.entries()],
            });
            alert('Статус ответа: ' + response.status);
            return response.json().catch(() => ({}));
        })
        .then(data => {
            console.log('Данные ответа:', data);
            alert('Данные ответа: ' + JSON.stringify(data));
        })
        .catch(error => {
            console.error('Ошибка запроса:', error);
            alert('Ошибка запроса: ' + error.message);
        });
}, [addedItems, queryId, tg]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;