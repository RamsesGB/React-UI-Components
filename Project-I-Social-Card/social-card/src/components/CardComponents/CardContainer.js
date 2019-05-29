import React from 'react';
import './Card.css';
import CardBannerImg from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return (
        <div>
            <CardBannerImg />
            <CardContent />
        </div>
    );
};

export default CardContainer;