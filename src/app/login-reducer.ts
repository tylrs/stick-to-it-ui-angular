import { Action } from "@ngrx/store";

export const loginReducer = (state: boolean = false, action: Action) => {
  console.log(action.type, state);

  switch (action.type) {
    case "LOGIN":
      return (state = true);
    case "LOGOUT":
      return (state = false);
    default:
      return state;
  }
};
