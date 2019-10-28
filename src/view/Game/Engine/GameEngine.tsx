import React, { Component } from 'react';
import { createEngine } from '../../../domain/Engine';
import { InputHandler, SupportedKey } from '../Input/InputHandler';
import { Engine, GameState } from 'tetris-engine';

type Props = {
  onUpdate: (gameState: GameState) => any;
}

export class GameEngine extends Component<Props> {
  game?: Engine;

  componentDidMount(): void {
    this.game = createEngine((gameState: GameState) => this.props.onUpdate(gameState));
    this.game.start();

    const firstLevelInterval = 1000;
    setInterval(() => {
      this.game!.moveDown();
    }, firstLevelInterval);
  }

  handleKeyDown = (key: SupportedKey) => {
    const { game } = this;

    switch (key) {
      case 'ArrowRight':
        game!.rotate();
        break;
      case 'ArrowLeft':
        game!.moveDown();
        break;
      case 'ArrowUp':
        game!.moveLeft();
        break;
      case 'ArrowDown':
        game!.moveRight();
        break;
    }
  };

  render() {
    return <InputHandler handleKeyDown={this.handleKeyDown} />;
  }
}
