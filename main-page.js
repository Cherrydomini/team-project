import React from 'react';
import './main-page.css';

function Main(){
    return(
        <div class="wrapper">
            <div class="header">
                <div class='logo'>
                    Fashion Site
                </div>
                <ul class="nav">
                    <li>Event</li>
                    <li>Shop</li>
                    <li>Style</li>
                    <li>Search</li>
                </ul>
            </div>
            <div class="mainimg">
                <div class="gallery"></div>
            </div>
            <div class="content">
                <div class="men"><a>MEN</a></div>
                <div class="women"><a>WOMEN</a></div>
                <div class="accessories"><a>ACCESORIES</a></div>
            </div>
            <div class="body"></div>
            <div class="footer">
                <ul class="sub_footer">
                    <li>이용안내</li>
                    <li>고객지원</li>
                    <li>고객센터</li>
                    <li>Address</li>
                    <li>회사정보</li>
                </ul>
            </div>
        </div>
    )
}

export default Main;