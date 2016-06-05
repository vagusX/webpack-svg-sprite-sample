import React from 'react'
import Icon from './components/icon'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <div className="icon-wrapper">
          <Icon symbol="panda" />
          <div>
            <Icon symbol="play" />
            <Icon symbol="cross" />
          </div>
          <div style={{strokeWidth: '5%'}}>
            <span style={{color: 'orchid'}} >
              <Icon symbol="heart1" className="Icon--stroketest" />
            </span>
            <span style={{color: 'mediumpurple', width: '2em'}}>
              <Icon symbol="hearts" className="Icon--stroketest" />
            </span>
          </div>
          <div>
            <Icon symbol="star" />
            <Icon symbol="star" className="Icon--goldstar" />
          </div>
          <div>
            <Icon symbol="check" />
            <Icon symbol="check" className="Icon--two1" />
            <Icon symbol="check" className="Icon--two2" />
          </div>
          <div>
            <Icon symbol="twitter" className="purpleIconBox" />
            <span className="purpleIconBox">
              <Icon symbol="twitter" />
            </span>
          </div>
          <div>
            <span>
              <Icon symbol="iconic-aperture" />
            </span>
            <span>
              <Icon symbol="iconic-aperture" className="Icon--vars1" />
            </span>
            <span>
              <Icon symbol="iconic-aperture" className="Icon--vars2" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
