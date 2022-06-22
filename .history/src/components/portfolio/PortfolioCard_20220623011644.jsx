import React from 'react';
import './portfolio.style.css'

const PortfolioCard = ({profileData}) => {
    const {img,t}
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