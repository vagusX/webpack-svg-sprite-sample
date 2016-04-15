import React from 'react';
import * as iconSet from '../assets/icon-set'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <div className="icon-wrapper">
          <div>
            <svg className="Icon" aria-hidden="true">
              <use xlinkHref={iconSet.Play}></use>
            </svg>
            <svg className="Icon" aria-hidden="true">
              <use xlinkHref={iconSet.Cross}></use>
            </svg>
          </div>
          <div style={{strokeWidth: '5%'}}>
            <svg className="Icon Icon--stroketest" style={{color: 'orchid'}} aria-hidden="true">
              <use xlinkHref={iconSet.Heart1}></use>
            </svg>
            <svg className="Icon Icon--stroketest" style={{color: 'mediumpurple', width: '2em'}} aria-hidden="true">
              <use xlinkHref={iconSet.Hearts}></use>
            </svg>
          </div>
          <div>
            <svg className="Icon" aria-hidden="true">
              <use xlinkHref={iconSet.Star}></use>
            </svg>
            <svg className="Icon Icon--goldstar" aria-hidden="true">
              <use xlinkHref={iconSet.Star}></use>
            </svg>
          </div>
          <div>
            <svg className="Icon" aria-hidden="true">
              <use xlinkHref={iconSet.Check}></use>
            </svg>
            <svg className="Icon Icon--two1" aria-hidden="true">
              <use xlinkHref={iconSet.Check}></use>
            </svg>
            <svg className="Icon Icon--two2" aria-hidden="true">
              <use xlinkHref={iconSet.Check}></use>
            </svg>
          </div>
          <div>
            <svg className="Icon purpleIconBox" aria-hidden="true">
              <use xlinkHref={iconSet.Twitter}></use>
            </svg>
            <span className="purpleIconBox">
              <svg className="Icon" aria-hidden="true">
                <use xlinkHref={iconSet.Twitter}></use>
              </svg>
            </span>
          </div>
          <div>
            <span>
              <svg className="Icon" aria-hidden="true">
                <use xlinkHref={iconSet.IconicAperture}></use>
              </svg>
            </span>
            <span>
              <svg className="Icon Icon--vars1" aria-hidden="true">
                <use xlinkHref={iconSet.IconicAperture}></use>
              </svg>
            </span>
            <span>
              <svg className="Icon Icon--vars2" aria-hidden="true">
                <use xlinkHref={iconSet.IconicAperture}></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
