import React from 'react';
import ''

const PortfolioCard = ({img,title}) => {
    return (
        <div>
             <div className="portfolio__item">
                <div className="portfolio__item-img">
                    <img src={img} alt=""/>
                </div>
                <h3>{title}</h3>
                
                <div className="portfolio__item-cta">
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="" className='btn btn-primary'>Live Demo</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;