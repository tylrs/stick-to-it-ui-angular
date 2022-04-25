import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { urls } from "../dev-constants";
import { catchError } from "rxjs";

interface AccountInfo {
  name: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  createUser(accountInfo: AccountInfo) {
    return this.http.post(urls.localUsers, accountInfo);
  }

  login(credentials: { email: string; password: string }) {
    console.log(credentials);
    return this.http.post(urls.localLogin, credentials);
  }

  handleError(error: HttpErrorResponse): any {
    console.log("Error", error.error.message);
  }
}
