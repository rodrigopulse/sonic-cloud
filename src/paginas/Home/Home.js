import React from 'react';
import Hero from '../../componentes/Hero/Hero'

class Home extends React.Component{
    render(){
        return(
            <div className='container'>
                <Hero
                    titulo = "Telefonia em nuvem"
                    subtitulo = "Plataforma de Comunicação Panasonic em nuvem com serviço personalizado."
                    linkBotao = "#"
                />
            </div>
        );
    }

}
export default Home;