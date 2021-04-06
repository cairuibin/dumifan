import React, { Component } from 'react';
import * as RuibinIcon from './svg/index.js'



console.log(RuibinIcon.Iconaa)

export default class Icon extends Component {
  render() {
    return (
      <span>
        {Object.keys(RuibinIcon).map(V => {
          const Icondom = RuibinIcon[V]
          return < Icondom w={40} h={40} />
        })}
      </span>
    );
  }
}
