import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const { tg } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        };
        console.log('Отправляемые данные:', data);
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject]);

    useEffect(() => {
        console.log('Регистрация события mainButtonClicked');
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            console.log('Снятие события mainButtonClicked');
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData, tg]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        });
        console.log('MainButton инициализирован');
    }, [tg]);

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
            console.log('MainButton скрыт: улица или страна пусты');
        } else {
            tg.MainButton.show();
            console.log('MainButton показан');
        }
    }, [country, street, tg]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type='text'
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type='text'
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;