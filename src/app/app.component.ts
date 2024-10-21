import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShareReplayComponent } from "./components/rxjs/share-replay/share-replay.component";
import { NgrxSignalsComponent } from "./components/ngrx-signals/ngrx-signals.component";
import { ApireadObservableComponent } from "./components/apiread-observable/apiread-observable.component";
import { CartComponent } from "./components/cart/cart.component";

import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShareReplayComponent, NgrxSignalsComponent, ApireadObservableComponent, CartComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deTodo';
}
