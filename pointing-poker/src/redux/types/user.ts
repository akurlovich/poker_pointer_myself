/* eslint-disable */ 
import { UserAvatar } from "../../shared/interfaces/models";

export interface User {
  id: string;
  firstName: string;
  role: string;
  lastName?: string;
  jobPosition?: string;
  userAvatar?: UserAvatar;
  isObserver?: boolean;
}

export interface IUserState {
  currentUserId: string | null;
  users: User[];
  isOpenAuthPopup: boolean;
}

export enum UserActionType {
  SET_AUTHPOPUP = 'SET_AUTHPOPUP',
  SET_USER = "SET_USER",
  SET_USERS = "SET_USERS",
  SET_CURRENT_USER = "SET_CURRENT_USER",
  GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
}

interface ISetAuthPopup {
  type: UserActionType.SET_AUTHPOPUP;
  payload: boolean;
}

interface ISetCurrentUser {
  type: UserActionType.SET_CURRENT_USER;
  payload: string;
}

interface ISetUser {
  type: UserActionType.SET_USER;
  payload: User;
}
interface ISetUsers {
  type: UserActionType.SET_USERS;
  payload: User[];
}

interface IGetUsersSuccess {
  type: UserActionType.GET_USERS_SUCCESS;
  payload: boolean;
}

export type UserAction =
  | ISetAuthPopup
  | ISetUsers
  | ISetUser
  | ISetCurrentUser
  | IGetUsersSuccess;

export interface UserReducer {
  user: IUserState;
}
