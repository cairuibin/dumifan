import React, { Component } from 'react'
import './index.css'
interface ITsExampleProps {
  type: string
}

interface IState {
  types: plotTypes;
}
type plotTypes = {

  [primary: string]: string,
  default: string,
  danger: string
}


export default class RuibinButton extends Component<ITsExampleProps> {
  constructor(props: ITsExampleProps) {
    super(props)
  }
  readonly state: IState = {
    types: {
      default: "default",
      primary: 'primary',
      danger: 'danger'
    }
  }
  render() {
    const { types } = this.state
    const { type } = this.props;
    return (

      <button className={`RuibinButton RuibinButton_${types[type]}`} > 确认</button>

    )
  }
}
