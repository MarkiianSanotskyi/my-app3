import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render() {
		return(
			<button onClick={this.handleClick}>
			{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
			);
	}
}

class LoggingButton extends React.Component {
	handleClick = () => {
		console.log('this is', this);
	}

	render() {
		return(
		<button onClick={(e) => this.handleClick(e)}>
		Click me
		</button>
		);
	}
}


ReactDOM.render(<LoggingButton />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
