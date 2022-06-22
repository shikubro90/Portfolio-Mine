import React from 'react';

const PortfolioCard = ({img,title}) => {
    console.log(img)
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