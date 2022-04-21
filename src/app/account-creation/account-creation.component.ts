import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-account-creation",
  templateUrl: "./account-creation.component.html",
  styleUrls: ["./account-creation.component.scss"],
})
export class AccountCreationComponent implements OnInit {
  accountForm = this.formBuilder.group({
    name: [""],
    username: [""],
    email: [""],
    password: [""],
    passwordConfirmation: [""],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.accountForm);
  }

  ngOnInit(): void {}
}
