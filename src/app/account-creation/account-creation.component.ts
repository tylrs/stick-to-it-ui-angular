import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { interval, take, tap } from "rxjs";
import { passwordValidator } from "../password-validator.directive";

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

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.accountForm);
  }

  ngOnInit(): void {
    console.log("hello");
    const obs = interval(1000).pipe(
      take(5),
      tap((i) => console.log(i))
    );

    obs.subscribe();
  }
}
