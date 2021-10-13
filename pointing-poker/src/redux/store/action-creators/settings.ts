/* eslint-disable */ 
import { Dispatch } from "react";
import { ISettingsState, SettingsAction, SettingsActionType } from "../../types/settings";

const setSettings = (payload: ISettingsState) => (dispatch: Dispatch<SettingsAction>) => {
  dispatch({ type: SettingsActionType.SET_SETTINGS, payload });
};

export default setSettings;