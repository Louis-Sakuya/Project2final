import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import background2 from "./images/firekeeper.jpg"

const Story = () => {
    return (
        <div className="background-pic2" style={{ backgroundColor: 'black', backgroundImage: `url(${background2})`, backgroundRepeat: "no-repeat" }}>
            <Row>
                <Col md={3}>
                </Col>
                <Col className="text-center" md={6} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h2 className="concepttitle">---PROLOGUE---</h2>
                    <p className="storytitle"> /*The story is designed to be hard to follow, but that's how Dark Souls fans like it*/</p>
                    <p className="storytext">The Age of Rekindling the Flame has lasted for a long time since
                        the last age of Lord of Cinder usurping the flame and became the Lord of Hollows.
                        Everyone knew the new Age of Hollows was coming, but they were wrong. Endless
                        darkness has swept over everything, and the age of darkness has come. A new power
                        has emerged in the Dark Ages: the Curse. As a result of this power all the dead,
                        slumbering, imprisioned Lords are brought to life again, and are now known as
                        Reborners. Despite controlling this world, all of them are aware it is another
                        endless loop,
                        just like the Age of rekindling the flame.</p>
                    <p className="storytext">Now that the flames have dissipated, the power of the curse
                        continues to erode the world, and everyone is living in this catastrophe, suffering
                        but unable to die.</p>
                    <p className="storytext">You, Gwyn's former knight Artorias, awakened by the power of the
                        curse, still have the power of the abyss inside your body. And the only thing you
                        can do to end this meanless
                        world from The Curse is to let this world fall back into the Abyss again.
                        Defeat all the Reborners, absorb their curse powers.</p>
                    <p className="storytext">To become the Lord of the Abyss.</p>
                    <br></br>
                </Col>
                <Col md={3}>
                </Col>
            </Row>
        </div>
    );
}

export default Story;