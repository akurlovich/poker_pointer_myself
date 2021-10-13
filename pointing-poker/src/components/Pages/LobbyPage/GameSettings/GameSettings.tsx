/* eslint-disable */ 
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import Countdown from 'react-countdown';
import Timer from '../../../Timer/Timer';
import './gameSettings.scss';
import addCardIcon from '../../../../assets/images/add_card.png';
import coffeeCardIcon from '../../../../assets/images/coffee_card.png';
import useTypedSelector from '../../../../redux/hooks/useTypedSelector';

const GameSettings = () => {
  const [checked, setChecked] = useState(true);

  const { scramMaster } = useTypedSelector(state => state.settings);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <h3 className="lobby__title">Game settings:</h3>
      <div className="setting__main">
        <div className="setting__block">
          <div className="setting__name" onClick={() => console.log(scramMaster)}>Scram master as player:</div>
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
            <Timer time={0}/>
            {/* <div className="setting__timer__input-block">
              <label className="setting__timer__input-label">Minuts</label>
              <input className="setting__timer__input" type="number" defaultValue={0}/>
            </div>
            <div className="setting__timer__input-block">
              <label className="setting__timer__input-label">Seconds</label>
              <input className="setting__timer__input" type="number" defaultValue={0}/>
            </div> */}
          </div>
        </div>
        <div className="setting__block-cardvalue">
          <div className="setting__name">Add card values:</div>
          <div className="setting__card-block">
            <div className="setting__card">
              <img className="setting__card-img" src={coffeeCardIcon} alt="" />
            </div>
            <div className="setting__card custom">
              <div className="setting__card-value-top">
                12
              </div>
              <div className="setting__card-value">
                SP
              </div>
              <div className="setting__card-value-bottom">
                12
              </div>
            </div>
            <div className="setting__card"></div>
            <div className="setting__card">
              <img className="setting__card-img" src={addCardIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSettings;