import React from 'react';
import FormContato from '../../componentes/FormContato/FormContato';
import './Footer.scss';

class Footer extends React.Component {
	render() {
		return(
			<footer className="footer">

				<h3 className="footer__titulo">
					Contato
				</h3>
				<p>
					Entre em contato conosco, teremos o maior prazer em te ajudar a gastar menos e ter maior eficiência na comunicação da sua empresa.
				</p>

				<FormContato />

			</footer>
		);
	}

}
export default Footer;