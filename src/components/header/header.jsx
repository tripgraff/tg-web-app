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
                <span className="cart-count">{cartItems ? cartItems.length : 0}</span>
                <svg className="cart-icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="20.000000pt" height="20.000000pt" viewBox="0 0 128.000000 128.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M10 1265 c-22 -26 5 -45 64 -45 29 0 60 -6 69 -13 12 -8 49 -120 107
                -319 50 -169 90 -314 90 -322 0 -8 -20 -39 -45 -69 -72 -89 -79 -131 -28 -179
                l25 -23 411 -3 c227 -1 422 0 435 3 26 6 30 40 6 49 -9 3 -199 6 -423 6 -486
                0 -471 -4 -381 108 l51 62 282 0 c164 0 298 4 319 10 52 15 69 41 183 285 113
                240 122 278 72 321 l-28 24 -493 0 -493 0 -16 40 c-21 54 -66 80 -138 80 -38
                0 -61 -5 -69 -15z m1191 -165 c10 -6 19 -20 19 -31 0 -10 -48 -121 -107 -245
                -83 -177 -112 -228 -130 -235 -14 -5 -150 -9 -303 -9 l-279 0 -20 68 c-79 267
                -131 448 -131 454 0 12 928 10 951 -2z"/>
                <path d="M288 213 c-102 -64 -39 -230 79 -208 20 3 49 19 65 35 23 23 28 37
                28 75 0 40 -5 52 -34 81 -27 27 -42 34 -72 34 -22 0 -51 -8 -66 -17z m108 -68
                c22 -33 6 -72 -32 -81 -33 -8 -56 5 -68 39 -21 58 66 94 100 42z"/>
                <path d="M989 216 c-15 -9 -34 -31 -43 -51 -44 -92 41 -187 139 -155 114 38
                94 205 -25 216 -28 3 -55 -1 -71 -10z m99 -58 c20 -20 15 -76 -7 -88 -61 -32
                -123 37 -75 84 18 19 65 21 82 4z"/>
                </g>
                </svg>

            </div>
        </div>
    );
};

export default header;