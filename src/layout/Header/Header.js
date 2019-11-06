import React from 'react';
import Menu from '../Menu/Menu';
import './Header.scss';
import Logo from '../../assets/img/logo.svg';

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <div className="header__logo">
                    <img src={Logo} alt="Logo Sonic Cloud" />
                </div>
                <Menu />
            </header>
        );
    }

}
export default Header;