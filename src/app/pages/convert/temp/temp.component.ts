import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertMenuComponent } from '../../../general/convert-menu/convert-menu.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp',
  imports: [RouterLink, ConvertMenuComponent, FormsModule],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {
    celsius: number = 0;
    fahrenheit: number = 0;
    resultCtoF: string = '';
    resultFtoC: string = '';

    convertToFahrenheit(): void {
      let fahrenheitResult = (((this.celsius * 9) / 5) + 32);

      this.resultCtoF = `${this.celsius}°C = ${fahrenheitResult.toFixed(2)}°F`;
    };
    convertToCelsius(): void {
      this.resultFtoC = `${this.fahrenheit} F = ${(((this.fahrenheit - 32) * 5) / 9).toFixed(2)} C`;

      let celsiusResult = (((this.fahrenheit - 32) * 5) / 9);
      
      this.resultFtoC = `${this.fahrenheit}°F = ${celsiusResult.toFixed(2)}°C`
    };
}
