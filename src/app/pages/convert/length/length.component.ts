import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertMenuComponent } from '../../../general/convert-menu/convert-menu.component';

@Component({
  selector: 'app-length',
  imports: [RouterLink, ConvertMenuComponent],
  templateUrl: './length.component.html',
  styleUrl: './length.component.css'
})
export class LengthComponent {

}
