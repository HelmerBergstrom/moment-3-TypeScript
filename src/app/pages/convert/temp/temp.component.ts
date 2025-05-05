import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertMenuComponent } from '../../../general/convert-menu/convert-menu.component';

@Component({
  selector: 'app-temp',
  imports: [RouterLink, ConvertMenuComponent],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {
    celsius: number = 0;
    fahrenheit: number = 0;
    resultCtoF: string = "";
    resultFtoC: string = "";
}
