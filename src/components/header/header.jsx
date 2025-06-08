import React from 'react';
import button from "../button/button";
import {useTelegram} from "../../hooks/useTelegram";
import './header.css';

const header = () => {

    const { user, onClose } = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onClose}>закрыть</button>
            <span className={'username'}>
                { user?.username}
            </span>
        </div>
    );
};

export default header;