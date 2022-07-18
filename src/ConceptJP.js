
import Carousel from "react-bootstrap/esm/Carousel"
import image1 from "./images/bgcastle.jpg"
import image2 from "./images/ninja.jpg"
import image3 from "./images/dragon.jpg"


const ConceptJP = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img width="100%" height="720" alt="image1" src={image1} />
                <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h3 className="concepttitle">--- OVERVIEW ---</h3>
                    <p className="concepttext">Dark Souls IVは、フロムソフトウェアによって開発されたアクションロールプレイングビデオゲームであり、PlayStation 5、Xbox One、および MicrosoftWindows 用に BandaiNamco によって公開されます。 「DarkSouls」シリーズの4番目のエントリーである DarkSoulsIV は、2023年7月2日に全世界でリリースされます。</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height="720" alt="image2" src={image2} />
                <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h3 className="concepttitle">--- CHARACTERS ---</h3>
                    <p className="concepttext">キャラクターの外観をカスタマイズして、独自の武器、装備、魔法を選択できます。 シニアメイジになるか、戦士としての力ですべてを破壊するかを選択できます。 キャラクターの成長に合わせて選択した内容は、プレイスタイルに合わせてさまざまなクラスに反映されます。</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height="720" alt="image3" src={image3} />
                <Carousel.Caption style={{ backgroundColor: ' rgba(0, 0, 0, 0.5)' }}>
                    <h3 className="concepttitle">--- COMBAT ---</h3>
                    <p className="concepttext">また、魔法や矢などの長距離武器や、接近戦のブレードファイティングも使用できるようになります。 ステルスにあなたを殺します
                        影から敵を倒したり、友達を召喚してオッズを均等にしたりできます。 課題を克服するのに役立つ多数の戦略的オプションが利用可能です。</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default ConceptJP;