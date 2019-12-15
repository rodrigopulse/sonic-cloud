import React from 'react';
import {Helmet} from "react-helmet";
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Hero from '../../componentes/Hero/Hero';
import Chamada from '../../componentes/Chamada/Chamada';
import Whats from '../../componentes/Whats/Whats';
import './Servicos.scss';
//Imagens
import imagemTelefone from '../../assets/img/servicos/telefone.jpg';
import imagemSoftPhone from '../../assets/img/servicos/soft-phone.jpg';
import imagemSoftPhoneMobile from '../../assets/img/servicos/soft-phone-mobile.jpg';
import imagemServidor from '../../assets/img/servicos/servidor-tier-3.jpg';
import imagemCallCenter from '../../assets/img/servicos/ideal-call-center.jpg';
import imagemHero from '../../assets/img/hero/hero-home-desktop.jpg';

class Servicos extends React.Component {
	constructor() {
		super()
		this.state = { isMobile: '' };
	}
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		if (window.innerWidth < 768 ) {
			this.state.isMobile = true;
		} else {
			this.state.isMobile = false;
		}
		return (
			<div className='container container-servicos'>

				<Helmet>
						<meta charSet="utf-8" />
						<title>Serviços de Telefonia em Nuvem - Sonic Cloud</title>
						<meta name="description" content="Veja nossos serviços de Telefonia em Nuvem e contrate hoje mesmo a Sonic Cloud para cuidar da sua empresa." />
				</Helmet>

				<Header
					paginaAtual = 'servicos'
				/>

				<Hero
					titulo = "Nossos Serviços"
					subtitulo = "Plataforma de Comunicação Panasonic em nuvem com serviço personalizado"
					imagem = {imagemHero}
				/>

				<div className="servicos-container container--max">
					<div className="servicos-container__conteudo">
						<p>Nossa solução de telefonia hospedada na web, traz para você cliente, maior escalabilidade, mobilidade e eficiência sem investimento.</p>
						<p>Acompanha o aparelho, ligações ilimitadas e a portabilidade.</p>
					</div>
					<div className="servicos-container__imagem">
						<img src={imagemTelefone} alt="Telefone Panasonic"/>
					</div>
				</div>

				<div className="servicos-container container--max">
				{ this.state.isMobile ? (
					<img className="imagem-soft-phone" src={ imagemSoftPhoneMobile } alt="Softphone"/>
				) : (
					<img className="imagem-soft-phone" src={ imagemSoftPhone } alt="Softphone"/>
				) }
				</div>

				<div className="servicos-container container--max">
					<div className="servicos-container__imagem servicos-container__imagem--esquerda">
						<img src={imagemServidor} alt="Servidor Tier III"/>
					</div>
					<div className="servicos-container__conteudo">
						<p>Nossa plataforma está alocada em datacenters Tier 3 com disponibilidade de 99,9%.</p>
						<p>Utilizamos servidores Panasonic em nossos data center.</p>
					</div>
				</div>

				<Chamada
					titulo = "Atenda seu ramal de qualquer lugar, basta uma conexão com a internet para que você possa receber chamadas."
					estilo = "azul"
				/>

				<div className="servicos-container container--max">
					<div className="servicos-container__conteudo">
						<p>Possuimos servidores próprios, dos quais administramos, atualizamos e fazemos toda a manutenção. Nenhum aparelho precisa ficar na sua empresa, além dos telefones IPs da Panasonic, que são bonitos, modernos e funcionais.</p>
						<p>Utilizando telefonia em nuvem, fica muito fácil fazer encaminhamento de chamadas. O encaminhamento pode ser feito para qualquer local que tenha uma conexão com a internet, portanto seus colaboradores podem receber ligações enquanto estiverem on-line.</p>
						<p>Outra grande vantagem é escalabilidade, não será preciso trocar o hardware para que sua empresa aumente o número de ramais, nem que você precise chamar um técnico para isso, fazemos tudo remotamente.</p>
					</div>
					<div className="servicos-container__imagem">
						<img src={imagemCallCenter} alt="Ideal para Call Center"/>
					</div>
				</div>

				<Chamada
					titulo = "Tenha todo o seu sistema de telefonia na palma da sua mão."
					estilo = "azul"
				/>

				<Footer />
				<Whats />
			</div>
		);
	}

}
export default Servicos ;