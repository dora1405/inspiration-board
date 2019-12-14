import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      cardsUrl: this.props.url + this.props.boardName,
    };

  }

  componentDidMount() {
    axios.get(this.state.cardsUrl + '/cards')
      .then((response) => {
        const cardObjects = response.data.map((cardInfo) => {
          return (
            cardInfo.card
          )
        })
        this.setState({
          cards: cardObjects
        });
        console.log(cardObjects)
      })
      .catch((error) => {
        this.setState({
          error: 'No Dice'
        })
      });
  }

  cardList = () => {
    return (
      this.state.cards.map((card,i) => {
        return (
          <Card
            key={i}
            text={card.text}
            emoji={card.emoji}
          />
        )
      })
    )
  }


  render() {
    return (
      <div>
        {this.cardList()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
