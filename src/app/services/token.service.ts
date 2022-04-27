import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor() {}

  storeToken(token: string) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  getToken() {
    return JSON.parse(localStorage.getItem("token") || "{}");
  }
}
