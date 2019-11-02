import React from 'react';
import './Chamada.scss';

class Chamada extends React.Component {
	constructor( props ) {
		super( props );
		var dados = {
			titulo: this.props.titulo,
			estilo: this.props.estilo
		}
		var estiloChamada = 'chamada chamada--' + dados.estilo;
		this.state = { dados, estiloChamada }
	}
	render() {
		return(
			<div className={this.state.estiloChamada}>
				<h3 className='titulo-chamada'>
						{ this.state.dados.titulo }
				</h3>
			</div>
		);
	}

}
export default Chamada;