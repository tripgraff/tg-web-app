// import React from 'react';
// import button from "../button/button";
// import {useTelegram} from "../../hooks/useTelegram";
// import './header.css';

// const header = () => {

//     const { user, onClose } = useTelegram();

//     return (
//         <div className={'header'}>
//             <button onClick={onClose}>закрыть</button>
//             <span className={'username'}>
//                 { user?.username}
//             </span>
//         </div>
//     );
// };

// export default header;

import React from 'react';
import './header.css';

const header = ({ cartItems }) => {
    return (
        <div className="header">
            <img src="/logo.png" alt="Logo" className="logo" />
            <div className="cart">
                <span className="cart-count">{cartItems.length}</span>
                <svg className="cart-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5H19L17 12H7L6 5H3V3ZM6 7H16.5L17.5 10H7.5L6 7ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15C7.55228 15 8 14.5523 8 14C8 13.4477 7.55228 13 7 13ZM17 13C16.4477 13 16 13.4477 16 14C16 14.5523 16.4477 15 17 15C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13Z" fill="var(--tg-theme-button-text-color)" />
                </svg>
            </div>
        </div>
    );
};

export default header;