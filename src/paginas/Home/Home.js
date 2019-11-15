import React from 'react';
import {Helmet} from "react-helmet";

import './Home.scss';
import Hero from '../../componentes/Hero/Hero';
import HeroVideo from '../../componentes/HeroVideo/HeroVideo';
import Chamada from '../../componentes/Chamada/Chamada';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
// Imagens
import iconeServidor from '../../assets/icones/icone-servidor.svg';
import iconeNuvem from '../../assets/icones/icone-nuvem.svg';
import imagemHero from '../../assets/img/hero/hero-home-desktop.jpg';

class Home extends React.Component {
	constructor() {
		super()
		this.state = { isMobile: '' };
	}
	render(){
		if (window.innerWidth < 768 ) {
			this.state.isMobile = true;
		} else {
			this.state.isMobile = false;
		}
		return(

			<div className='container container-home'>
				<Helmet>
						<meta charSet="utf-8" />
						<title>Telefonia em Nuvem - Sonic Cloud</title>
						<meta name="description" content="Instale na sua empresa a Telefonia em Nuvem da Sonic Cloud, esteja pronto para o futuro!" />
				</Helmet>

				<Header
					paginaAtual = 'home'
				/>
				{!this.state.isMobile &&
				<HeroVideo
					titulo = "Telefonia em nuvem"
					subtitulo = "Plataforma de Comunicação Panasonic em nuvem com serviço personalizado."
					linkBotao = "#"
				/> }
				{this.state.isMobile &&
				<Hero
					titulo = "Telefonia em nuvem"
					subtitulo = "Plataforma de Comunicação Panasonic em nuvem com serviço personalizado."
					linkBotao = "/contato"
					imagem = {imagemHero}
				/> }
				

				<div className="container container--max">
					<div className="servicos-home">
						<div className="servicos-home__conteudo">
							<p>Nosso serviço agrega em um único valor aparelho, linha, ligações ilimitadas, softphone mobile, softphone para Windows, call center, gravação, tudo isso com suporte técnico presencial e remoto.</p>
							<p>
								<a className="botao-padrao" href="/servicos">Saiba Mais</a>
							</p>
						</div>
						<div className="servicos-home__icone">
							<img src={iconeServidor} alt="Ícone Servidores"/>
						</div>
					</div>
				</div>

				<div className="container container--max">
						<div className="servicos-home">
							<div className="servicos-home__icone servicos-home__icone--esquerda">
								<img src={iconeNuvem} alt="Ícone Cloud"/>
							</div>
							<div className="servicos-home__conteudo">
								<p>
										Como a sua telefonia estará em nuvem, conseguimos aumentar e diminuir ramais da sua empresa remotamente, sem cabos, sem hardwares imensos, sem dores de cabeça.
								</p>
								<p>
										<a className="botao-padrao" href="/servicos">Saiba Mais</a>
								</p>
							</div>
						</div>
				</div>

				<Chamada
					titulo = "O primeiro produto nesse segmento do Brasil utilizando tecnologia da Panasonic"
					estilo = "azul"
				/>

				<Footer />

			</div>

		);
	}

}
export default Home;