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

    onCardClick = (card) => {
        this.props.cardClick(card);
    }

    createCards() {
        return this.state.cards.map(card => {
            return(
                <Card 
                    card={card} 
                    cardClick={this.onCardClick}
                />
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