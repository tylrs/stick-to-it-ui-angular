import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountCreationComponent } from "./account-creation/account-creation.component";
import { HabitsListComponent } from "./habits-list/habits-list.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "create-account", component: AccountCreationComponent },
  { path: "week-habits", component: HabitsListComponent },
  { path: "**", component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
