import { createSelector } from "@ngrx/store";
import { AppState, UserType } from "../types/types";

export const selectFeature = (state: AppState) => state.user;

export const selectUser = createSelector(
  selectFeature,
  (state: UserType) => state
);
