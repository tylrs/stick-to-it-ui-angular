import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface AppState {
  message: string;
  loggedIn: boolean;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.isLoggedIn$ = this.store.select("loggedIn");
  }

  ngOnInit(): void {}

  logOut() {
    this.store.dispatch({ type: "LOGOUT" });
  }
}
