import React from 'react';

import '../../css/Intro.css';

const Intro = () => (
    <div className="terminal-container">
        <div className="terminal">
            <div className="css-typing">
                <h5>
                    <span className="orange">briannamansell</span> at&nbsp;
                    <span className="yellow">World-Wide-Web</span> in&nbsp;
                    <span className="green">~/workspace</span> on&nbsp;
                    <span className="blue">develop</span>
                </h5>
                <p className="type-in"><span className="user">$</span>Hello, world!</p>
            </div>
        </div>
    </div>
);

export default Intro;