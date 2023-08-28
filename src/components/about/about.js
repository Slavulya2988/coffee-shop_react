import './about.css';
import girl from './girl_with_coffe.jpg';
import coffee from '../img/coffee-beans-black.svg';

const About = () => {
    return(
        <section className="about">
            <div className="about__container">
                <div className="about__content">
                    <div className="about__img">
                        <img src={girl} alt=""/>
                    </div>
                    <div className="about__descr">
                        <h2 className="about__title title--article">About our beans</h2>
                        <div className="devider">
                            <div className="devider__img">
                                <img src={coffee} alt="coffee"/>
                            </div>
                        </div>
                        <div className="about__item">
                        <p> Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p> Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
                        <p> As greatly removed calling pleased improve an. </p>
                        <p> Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face. </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default About;
