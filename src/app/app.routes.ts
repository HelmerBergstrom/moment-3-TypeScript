import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConvertComponent } from './pages/convert/convert.component';
import { AboutComponent } from './pages/about/about.component';
import { TempComponent } from './pages/convert/temp/temp.component';
import { LengthComponent } from './pages/convert/length/length.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'convert', component: ConvertComponent },
    { path: 'about', component: AboutComponent },
    { path: 'temp', component: TempComponent},
    { path: 'length', component: LengthComponent},
    { path: "", redirectTo: "home", pathMatch: "full"}
];
