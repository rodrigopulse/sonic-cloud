import React from 'react';
import './Home.scss';
import Hero from '../../componentes/Hero/Hero';
import Chamada from '../../componentes/Chamada/Chamada';
import Footer from '../../componentes/Footer/Footer';
import iconeServidor from '../../assets/icones/icone-servidor.svg';
import iconeNuvem from '../../assets/icones/icone-nuvem.svg';

class Home extends React.Component {
	render(){
		return(

			<div className='container'>

				<Hero
						titulo = "Telefonia em nuvem"
						subtitulo = "Plataforma de Comunicação Panasonic em nuvem com serviço personalizado."
						linkBotao = "#"
				/>

				<div className="container container--max">
						<div className="servicos-home">
								<div className="servicos-home__conteudo">
										<p>Nosso serviço agrega em um único valor aparelho, linha, ligações ilimitadas, softphone mobile, softphone para Windows, call center, gravação, tudo isso com suporte técnico presencial e remoto.</p>
										<p>
												<a className="botao-padrao" href="/sobre">Saiba Mais</a>
										</p>
								</div>
								<div className="servicos-home__icone">
										<img src={iconeServidor} />
								</div>
						</div>
				</div>

				<div className="container container--max">
						<div className="servicos-home">
								<div className="servicos-home__icone servicos-home__icone--esquerda">
										<img src={iconeNuvem} />
								</div>
								<div className="servicos-home__conteudo">
										<p>
												Como a sua telefonia estará em nuvem, conseguimos aumentar e diminuir ramais da sua empresa remotamente, sem cabos, sem hardwares imensos, sem dores de cabeça.
										</p>
										<p>
												<a className="botao-padrao" href="/sobre">Saiba Mais</a>
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