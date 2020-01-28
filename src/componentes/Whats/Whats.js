import React from 'react';
import './Whats.scss';
import WhatsLogo from '../../assets/img/whats.png';
class Whats extends React.Component {
	
	render() {
		return(
			<div className="whats">
				<a href="https://api.whatsapp.com/send?phone=5511981014986" target="_blank">
					<img src={WhatsLogo} alt="Whats App"/>
				</a>
			</div>
		);
	}

}
export default Whats;