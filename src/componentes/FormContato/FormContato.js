import React from 'react';
import axios from 'axios';
import MaskedFormControl from 'react-bootstrap-maskedinput'
import Carregando from '../Carregando/Carregando';
import './FormContato.scss';
import '../../assets/sass/botoes.scss';

class FormContato extends React.Component {
	constructor(props){
		super(props)
	}
	state = {
		nome: '',
		telefone: '',
		email: '',
		mensagem: '',
		showModal: false,
		carregando: false
	}
  handleSubmit(e) {
		e.preventDefault();
		this.setState({carregando: true})
		const { nome, telefone, email, mensagem } = this.state
    const data = new FormData ()
    data.append ('nome', nome)
    data.append ('telefone', telefone)
    data.append ('email', email)
		data.append ('mensagem', mensagem)
    axios.post('https://panasonicpabxemnuvem.com.br/sendmail/index.php', data)
    .then( (response) => {
			this.setState({
				nome: '',
				telefone: '',
				email: '',
				mensagem: '',
				showModal: true,
				carregando: false
			});
    })
    .catch( (response) => {
			this.setState({carregando: false});
			alert('Erro a enviar a sua mensagem, por favor tente novamente');
      console.log('Erro :', response);
    });
	};
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
	}
	render() {
		return(
			<div className='formulario-contato'>
				{this.state.carregando ? <Carregando /> : null}
				<form  onSubmit={this.handleSubmit.bind(this)}>
						<div className="formulario-contato__grupo" id="formContato">
							<input
								id="nome"
								value={this.state.nome}
								onChange={e => this.setState({ nome: e.target.value })}
								className="formulario-contato__input"
								placeholder="Digite seu nome"
								required
							/>
						</div>
						<div className="formulario-contato__grupo">
							<input
								id="email"
								value={this.state.email}
								onChange={e => this.setState({ email: e.target.value })}
								className="formulario-contato__input"
								placeholder="Digite seu E-mail"
								required
							/>
						</div>
						<div className="formulario-contato__grupo">
							<MaskedFormControl
								mask='(11) 1111-11111'
								id="telefone"
								value={this.state.telefone}
								onChange={e => this.setState({ telefone: e.target.value })}
								className="formulario-contato__input"
								placeholder="Digite seu Telefone"
							/>
						</div>
						<div className="formulario-contato__grupo">
							<textarea
								id="mensagem"
								value={this.state.mensagem}
								onChange={e => this.setState({ mensagem: e.target.value })}
								className="formulario-contato__textarea"
								placeholder="Escreva sua mensagem"
								required
								rows="10"
							></textarea>
						</div>
						<input className="botao-padrao" type="submit" value="Enviar Mensagem" />
				</form>
				{ this.state.showModal &&
					<div className="modal">
						<div className="modal__mensagem">
							<h3>Mensagem enviada com sucesso!</h3>
							<button className="botao-padrao modal__botao" onClick={e => this.setState({ showModal: false })}>Ok</button>
						</div>
					</div>
				}
			</div>
		);
	}

}
export default FormContato;