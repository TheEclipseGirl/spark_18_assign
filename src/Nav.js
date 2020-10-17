import React from 'react';

class Nav extends React.Component{
    render() {
        return(
            <nav>
                <div className="nav-logo">
                    <p>LOGO</p>
                </div>
                <div className="nav-links">
                    <ul className="nav-links-container">
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p>My Portfolio</p>
                        </li>
                        <li>
                            <p>Clients</p>
                        </li>
                        <li>
                            <p>Get in touch</p>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;