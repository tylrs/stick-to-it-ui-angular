import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { catchError } from "rxjs/operators";
import { passwordValidator } from "../password-validator.directive";
import { HttpService } from "../services/http.service";

@Component({
  selector: "app-account-creation",
  templateUrl: "./account-creation.component.html",
  styleUrls: ["./account-creation.component.scss"],
})
export class AccountCreationComponent implements OnInit {
  accountForm = this.formBuilder.group(
    {
      name: [""],
      username: [""],
      email: ["", Validators.email],
      password: [""],
      passwordConfirmation: [""],
    },
    { validators: [passwordValidator, Validators.required] }
  );

  constructor(private formBuilder: FormBuilder, private http: HttpService) {}

  onSubmit() {
    this.http.createUser(this.accountForm.value).subscribe();
    this.http
      .login({
        email: this.accountForm.value.email,
        password: this.accountForm.value.password,
      })
      .subscribe((response: any) => {
        console.log(response.token, response.user);
      });
  }

  ngOnInit(): void {}
}
