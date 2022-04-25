import { Action } from "@ngrx/store";

export const basicReducer = (state: string = "hello world", action: Action) => {
  console.log(action.type, state);

  switch (action.type) {
    case "GREETING":
      return (state = "what's up");
    case "FAREWELL":
      return (state = "goodbye");
    default:
      return state;
  }
};
