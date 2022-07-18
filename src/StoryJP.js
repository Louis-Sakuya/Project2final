import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import background2 from "./images/firekeeper.jpg"

const StoryJP = () => {
    return (
        <div className="background-pic2" style={{ backgroundColor: 'black', backgroundImage: `url(${background2})`, backgroundRepeat: "no-repeat" }}>
            <Row>
                <Col md={3}>
                </Col>
                <Col className="text-center" md={6} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h2 className="concepttitle">---PROLOGUE---</h2>
                    <p className="storytitle"> /*The story is designed to be hard to follow, but that's how Dark Souls fans like it*/</p>
                    <p className="storytext">炎を再燃させる時代はそれ以来長い間続いてきました
                        燃えがらの主の最後の時代が炎を吹き飛ばし、くぼみの主になりました。 誰もが新しいエイジオブホロウズが来ることを知っていましたが、彼らは間違っていました。 果てしない闇がすべてを覆い、闇の時代が到来しました。 暗黒時代に新しい力が出現しました：呪い。 この力の結果として、すべての死んだ、眠っている、暗示されている主が再び生き返り、今では生まれ変わった人として知られています。 この世界を支配しているにもかかわらず、彼らは皆、炎を再燃させる時代のように、それが別の無限のループであることを認識しています。</p>
                    <p className="storytext">炎が消えた今、呪いの力は世界を侵食し続けており、誰もがこの大惨事の中で苦しんでいるが死ぬことはできない。</p>
                    <p className="storytext">呪いの力で目覚めたグウィンの元騎士アルトリアスは、今でもあなたの体の中に深淵の力を持っています。 そして、呪いからこの無意味な世界を終わらせるためにあなたができる唯一のことは、この世界を再び深淵に陥らせることです。 すべてのリボーンを倒し、彼らの呪いの力を吸収してください。</p>
                    <p className="storytext">深淵の主になること。</p>
                    <br></br>
                </Col>
                <Col md={3}>
                </Col>
            </Row>
        </div>
    );
}

export default StoryJP;