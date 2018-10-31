import React, { Component } from 'react';
import "./Counter.css";
import StyledProgressbar from 'react-circular-progressbar';

export default class Counter extends Component {
    render() {
        const percentage = 40;
        return (
            <div className="englobeCounter">
                <p className="date">Mercredi 31 octobre</p>
                <div className="counterHome" style={{ width: '35%' }}>
                    <StyledProgressbar
                        percentage={percentage}
                        text={`${percentage} Kcal restantes`}
                        styles={{
                            path: { stroke: `rgb(102, 100, 114, ${percentage / 100})` },
                            text: { fill: '#ffffff', fontSize: '10px' },
                        }}
                    />
                </div >
            </div>
        )
    }
}
