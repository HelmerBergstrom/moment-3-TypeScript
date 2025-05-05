import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainmenuComponent } from './general/mainmenu/mainmenu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moment-3-ts';
}
