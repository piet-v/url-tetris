import { Component } from 'react';

type Props = {
  handleKeyDown: (key: SupportedKey) => any;
};

export type SupportedKey = 'ArrowRight' | 'ArrowLeft' | 'ArrowUp' | 'ArrowDown';

export class InputHandler extends Component<Props> {
  handleKey = ({ key }: KeyboardEvent) => this.props.handleKeyDown(key as SupportedKey);

  componentDidMount(): void {
    document.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener("keydown", this.handleKey);
  }

  render() {
    return null;
  }
}
