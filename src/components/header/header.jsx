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
            <a className='logo-link' href='/'>
            <svg className='logo' version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="70.000000pt" height="70.000000pt" viewBox="0 0 1700.000000 1700.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,1700.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M1455 10615 c-347 -56 -640 -213 -851 -455 -215 -248 -353 -546 -416
                    -900 -19 -106 -22 -162 -22 -365 -1 -208 2 -256 22 -360 32 -169 74 -301 142
-440 73 -151 160 -274 275 -390 226 -228 465 -359 781 -426 96 -21 135 -24
334 -24 191 1 242 4 335 23 403 80 748 267 988 535 37 42 67 78 67 81 0 3 -92
6 -204 6 l-203 0 -44 -33 c-197 -150 -406 -246 -646 -298 -79 -18 -133 -22
-283 -22 -248 -1 -408 31 -583 118 -476 238 -717 697 -694 1320 7 173 23 286
63 423 92 318 293 589 558 753 104 63 204 105 346 142 109 28 126 30 315 30
154 1 217 -3 272 -16 228 -53 407 -154 549 -310 186 -205 274 -453 274 -774 0
-249 -37 -409 -141 -601 -124 -233 -341 -394 -482 -358 -28 7 -47 48 -41 87 8
55 86 547 114 719 87 543 121 750 130 799 5 30 10 58 10 63 0 4 -87 8 -194 8
l-194 0 -11 -75 c-6 -42 -11 -85 -11 -95 0 -35 -24 -20 -67 40 -50 70 -140
139 -221 171 -83 33 -258 34 -354 2 -100 -34 -184 -88 -268 -172 -321 -322
-472 -924 -349 -1390 48 -179 165 -344 302 -424 90 -53 172 -72 302 -71 100 0
130 4 177 23 66 25 153 81 220 141 25 22 50 40 55 40 5 0 14 -15 21 -34 23
-63 68 -113 129 -142 53 -26 67 -29 168 -29 92 0 124 5 195 27 204 65 447 255
587 459 142 206 213 473 213 804 0 443 -119 747 -402 1034 -185 186 -368 288
-615 342 -130 28 -508 36 -648 14z m285 -940 c52 -35 102 -112 126 -194 21
-72 21 -305 -1 -450 -53 -353 -145 -621 -250 -727 -124 -125 -306 -123 -398 4
-75 104 -97 189 -97 372 0 215 31 409 96 608 79 241 171 364 314 416 8 3 49 4
90 3 65 -2 81 -6 120 -32z"/>
                    <path d="M5990 10360 l0 -200 403 2 402 3 3 198 2 197 -405 0 -405 0 0 -200z" />
                    <path d="M15075 10545 c-219 -35 -340 -138 -365 -311 -5 -38 -10 -118 -10
-179 0 -60 -4 -115 -8 -122 -4 -7 -38 -13 -82 -15 l-75 -3 -2 -197 c-2 -148 1
-199 10 -207 7 -5 44 -11 82 -13 l70 -3 2 -1035 c2 -569 3 -1041 3 -1048 0
-10 82 -12 393 -10 l392 3 2 1045 3 1045 82 3 c46 2 86 6 91 11 4 4 8 97 8
207 l1 199 -164 5 -163 5 -3 57 c-2 32 2 75 8 98 16 58 44 69 195 77 69 3 125
10 125 15 0 4 1 92 1 196 l0 187 -258 2 c-171 1 -285 -3 -338 -12z"/>
                    <path d="M16230 10545 c-134 -23 -220 -65 -284 -136 -63 -69 -77 -113 -88
-278 -5 -80 -7 -156 -5 -168 6 -33 -11 -42 -88 -45 l-70 -3 -3 -199 c-2 -153
1 -201 10 -208 7 -4 43 -8 80 -8 l68 0 2 -1047 3 -1048 393 -3 392 -2 0 1050
0 1049 93 3 92 3 3 207 2 208 -162 2 -163 3 -3 72 c-3 78 12 124 48 143 11 6
78 13 150 17 l130 6 0 199 0 198 -262 -1 c-167 -1 -290 -6 -338 -14z"/>
                    <path d="M3368 10133 l-3 -208 -85 -5 -85 -5 0 -195 0 -195 85 -5 85 -5 5
-890 c5 -687 9 -899 19 -930 45 -140 174 -248 331 -276 36 -6 203 -14 373 -16
l307 -5 0 209 0 210 -88 5 c-106 6 -128 17 -142 66 -6 24 -10 314 -10 835 l0
797 105 0 105 0 0 200 0 199 -102 3 -103 3 -5 205 -5 205 -392 3 -393 2 -2
-207z"/>
                    <path d="M5726 10023 c-140 -32 -259 -118 -346 -250 -27 -42 -51 -81 -53 -87
-2 -6 -7 -9 -10 -6 -3 3 1 71 8 150 8 80 15 148 15 153 0 4 -178 7 -395 7
l-395 0 2 -1292 3 -1293 393 -3 392 -2 0 647 c0 831 6 890 90 974 58 58 129
86 258 100 53 6 103 13 110 15 9 3 12 101 12 448 0 346 -3 445 -12 448 -7 3
-39 -1 -72 -9z"/>
                    <path d="M8263 10025 c-114 -21 -214 -75 -308 -167 -80 -79 -101 -92 -91 -60
3 9 6 55 8 102 l3 85 -403 3 -402 2 2 -1472 3 -1473 393 -3 392 -2 0 285 c0
157 3 285 8 285 4 0 42 -33 84 -74 88 -85 204 -149 303 -167 128 -24 292 3
399 66 68 40 151 134 176 202 52 137 55 182 55 1078 0 892 -2 944 -51 1053
-33 74 -132 171 -219 212 -65 31 -188 60 -250 59 -16 -1 -62 -7 -102 -14z
m-218 -461 c8 -4 23 -21 33 -38 16 -28 17 -94 20 -765 3 -806 0 -882 -43 -918
-35 -30 -102 -31 -138 -2 -52 40 -52 47 -52 854 0 801 2 827 49 860 21 15 101
20 131 9z"/>
                    <path d="M9600 10034 c-158 -24 -227 -52 -301 -120 -84 -79 -127 -170 -154
-324 -12 -69 -15 -204 -15 -735 0 -604 2 -657 20 -744 25 -121 60 -192 130
-262 91 -91 213 -141 380 -155 148 -12 339 48 447 141 24 20 47 34 53 30 22
-14 2 -342 -24 -393 -19 -37 -54 -52 -119 -52 -74 1 -109 34 -122 118 l-7 42
-381 -2 -381 -3 3 -59 c4 -81 35 -196 71 -265 72 -134 207 -216 442 -268 116
-25 552 -26 675 -1 206 43 328 103 444 218 118 117 154 191 169 345 6 69 10
545 10 1278 l0 1167 -367 -2 -367 -3 -23 -80 c-13 -44 -25 -86 -28 -94 -4 -10
-17 -3 -46 28 -105 109 -223 171 -362 190 -78 11 -100 12 -147 5z m495 -470
c8 -4 23 -21 33 -38 15 -28 17 -85 20 -600 4 -707 0 -742 -89 -766 -47 -13
-100 6 -121 42 -10 18 -13 147 -13 653 0 581 1 632 17 662 10 18 26 37 35 42
20 12 93 14 118 5z"/>
                    <path d="M12402 10024 c-105 -22 -169 -60 -262 -154 -47 -47 -95 -106 -108
-132 -38 -78 -45 -71 -37 38 4 55 11 123 15 152 5 36 3 55 -4 58 -6 2 -183 3
-394 2 l-382 -3 0 -1285 c0 -707 0 -1288 0 -1293 0 -4 177 -6 393 -5 l392 3 6
735 c6 784 5 774 56 852 27 40 95 88 153 106 44 13 167 32 214 32 l36 0 0 449
c0 248 -3 452 -7 454 -5 2 -36 -2 -71 -9z"/>
                    <path d="M13415 10033 c-263 -22 -426 -82 -583 -213 -160 -134 -222 -328 -222
-695 l0 -135 370 0 370 0 1 178 c0 97 4 217 8 266 7 80 11 92 35 113 21 17 39
23 78 23 43 0 54 -4 78 -30 38 -41 45 -87 45 -290 0 -127 -4 -172 -15 -195
-25 -49 -104 -89 -446 -229 -236 -96 -364 -166 -426 -233 -77 -81 -103 -238
-95 -571 5 -245 19 -327 71 -429 63 -125 241 -219 436 -230 54 -3 121 0 155 6
121 23 247 105 305 200 14 22 29 39 34 38 4 -2 9 -48 10 -102 l1 -100 380 0
380 0 3 810 c4 1011 -8 1271 -64 1414 -31 80 -67 133 -132 193 -139 130 -294
187 -562 208 -74 5 -144 9 -155 8 -11 -1 -38 -3 -60 -5z m185 -1745 c-1 -183
-5 -353 -9 -378 -12 -58 -48 -90 -101 -90 -53 0 -88 18 -107 54 -25 48 -38
238 -25 369 13 138 24 175 65 229 34 45 151 148 167 148 6 0 10 -120 10 -332z"/>
                    <path d="M5990 8695 l0 -1295 403 2 402 3 3 1293 2 1292 -405 0 -405 0 0
-1295z"/>
                </g>
            </svg></a>
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