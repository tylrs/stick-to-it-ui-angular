export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface AppState {
  user: UserType;
}
