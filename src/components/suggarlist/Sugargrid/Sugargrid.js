import React, { Component } from 'react'
import Sugarcard from './Sugarcard'
import './Sugargrid.css';

export default class Sugargrid extends Component {
    state = {
        sugar: [{
            name: "Fraises Tagada",
            score: 14,
            image: "https://www.zupimages.net/up/18/44/hlyl.jpg"
        },

        {
            name: "Dragibus",
            score: 14,
            image: "https://zupimages.net/up/18/44/t98q.jpg"
        },

        {
            name: "Nounours",
            score: 21,
            image: "https://i.postimg.cc/8zTLGtsz/nounours.jpg"
        },

        {
            name: "M&M's",
            score: 26,
            image: "https://i.postimg.cc/fTzbTF7p/mnms.jpg"
        },

        {
            name: "Bouteille Coca",
            score: 13,
            image: "https://i.postimg.cc/0QvsXMcF/coca-boisson.jpg"
        },

        {
            name: "Crocodile",
            score: 14,
            image: "https://i.postimg.cc/RZwpsPyC/crocodiles.jpg"
        },

        {
            name: "Shamallow",
            score: 14,
            image: "https://www.zupimages.net/up/18/44/lcw9.jpg"
        },

        {
            name: "Stroumpfs",
            score: 13,
            image: "https://i.postimg.cc/1zjW4LNH/schtroumpf.jpg"
        },

        {
            name: "Coca",
            score: 15,
            image: "https://zupimages.net/up/18/44/t98q.jpg"
        },

        {
            name: "Nutella",
            score: 26,
            image: "https://i.postimg.cc/Sx8QZhmX/nutella.jpg"
        }
        ],
    }

    render() {

        if (this.state.sugar.length > 0) {
            console.log("hello", this.state.sugar)
            return (
                <div className="elem-sugargrid">
                    {this.state.sugar.map((item, index) => {
                        if (index < 10) {
                            return <Sugarcard
                                key={index}
                                name={item.name}
                                score={item.score}
                                image={item.image}

                            />
                        }
                    })
                    }


                </div>
            )
        }
        return (
            <div>
                <h1>Patience !!</h1>
            </div>
        )
    }
}