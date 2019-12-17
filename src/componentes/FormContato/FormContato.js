import React from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import './FormContato.scss';
import '../../assets/sass/botoes.scss';

class FormContato extends React.Component {
	state = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
	}

	handleSubmit(e) {
		e.preventDefault()
		const{email, nome, telefone, mensagem} = this.state;
		axios.post('https://cors-anywhere.herokuapp.com/https://vagalumeria.com.br/sendmail',
		{
			emailSend: email,
			nome: nome,
			telefone: telefone,
			mensagem: mensagem
		})
		.then(function(){this.resetForm()})
		.catch(function(error){console.log('erro: ', error)});
	}
	resetForm() {
    this.setState({
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
		})
		alert("Mensagem enviada com sucesso");
  }
	handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
	render() {
		return(
			<div className='formulario-contato'>
				<form  onSubmit={this.handleSubmit.bind(this)}>
						<div className="formulario-contato__grupo" id="formContato">
							<input
								name="nome"
								value={this.state.nome}
								onChange={this.handleChange.bind(this, 'nome')}
								className="formulario-contato__input"
								placeholder="Digite seu nome"
								required
							/>
						</div>
						<div className="formulario-contato__grupo">
							<input
								name="email"
								value={this.state.email}
								onChange={this.handleChange.bind(this, 'email')}
								className="formulario-contato__input"
								placeholder="Digite seu E-mail"
								required
							/>
						</div>
						<div className="formulario-contato__grupo">
							<input
								name="telefone"
								value={this.state.telefone}
								onChange={this.handleChange.bind(this, 'telefone')}
								className="formulario-contato__input"
								placeholder="Digite seu Telefone"
							/>
						</div>
						<div className="formulario-contato__grupo">
							<textarea
								name="mensagem"
								value={this.state.mensagem}
								onChange={this.handleChange.bind(this, 'mensagem')}
								className="formulario-contato__textarea"
								placeholder="Escreva sua mensagem"
								required
								rows="10"
							></textarea>
						</div>
						<input className="botao-padrao" type="submit" value="Enviar Mensagem" />
				</form>
			</div>
		);
	}

}
export default FormContato;