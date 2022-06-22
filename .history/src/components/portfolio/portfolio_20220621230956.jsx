import './portfolio.style.css';
import portfolioData from '../../assets/portfolioData.json';

const Portfolio = () => {

    return (
        <section id='#portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">

            portfolioData.map(()=>{
                return(
                        
                )
            })

                
               
            </div>
        </section>
    );
};

export default Portfolio;