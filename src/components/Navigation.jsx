const image = require('../img/jakina-inc-logo.png');
function Navigation() {

    return (

        <nav className="container">
            <div className='logo'>
                <img src={image} alt="logo here" className='logo-image' />
            </div>
            <ul>
                <li href="#">Accueil</li>
                <li href="#">Menu</li>
                <li href="#">Evenement</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <div className='class_btn'>
                <button>Sign in</button>
                <button className='secondary-btn'>Login</button>
            </div>
        </nav>
    );
};

export default Navigation;