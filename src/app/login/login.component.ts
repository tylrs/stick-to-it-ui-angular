import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface AppState {
  message: string;
  loggedIn: boolean;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group(() => {
    email: ["", Validators.email];
    password: [""];
  });
  isLoggedIn$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.isLoggedIn$ = this.store.select("loggedIn");
  }

  ngOnInit(): void {}

  login() {
    this.store.dispatch({ type: "LOGIN" });
  }
}
