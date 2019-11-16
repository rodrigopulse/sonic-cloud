import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import '../../assets/sass/botoes.scss'
import './HeroVideo.scss';
import VideoHero from '../../assets/img/hero/bg-sonic-cloud.mp4';
class HeroVideo extends React.Component {
    constructor( props ) {
        super( props );
        const estiloThumb = {
            backgroundImage: 'url(' + this.props.imagem + ')'
        }
        var dados = {
            titulo: this.props.titulo,
            subtitulo: this.props.subtitulo,
            linkBotao: this.props.linkBotao
        }
        if(dados.linkBotao) {
            var isBotao = true;
        }
        this.state = { estiloThumb, dados, isBotao };
    }
    render() {
        return(
            <div className="hero-video">
                <div className="hero-video__conteudo">
                    <h1 className="hero-video__titulo">{this.state.dados.titulo}</h1>
                    <h2 className="hero-video__subtitulo">{this.state.dados.subtitulo}</h2>
                    {this.state.isBotao ? (
                        <Link className="botao-padrao" to={`${process.env.PUBLIC_URL}/contato`}>Entrar em Contato</Link>
                    ) : (null)}
                </div>
                <div className="hero-video__overlay"></div>
                <video id="background-video" muted loop autoPlay>
                    <source src={VideoHero} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }

}
export default HeroVideo;