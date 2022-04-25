import { createAction, props } from "@ngrx/store";

export const setUser = createAction(
  "[Auth/API] Login Success",
  props<{ user: any }>()
);
