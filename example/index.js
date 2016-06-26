import React,{ Component } from 'react';

import {Surface} from 'gl-react-dom'
import {Sharpen} from '../src/'
const {Image: GLImage} = require('gl-react-image');

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      sharpen: 0,
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Surface width={450} height={300}>
          <Sharpen factor={this.state.sharpen} width={450} height={300}>
            <GLImage
              source={{
                uri: "https://unsplash.it/450/350?image=301", 
                width: "450", 
                height: "300"
              }}
              resizeMode="cover"
            />
          </Sharpen>
        </Surface>
        <input type="range"
          min={0}
          max={5}
          step={0.1}
          value={this.state.sharpen}
          onChange={val => console.log(val)}
          onChange={e => this.setState({sharpen: parseFloat(e.target.value)})}
        />
      </div>
    );
  }
}
