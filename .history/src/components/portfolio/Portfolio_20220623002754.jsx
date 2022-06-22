import './portfolio.style.css';
import PortfolioCard from './PortfolioCard';
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
                       <PortfolioCard profileData={}/>
                    )
                })
            }

                
               
            </div>
        </section>
    );
};

export default Portfolio;