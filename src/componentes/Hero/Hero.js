import React from 'react';
import Thumb from '../../assets/img/hero/hero-home-desktop.jpg';

import './Hero.css';

class Hero extends React.Component {
    constructor() {
        super();
        const estiloThumb = {
            backgroundImage: 'url(' + Thumb + ')'
        }
        this.state={estiloThumb};
    }
    render(){
        return(
            <div className="hero">
                <div className="hero__thumb" style={ this.state.estiloThumb }></div>
            </div>
        );
    }

}
export default Hero;