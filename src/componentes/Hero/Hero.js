import React from 'react';

import '../../assets/sass/botoes.scss'
import './Hero.scss';
//import Curvas from './HeroCurvas.svg';

class Hero extends React.Component {
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
            <div className="hero"  style={ this.state.estiloThumb }>
                <div className="hero__conteudo">
                    <h1 className="hero__titulo">{this.state.dados.titulo}</h1>
                    <h2 className="hero__subtitulo">{this.state.dados.subtitulo}</h2>
                    {this.state.isBotao ? (
                        <a className="botao-padrao" href={this.state.dados.linkBotao}>Entrar em Contato</a>
                    ) : (null)}
                </div>
                {/* <div className="hero__curvas">
                    <img src={Curvas} alt="Curvas" />
                </div> */}
            </div>
        );
    }

}
export default Hero;