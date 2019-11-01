import React from 'react';
import Thumb from '../../assets/img/hero/hero-home-desktop.jpg';

import '../../assets/sass/botoes.scss'
import './Hero.scss';
import Curvas from './HeroCurvas.svg';

class Hero extends React.Component {
    constructor() {
        super();
        const estiloThumb = {
            backgroundImage: 'url(' + Thumb + ')'
        }
        this.state={ estiloThumb };
    }
    render(){
        return(
            <div className="hero"  style={ this.state.estiloThumb }>
                <div className="hero__conteudo">
                    <h1 className="hero__titulo">Telefonia em nuvem</h1>
                    <h2 className="hero__subtitulo">Plataforma de Comunicação Panasonic em nuvem com serviço personalizado.</h2>
                    <a className="botao-padrao" href="#">Entrar em Contato</a>
                </div>
                <div className="hero__curvas">
                    <img src={Curvas} alt="Curvas" />
                </div>
            </div>
        );
    }

}
export default Hero;