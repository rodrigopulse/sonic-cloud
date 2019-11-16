import React from 'react';
import './Whats.scss';
import WhatsLogo from '../../assets/img/whats.png';
class Whats extends React.Component {
	
	render() {
		return(
			<div className="whats">
				<a href="" target="_blank">
					<img src={WhatsLogo} alt="Whats App"/>
				</a>
			</div>
		);
	}

}
export default Whats;