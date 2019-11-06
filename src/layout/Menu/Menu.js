import React from 'react';
import Telefone from '../../assets/icones/icone-telefone.svg';
import './Menu.scss';

class Menu extends React.Component {
    render() {
        return(
            <div className="menu">
                <ul className="menu__ul">
                    <li className="menu__li">
                        <a className="menu__link" href="/">Home</a>
                    </li>
                    <li className="menu__li">
                        <a className="menu__link" href="/servicos">Serviços</a>
                    </li>
                    <li className="menu__li">
                        <a className="menu__link" href="/contato">Contato</a>
                    </li>
                    <li className="menu__li">
                        <a className="menu__link" href="telefone">
                            <img src={Telefone} alt="Ícone Telefone" />
                            <span>11 99889-7890</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

}
export default Menu;