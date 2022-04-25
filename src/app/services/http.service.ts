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
    console.log(accountInfo);
    return this.http
      .post(urls.localUsers, accountInfo)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): any {
    console.log("hello");
    console.error(error.error.message);
  }
}
