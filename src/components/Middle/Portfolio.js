import PortfolioItem from "./PortfolioItem";

const Portfolio = ({items}) => (
<section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                   {
                       items.map((item, index) => (
                           <PortfolioItem key={index} itemNumber={index + 1} icon = {item.id} />
                       ))
                   }
                </div>
            </div>
        </section>
);

export default Portfolio;