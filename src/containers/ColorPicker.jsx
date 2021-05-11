import React, {Component} from 'react';
import Colors from '../components/app/display/Colors'

export default class ColorPicker extends Component {
      state = {
          color: '#FF0000'
      }

      random = () => {
          const variety = [
              '#ff1000',
              '#ff2000',
              '#ff3000'
          ]
          return variety[Math.floor(Math.random() * variety.length)]
      }
      render () {
		return (
			<Colors color={this.state.color} />
		);
    }    
}
  