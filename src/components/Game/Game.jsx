import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';

import './Game.css'

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: this.shuffle(this.initDoubledArray(this.animals)),
            counterValue: 0,
        }
    }

    animals = [
        {
            name: "cat",
            front: require("./images/cat.svg"),
        },
        {
            name: "crow",
            front: require("./images/crow.svg"),
        },
        {
            name: "dog",
            front: require("./images/dog.svg"),
        },
        {
            name: "fish",
            front: require("./images/fish.svg"),
        },
        {
            name: "frog",
            front: require("./images/frog.svg"),
        },
        {
            name: "hippo",
            front: require("./images/hippo.svg"),
        },
        {
            name: "horse",
            front: require("./images/horse.svg"),
        },
        {
            name: "spider",
            front: require("./images/spider.svg"),
        },
    ]

    initDoubledArray(animals) {
        let fullAnimal = animals.map(animal => ({
            name: animal.name,
            front: animal.front,
            back: "?",
            guessed: false,
            flipped: false,
        }));

        return [...fullAnimal, ...fullAnimal]
            .map((card, index) => {
                return { ...card, ...{ id: index } };
            });
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        for (var i = 0; i < 2; i++) {
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
        }
        return array;
    }

    onCardClick = (card) => {
        this.counter();

        if (this.blockedNextClicks) {
            return;
        }

        card.flipped = true;

        if (!this.currentOpenedCard) {
            this.currentOpenedCard = card;
        } else {
            this.blockedNextClicks = true;
            this.secondOpenedCard = card;

            if (this.currentOpenedCard.name == this.secondOpenedCard.name) {
                this.currentOpenedCard.guessed = true;
                this.secondOpenedCard.guessed = true;
            }

            setTimeout(() => {
                this.currentOpenedCard.flipped = false;
                this.secondOpenedCard.flipped = false;

                this.currentOpenedCard = null;
                this.secondOpenedCard = null;
                this.refresh();
                this.blockedNextClicks = false;
            }, card.guessed ? 0 : 500)
        }
    }

    counter = () => {
        this.setState(prevState => ({
            counterValue: this.state.counterValue + 1
        }));
    }

    refresh = () => {
        this.setState(prevState => ({
            cards: this.state.cards
        }))
    }

    refreshWholePage = () => {
        window.location.reload();
    }

    render() {
        return (
            <div className="gameboard">
                <div className="header">
                    <div className="title">Memory Game</div>
                    <div className="instruction">Pair the cards</div>
                    <span>Number of moves: {this.state.counterValue}</span>
                </div>
                <CardContainer
                    cards={this.state.cards}
                    cardClick={this.onCardClick}
                />
                <div className="buttons">
                    {/* <button className="light">Light mode on</button> */}
                    <button className="light" onClick={this.refreshWholePage}>Let's start again</button>
                </div>
            </div>
        );
    }
}

export default Game;