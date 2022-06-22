import './portfolio.style.css';
import portfolioData from '../../assets/portfolioData.json';

const Portfolio = () => {

    return (
        <section id='#portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">

            {
                portfolioData.map(({img, title})=>{
                    return(
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
                    )
                })
            }

                
               
            </div>
        </section>
    );
};

export default Portfolio;