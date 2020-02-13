import React, { Component } from 'react'
import Card from './Card'
import GuessCount from './GuessCount'
import './App.css'

class App extends Component {

	handleCardClick(card){
		console.log(card, 'clicked');
	}

	render() {
		const won = new Date().getSeconds() % 2 === 0
		return (
			<div className="memory" >
				<GuessCount guesses={0} />
				<Card card="a" feedback="hidden" onClick={this.handleCardClick} />
				<Card card="b" feedback="justMatched" onClick={this.handleCardClick} />
				<Card card="c" feedback="justMismatched" onClick={this.handleCardClick} />
				<Card card="d" feedback="visible" onClick={this.handleCardClick} />
				<Card card="e" feedback="hidden" onClick={this.handleCardClick} />
				<Card card="f" feedback="justMatched" onClick={this.handleCardClick} />

				{won && <p>GAGNÉ !</p>}
			</div>
		)
  	}
}

export default App
