import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MainPageComponent,],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
