import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-bootstrap/esm/Carousel"
import image1 from "./images/bgcastle.jpg"
import image2 from "./images/ninja.jpg"
import image3 from "./images/dragon.jpg"


const Concept = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img width="100%" height="720" alt="image1" src={image1} />
                <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h3 className="concepttitle">--- OVERVIEW ---</h3>
                    <p className="concepttext">Dark Souls IV is an action role-playing video game developed
                        by From Software and will publish by Bandai Namco for PlayStation 5, Xbox One,
                        and Microsoft Windows. The fourth entry in the "Dark Souls" series, Dark Souls
                        IV will release in worldwide in July 2nd 2023.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height="720" alt="image2" src={image2} />
                <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h3 className="concepttitle">--- CHARACTERS ---</h3>
                    <p className="concepttext">You can customize your characters' appearance and choose your own weapons, gear, and magic. You can choose to be a senior mage or destroy everything with your strength as a warrior. The choices you make as your character grows will be reflected in a variety of classes to suit your play style.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height="720" alt="image3" src={image3} />
                <Carousel.Caption style={{ backgroundColor: ' rgba(0, 0, 0, 0.5)' }}>
                    <h3 className="concepttitle">--- COMBAT ---</h3>
                    <p className="concepttext">You will also be able to use long-range weapons such as magic
                        and arrows, as well as close-quarter blade fighting. Stealthily kill your
                        enemies from the shadows, or summon your friends to even the odds. A multitude
                        of
                        strategic options are available to help you overcome the challenge.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default Concept;