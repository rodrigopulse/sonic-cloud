import React from 'react';
import Telefone from '../../assets/icones/icone-telefone.svg';
import './Menu.scss';

class Menu extends React.Component {
	constructor( props ) {
		super( props );
		var paginaAtual = this.props.paginaAtual;
		this.state = { paginaAtual };
	}
	render() {
		if(this.state.paginaAtual === 'home') {
			var homeClass = 'menu__link menu__link--ativo';
		} else {
			// eslint-disable-next-line no-redeclare
			var homeClass = 'menu__link';
		}
		if(this.state.paginaAtual === 'servicos') {
			var servicosClass = 'menu__link menu__link--ativo';
		} else {
			// eslint-disable-next-line no-redeclare
			var servicosClass = 'menu__link';
		}
		if(this.state.paginaAtual === 'contato') {
			var contatoClass = 'menu__link menu__link--ativo';
		} else {
			// eslint-disable-next-line no-redeclare
			var contatoClass = 'menu__link';
		}
		return(
			<div className="menu">
				<ul className="menu__ul">
					<li className="menu__li">
						<a className={homeClass} href="/">Home</a>
					</li>
					<li className="menu__li">
						<a className={servicosClass} href="/servicos">Serviços</a>
					</li>
					<li className="menu__li">
						<a className={contatoClass} href="/contato">Contato</a>
					</li>
					<li className="menu__li">
						<a className="menu__link-fone" href="telefone">
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