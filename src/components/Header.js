import React from 'react';
const Header = (props) =>{
    return (
        <div>
            <nav>
                <div className="nav-wrapper darken-2">
                    <span className="brand-logo">{props.titulo}</span>
                </div>
            </nav>
        </div>
    );
}
export default Header;