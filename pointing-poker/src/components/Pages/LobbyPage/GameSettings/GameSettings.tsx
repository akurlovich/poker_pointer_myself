/* eslint-disable */ 
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import Countdown from 'react-countdown';
import Timer from '../../../Timer/Timer';
import './gameSettings.scss';

const GameSettings = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <h3 className="lobby__title">Game settings:</h3>
      <div className="setting__main">
        <div className="setting__block">
          <div className="setting__name">Scram master as player:</div>
          <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Changing card in round end:</div>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Is timer needed:</div>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Score type:</div>
          <TextField 
            id="filled-size-small"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Score type (Short):</div>
          <TextField 
            id="filled-size-small"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Round time:</div>
          <div className="setting__timer">
            <div className="setting__timer__input-block">
              <label className="setting__timer__input-label">Minuts</label>
              <input className="setting__timer__input" type="number" defaultValue={0}/>
            </div>
            <div className="setting__timer__input-block">
              <label className="setting__timer__input-label">Seconds</label>
              <input className="setting__timer__input" type="number" defaultValue={0}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSettings;