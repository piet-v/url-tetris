import React, { FunctionComponent } from 'react';

type Props = {};

export const GameControls: FunctionComponent<Props> = () => {
  return (
    <div className="card">
      <h3>Controls</h3>
      <p>→ Rotate</p>
      <p>← Move left</p>
      <p>↑ Move up</p>
      <p>↓ Move down</p>
    </div>
  );
}
