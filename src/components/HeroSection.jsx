const Hero_image = require('../img/light-field-lab-concert-concept-art.jpeg');
const Hip_amazon = require('../img/chariot.png');
const Hip_ebay = require('../img/chariot.png');

function HeroSection() {

    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>LET US IN DA ROCK'N ROLL</h1>
                <p>Music can change the World because it changes PEOPLE</p>
                <div className="hero-btn">
                    <button>Shop now</button>
                    <button className='secondary-btn'>Category</button>
                </div>
                <div className="shopping">
                    <p>Available also on</p>
                </div>
                <div className="platform">
                    <img src={Hip_amazon} alt="Amazon here" className='hip_image' />
                    <img src={Hip_ebay} alt="Ebay here" className='hip_image' />
                </div>
            </div>
            <div className="Hero-image">
                <img src={Hero_image} alt="Hero_image here" className='hi_hero' />
            </div>
        </main>
    )

};

export default HeroSection;