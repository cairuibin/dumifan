import React, { Component } from 'react';
import * as RuibinIcon from './svg/index.js';

export default class RuiBinIcon extends Component {
  render() {
    return (
      <span>
        {Object.keys(RuibinIcon).map(v => {
          const Icondom = RuibinIcon[v];
          return <Icondom w={40} h={40} />;
        })}
      </span>
    );
  }
}
