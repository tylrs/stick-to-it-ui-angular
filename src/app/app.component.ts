import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface AppState {
  message: string;
  loggedIn: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "stick-to-it-ui-angular";
  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select("message");
  }

  greetingMessage() {
    this.store.dispatch({ type: "GREETING" });
  }

  farewellMessage() {
    this.store.dispatch({ type: "FAREWELL" });
  }
}
