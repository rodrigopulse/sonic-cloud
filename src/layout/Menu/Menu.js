import React from 'react';
import Telefone from '../../assets/icones/icone-telefone.svg';
import './Menu.scss';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
	render() {

		return(
			<div className="menu">
				<ul className="menu__ul">
					<li className="menu__li">
						<NavLink className="menu__link" to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
					</li>
					<li className="menu__li">
						<NavLink className="menu__link" activeClassName="menu__link menu__link--ativo" to={`${process.env.PUBLIC_URL}/servicos`}>Serviços</NavLink>
					</li>
					<li className="menu__li">
						<NavLink className="menu__link" activeClassName="menu__link menu__link--ativo" to={`${process.env.PUBLIC_URL}/contato`}>Contato</NavLink>
					</li>
					<li className="menu__li">
						<div className="menu__link-fone">
							<img src={Telefone} alt="Ícone Telefone" />
							<span className="">11 5060-3000</span>
						</div>
					</li>
				</ul>
			</div>
		);
	}

}
export default Menu;