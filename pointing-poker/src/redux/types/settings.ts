export interface ISettingsState {
  scramMaster: boolean;
  changeCard: boolean;
  timerNeeded: boolean;
  scoreType: string;
  scoreTypeShort: string;
  roundTime: number;
  cardsValue: number[];
}

export enum SettingsActionType {
  SET_SETTINGS = "SET_SETTINGS",
}

interface ISetSettings {
  type: SettingsActionType.SET_SETTINGS;
  payload: ISettingsState;
}

export type SettingsAction = ISetSettings;

export interface SettingsReducer {
  settings: ISettingsState;
}
