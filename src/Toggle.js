import React, {Component} from 'react'

class Toggle extends Component{
	constructor(props) {
		super(props);
		this.state = {
			toggleOn: true
		}
		this.name = "Rissa"
		// console.log(this.state.toggleOn)
		console.log("Class this: ")
		
		this.handleClick = this.handleClick.bind(this)
		// We're setting the "this" to be whatever we're going to callback
	}

	handleClick(){
		this.setState({
			toggleOn: !this.state.toggleOn
		})
	}

	render(){
		if(this.state.toggleOn){
			var isToggleOn = "On"
		}else{
			var isToggleOn = "Off"
		}
		return(
			<button onClick={this.handleClick}>
				{isToggleOn}
			</button>
		)
	}
}

export default Toggle;