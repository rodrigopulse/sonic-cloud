import React from 'react';
import Menu from '../Menu/Menu';
import HamburgerMenu from 'react-hamburger-menu';
import './Header.scss';
import Logo from '../../assets/img/logo.svg';

class Header extends React.Component {
	constructor(props) {
		super(props);
		var paginaAtual = this.props.paginaAtual;
		this.state = {paginaAtual}
	}
	handleClick() {
		var element = document.getElementsByClassName('menu')[0];
		element.classList.toggle("menu--ativo");
		this.setState({
				open: !this.state.open
		});
	}
	render() {
		return(
			<header className="header">
				<div className="menu-hamburguer-container">
					<HamburgerMenu
						isOpen={this.state.open}
						menuClicked={this.handleClick.bind(this)}
						width={22}
						height={18}
						strokeWidth={2}
						rotate={0}
						color='white'
						borderRadius={10}
						animationDuration={0.5}
					/>
				</div>
				<div className="header__logo">
					<img src={Logo} alt="Logo Sonic Cloud" />
				</div>
				<Menu />
			</header>
		);
}

}
export default Header;