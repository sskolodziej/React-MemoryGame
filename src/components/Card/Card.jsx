import React, {Component} from 'react';

import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: this.props.card,
            flipped: this.props.card.flipped,
            cardClick: this.props.cardClick,
        }
    }

    handleCardClick = () => {
        debugger;
        this.setState(prevState => ({
            flipped: !prevState.flipped
        }));
    }

    createCard() {
        debugger;
        const frontSide = this.state.flipped;

        if (!frontSide)
            return (
                <div className="card back" onClick={this.handleCardClick}>
                    {this.state.card.back}
                    {console.log(this)}
                </div>
            )
        else {
            return (
                <div className={"card " + this.state.card.name} onClick={this.handleCardClick}>
                    {/* <div className={this.state.card.name}>
                        {this.state.card.name}
                    </div> */}
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