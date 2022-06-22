import './portfolio.style.css';
import portfolioData from '../../assets/portfolioData.json';

const Portfolio = () => {

    return (
        <section id='#portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">

            portfolioData.map(({},index)=)

                <div className="portfolio__item">
                    <div className="portfolio__item-img">
                        {/* <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/> */}
                    </div>
                    <h3>This is Portfolio Title</h3>
                    
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="" className='btn btn-primary'>Live Demo</a>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default Portfolio;