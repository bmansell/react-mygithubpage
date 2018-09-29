import React, {Component} from 'react';

import '../../css/Intro.css';

class Intro extends Component {
    render() {
        return (
            <div className="terminal-container">
                <div className="terminal">
                    <div className="css-typing">
                        <h5>
                            <span className="orange">briannamansell</span> at <span className="yellow">Brianna-Mansells-Website</span> in <span className="green">~/workspace</span> on <span className="blue">develop</span>
                        </h5>
                        <p className="type-in"><span className="user">$</span>Hello, world!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
