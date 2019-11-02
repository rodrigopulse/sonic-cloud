import React from 'react';
import './FormContato.scss';
import '../../assets/sass/botoes.scss';

class FormContato extends React.Component {
    render() {
        return(
            <div className='formulario-contato'>
                <form>
                    <div className="formulario-contato__grupo" id="formContato">
                        <label className="formulario-contato__label" for="nome">*Nome:</label>
                        <input className="formulario-contato__input" placeholder="Digite seu nome" />
                    </div>
                    <div className="formulario-contato__grupo">
                        <label className="formulario-contato__label" for="email">*E-mail:</label>
                        <input className="formulario-contato__input" placeholder="Digite seu E-mail" />
                    </div>
                    <div className="formulario-contato__grupo">
                        <label className="formulario-contato__label" for="telefone">Telefone:</label>
                        <input className="formulario-contato__input" placeholder="Digite seu Telefone" />
                    </div>
                    <div className="formulario-contato__grupo">
                        <label className="formulario-contato__label" for="mensagem">*Mensagem:</label>
                        <textarea className="formulario-contato__textarea" placeholder="Escreva sua mensagem" rows="10"></textarea>
                    </div>
                </form>
                <button className="botao-padrao" type="submit" form="formContato" value="Submit">Enviar Mensagem</button>
            </div>
        );
    }

}
export default FormContato;