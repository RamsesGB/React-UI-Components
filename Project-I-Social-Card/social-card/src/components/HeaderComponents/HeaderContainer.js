import React from 'react';
import './Header.css';

// import header contents
import Thumbimg from '../HeaderComponents/ImageThumbnail';
import MyTitle from '../HeaderComponents/HeaderTitle';
import HeaderParagraph from '../HeaderComponents/HeaderContent';

const HeaderContainer = () => {
    return (
        <div className='HeaderBox'>
            <Thumbimg />
            <MyTitle />
            <HeaderParagraph />
        </div>
    );
};

export default HeaderContainer;