import { Component } from 'react';
import './index.css';
interface ITsExampleProps {
  type: string;
  onClick: any;
}
interface IState {
  types: plotTypes;
}
declare type plotTypes = {
  [primary: string]: string;
  default: string;
  danger: string;
};
export default class RuibinButton extends Component<ITsExampleProps> {
  constructor(props: ITsExampleProps);
  readonly state: IState;
  fn: () => void;
  render(): JSX.Element;
}
export {};
