import React from 'react';
import './Home.scss';
import Hero from '../../componentes/Hero/Hero';
import iconeServidor from '../../assets/icones/icone-servidor.svg';

class Home extends React.Component{
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
            </div>
        );
    }

}
export default Home;