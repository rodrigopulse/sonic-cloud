import React from 'react';
import Menu from '../Menu/Menu';
import './Header.scss';
import Logo from '../../assets/img/logo.svg';

class Header extends React.Component {
	constructor(props) {
		super(props);
		var paginaAtual = this.props.paginaAtual;
		this.state = {paginaAtual}
	}
	render() {
		return(
			<header className="header">
				<div className="header__logo">
					<img src={Logo} alt="Logo Sonic Cloud" />
				</div>
				<Menu
					paginaAtual = {this.state.paginaAtual}
				/>
			</header>
		);
}

}
export default Header;