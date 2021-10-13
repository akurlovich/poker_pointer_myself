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
import { useDispatch } from 'react-redux';
import setSettings from '../../../../redux/store/action-creators/settings';
import { ISettingsState } from '../../../../redux/types/settings';

const GameSettings = () => {
  const [checkedScrumMaster, setcheckedScrumMaster] = useState(true);
  const [chechedChangeCard, setChechedChangeCard] = useState(true);
  const [checkedTimerNeeded, setCheckedTimerNeeded] = useState(true);
  const [scoreType, setScoreType] = useState('');
  const [scoreTypeShort, setScoreTypeShort] = useState('');
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerMinuts, setTimerMinuts] = useState(0);

  const showSettings: ISettingsState = useTypedSelector(state => state.settings);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'scrummaster':
        setcheckedScrumMaster(event.target.checked);
        break;
      case 'changecard':
        setChechedChangeCard(event.target.checked);
        break;
      case 'timerneeded':
        setCheckedTimerNeeded(event.target.checked);
        break;
      case 'scoretype':
        setScoreType(event.target.value);
        break;
      case 'scoretypeshot':
        setScoreTypeShort(event.target.value);
        break;
      default:
        break;
    }
  };

  const handlerSettings = () => {
    const newSetLobby: ISettingsState = {
      scramMaster: checkedScrumMaster,
      changeCard: chechedChangeCard,
      timerNeeded: checkedTimerNeeded,
      scoreType: scoreType,
      scoreTypeShort: scoreTypeShort,
      roundTime: timerMinuts * 60 + timerSeconds,
      cardsValue: [12],
    }
    dispatch(setSettings(newSetLobby))
  }

  return (
    <div>
      <h3 className="lobby__title" onClick={handlerSettings}>Game settings:</h3>
      <div className="setting__main">
        <div className="setting__block">
          <div className="setting__name" onClick={() => console.log(showSettings)}>Scram master as player:</div>
          <Switch
            name='scrummaster'
            checked={checkedScrumMaster}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Changing card in round end:</div>
          <Switch
            name='changecard'
            checked={chechedChangeCard}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Is timer needed:</div>
          <Switch
            name='timerneeded'
            checked={checkedTimerNeeded}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Score type:</div>
          <TextField
            value={scoreType}
            onInput={handleChange}
            name='scoretype'
            id="filled-size-small"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Score type (Short):</div>
          <TextField
            value={scoreTypeShort}
            onInput={handleChange}
            name='scoretypeshot'
            id="filled-size-small"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="setting__block">
          <div className="setting__name">Round time:</div>
          <div className="setting__timer">
            {/* <Timer time={0}/> */}
            {/* <div className="setting__timer__input-block">
              <label className="setting__timer__input-label">Minuts</label>
              <input className="setting__timer__input" type="number" defaultValue={0}/>
            </div>
            <div className="setting__timer__input-block">
              <label className="setting__timer__input-label">Seconds</label>
              <input className="setting__timer__input" type="number" defaultValue={0}/>
            </div> */}
            <div className={!false ? 'form__timer' : 'form__timer disabled'}>
              <div className="timer__item">
                <label htmlFor="minutes" className="timer__title">
                  minutes
                </label>
                <input
                  type="number"
                  className="timer__inp"
                  id="minutes"
                  // disabled={isDisabled}
                  value={timerMinuts}
                  onChange={(e) => setTimerMinuts(+e.target.value)}
                />
              </div>
				      <span className="timer__double-dot">:</span>
              <div className="timer__item">
                <label htmlFor="seconds" className="timer__title">
                  seconds
                </label>
                <input
                  type="number"
                  className="timer__inp"
                  id="seconds"
                  data-testid="seconds"
                  // disabled={isDisabled}
                  value={timerSeconds}
                  onChange={(e) => setTimerSeconds(+e.target.value)}
                />
              </div>
			      </div>
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