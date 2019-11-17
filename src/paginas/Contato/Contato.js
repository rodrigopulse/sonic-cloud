import React from 'react';
import {Helmet} from "react-helmet";

//Layout
import Header from '../../layout/Header/Header';
import FormContato from '../../componentes/FormContato/FormContato';
import Hero from '../../componentes/Hero/Hero';
//Imagens
import imagemHero from '../../assets/img/hero/hero-contato-desktop.jpg';

import './Contato.scss';

class Contato extends React.Component {
	render() {
		return(
			<div className='container'>

				<Helmet>
						<meta charSet="utf-8" />
						<title>Contato - Sonic Cloud</title>
						<meta name="description" content="Faça um orçamento com a Sonic Cloud e tenha um serviço de Telefonia em Nuvem pronto para o futuro." />
				</Helmet>

				<Header
					paginaAtual = 'contato'
				/>
				<Hero
					titulo = "Entre em Contato"
					subtitulo = "Teremos um imenso prazer em te atender."
					imagem = {imagemHero}
				/>
				<div className="contato container--max">
					<div className="contato__conteudo">
						<div className="contato__conteudo-item">
							<p className="contato__texto">
								<span>Endereço:</span>
								Rua Ribeiro Lacerda, 283 <br />
								Jd. Da Saúde - São Paulo - SP
							</p>
							<a className="botao-padrao" target="_blank" href="https://goo.gl/maps/W45gYBdTEvGH4yEy8">Ver no mapa</a>
						</div>
						<div className="contato__conteudo-item">
							<p className="contato__texto">
								<span>Telefone:</span>
								11 5060-3000
							</p>
						</div>
						<div className="contato__conteudo-item">
							<p className="contato__texto">
								<span>Whats App:</span>
								11 99898-7998
							</p>
						</div>
					</div>
					<div className="contato__formulario">
						<FormContato />
					</div>
				</div>
			</div>
		);
	}

}
export default Contato;