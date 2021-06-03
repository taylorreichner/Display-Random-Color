import React, {Component} from 'react';
import Colors from '../components/app/display/Colors'

export default class ColorPicker extends Component {
      state = {
          color: '#FF0000'
      }

      random = () => {
          const variety = [
              '#ff1000',
              '#ff9000',
              '#ff3080'
          ]
          return variety[Math.floor(Math.random() * variety.length)]
      }

      changeColor = () => setInterval(() => {
		const newColor = this.random();
		
		if (newColor !== this.state.color) this.setState({ color: newColor });
		
	}, 1000);

	componentDidMount = () => {
		this.changeColor();
	}
      render () {
		return (
			<Colors color={this.state.color} />
		);
    }    
}
  