import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertMenuComponent } from '../../general/convert-menu/convert-menu.component';

@Component({
  selector: 'app-convert',
  imports: [RouterLink, ConvertMenuComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {

}
