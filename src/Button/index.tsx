import React, { Component } from 'react';
import './index.css';
interface ITsExampleProps {
  type: string;
}

interface IState {
  types: plotTypes;
}
type plotTypes = {
  [primary: string]: string;
  default: string;
  danger: string;
};

export default class RuibinButton extends Component<ITsExampleProps> {
  constructor(props: ITsExampleProps) {
    super(props);
  }
  readonly state: IState = {
    types: {
      default: 'default',
      primary: 'primary',
      danger: 'danger',
    },
  };
  fn = () => {};
  render() {
    const { types } = this.state;
    const {
      type = 'default',
      onClick,
      children = type === 'default' ? '取消' : '确定',
    } = this.props;
    console.log(this.props);
    return (
      <button
        onClick={onClick}
        className={`RuibinButton RuibinButton_${types[type]}`}
      >
        {children}
      </button>
    );
  }
}
