import React from 'react';
import './Sugarcard.css';

class Sugarcard extends React.Component {
    state = {
        percentage: 0,

    }


    AddCalory = () => (
        this.setState({
            percentage: this.state.percentage + this.props.score

        }))

    render() {

        console.log("percentage", this.state.percentage)
        const { name, image } = this.props

        return (

            <div className="vignettes">

                <div className="sc-unit-vignette">
                    <div><img className="sc-picture" src={image} alt="candy" /></div>
                    <p className="sc-name">{name}</p>
                    <input type='button' value="J'en ai mangé !!" className="sc-button" onClick={this.AddCalory} />

                </div>
            </div>
        )
    }
}

export default Sugarcard;