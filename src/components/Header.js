import React from 'react';
const Header = (props) =>{
    return (
        <div>
            <nav>
                <div className="nav-wrapper ligth-blue darken-2">
                    <a className="brand-logo">{props.titulo}</a>
                </div>
            </nav>
        </div>
    );
}
export default Header;