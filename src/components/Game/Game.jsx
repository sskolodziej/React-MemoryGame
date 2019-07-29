import React, {Component} from 'react';
import CardContainer from '../CardContainer/CardContainer';

import './Game.css'

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: this.shuffle(this.initDoubledArray(this.animals))
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
        debugger;
        let doubledAnimals = [];
        animals.forEach(animal => {
            for (var i = 0; i < 2; i++) {
                doubledAnimals.push(
                    {
                        name: animal.name,
                        front: animal.front,
                        back: "?",
                        guessed: false,
                        flipped: false,
                    });
            }
        });
        return doubledAnimals;
    }

    shuffle(array) {
        debugger;
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

    render() {
        return (
            <div className="gameboard">
                <div className="header">
                    <div className="title">Memory Game</div>
                    <div className="instruction">Pair the cards</div>
                </div>
                <CardContainer cards={this.state.cards} />
            </div>
        );
    }
}

export default Game;