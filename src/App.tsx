import React, { Component } from 'react';
import './App.css';
import { GameEngine } from './view/Game/Engine/GameEngine';
import { GAME_STATUS } from './domain/Engine';
import { GameState, GameStatistic } from 'tetris-engine';
import { GameStatus } from './view/Game/Status/GameStatus';
import { BrailleRenderer } from './view/Renderer/Braille/BrailleRenderer';
import { GameControls } from './view/Game/Controls/GameControls';
import { GameScore } from './view/Game/Score/GameScore';

type Props = {};
type State = { gameState: GameState };

class App extends Component<Props, State> {
  state: State = {
    gameState: { body: [], gameStatus: GAME_STATUS.INIT, statistic: {} as GameStatistic },
  };

  setGameState = (gameState: GameState) => {
    this.setState({ gameState });
    // console.log('$', gameState);
  };

  render() {
    const { gameState } = this.state;
    const { body, gameStatus, statistic } = gameState;

    return (
      <div className="App">
        <GameEngine onUpdate={this.setGameState} />
        <BrailleRenderer grid={body} />

        <header className="App-header">
          <h1>URL Tetris</h1>
          <GameStatus status={gameStatus} />
          <GameScore statistic={statistic} />

          <GameControls />
        </header>
      </div>
    );
  }
}

export default App;
