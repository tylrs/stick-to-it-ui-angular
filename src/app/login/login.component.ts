import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { HttpService } from "../services/http.service";
import { TokenService } from "../services/token.service";
import { setUser } from "../state/users.actions";
import { AppState } from "../types/types";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ["", Validators.email],
    password: [""],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private http: HttpService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitCredentials() {
    this.http
      .login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe((response: any) => {
        console.log(response);
        this.store.dispatch(setUser({ user: response.user }));
        this.tokenService.storeToken(response.token);
        this.router.navigateByUrl("");
      });
  }
}
