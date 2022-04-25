import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { selectUser } from "../selectors/selectors";
import { HttpService } from "../services/http.service";
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
    private http: HttpService
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
        this.store.select(selectUser).subscribe((data) => {
          console.log(data);
        });
      });
  }
}
