import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import lobbyReducer from "./lobbyReducer";
import chatReducer from "./chatReducer";
import settingsReducer from "./settingsReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  lobby: lobbyReducer,
  chat: chatReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
