import { createReducer, on } from "@ngrx/store";
import { setUser } from "../state/users.actions";
import { UserType } from "../types/types";

export const initialState: UserType = {
  id: 0,
  name: "",
  username: "",
  email: "",
};

export const loginReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({
    ...user,
  }))
);
