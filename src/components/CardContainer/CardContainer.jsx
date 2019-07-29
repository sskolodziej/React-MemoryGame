import React, {Component} from 'react';
import Card from '../Card/Card'

import './CardContainer.css'

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.cards, 
        }
    }

    createCards() {
        return this.state.cards.map(allProperies => {
            return(
                <Card card={allProperies}/>
            );
        });        
    }

    render() {
        return(
            <div className="card-container">
                {this.createCards()}
            </div>
        );
    }
}

export default CardContainer;