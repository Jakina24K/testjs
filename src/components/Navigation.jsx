const image = require('../img/jakina-inc-logo.png');
function Navigation () {

    return (

        <nav className="container">
            <div className='logo'>
                <img src={image} alt="logo here" className='logo-image'/>
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Evenement</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <button>Login</button>
        </nav>
    );
};

export default Navigation;