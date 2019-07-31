import React, {Component} from 'react';

import './Card.css'

class Card extends Component {
    card = null;

    constructor(props) {
        super(props);
        this.state = {
            card: this.props.card,
        }
        this.card = this.props.card;
    }

    handleCardClick = () => {
        this.setState({
            card: this.card
        });
        this.props.cardClick(this.card);
    }

    createCard() {
        const frontSide = this.state.card.flipped || this.state.card.guessed;

        if (!frontSide)
            return (
                <div className="card back" onClick={this.handleCardClick}>
                    {this.state.card.back}
                </div>
            )
        else {
            return (
                <div className={"card " + this.state.card.name + (this.state.card.guessed ? " guessed" : "")}>
                    <img src={this.state.card.front} alt={this.state.card.name + " icon"} />
                </div>
            )
        };
    }

    render() {
        return (
            <div>
                {this.createCard()}
            </div>
        );
    }
}

export default Card;