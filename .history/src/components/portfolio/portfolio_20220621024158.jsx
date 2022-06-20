import React from 'react';
import './portfolio.style.css';

const portfolio = () => {
    return (
        <section id='#portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <div className="portfolio__item">
                    <div className="portfolio__item-img">

                    </div>
                    <h3>This is Portfolio Title</h3>
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/334/164/datas/original.png" className='btn btn-primary'>Live Demo</a>
                </div>
            </div>
        </section>
    );
};

export default portfolio;