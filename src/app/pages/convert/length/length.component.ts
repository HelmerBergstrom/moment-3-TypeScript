import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertMenuComponent } from '../../../general/convert-menu/convert-menu.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-length',
  imports: [RouterLink, ConvertMenuComponent, FormsModule],
  templateUrl: './length.component.html',
  styleUrl: './length.component.css'
})
export class LengthComponent {
    meter: number = 0;
    feet: number = 0;
    resultMtoF: string = '';
    resultFtoM: string = '';

    convertToFeet(): void {
        let feetResult = this.meter * 3.28084;

        this.resultMtoF = `${this.meter} Meter = ${feetResult.toFixed(2)} Feet`

    }

    convertToMeter(): void {
        let meterResult = this.feet * 0.3048;

        this.resultFtoM = `${this.feet} Feet = ${meterResult.toFixed(2)} Meter`
    }
}
