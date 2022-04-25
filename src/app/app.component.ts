import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectUser } from "./selectors/selectors";
import { UserType } from "./types/types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "stick-to-it-ui-angular";
  user$: Observable<UserType> = this.store.select(selectUser);

  constructor(private store: Store<{ user: UserType }>) {
    // this.user$ = store.select(selectUser);
  }
}
