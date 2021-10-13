/* eslint-disable */ 
import { ISettingsState, SettingsAction, SettingsActionType } from "../../types/settings";

const initialState: ISettingsState = {
  scramMaster: false,
  changeCard: false,
  timerNeeded: true,
  scoreType: 'Stopy Point',
  scoreTypeShort: 'SP',
  roundTime: 300,
  cardsValue: [12],
};

const settingsReducer = (state = initialState, action: SettingsAction): ISettingsState => {
  switch (action.type) {
    case SettingsActionType.SET_SETTINGS:
      return {...state, ...action.payload}
    default:
      return state;
  }
};

export default settingsReducer;