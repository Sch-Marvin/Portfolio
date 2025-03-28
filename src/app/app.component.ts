import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HighlightBackgroundDirective } from './highlight-background.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}

// Eine Funktion für das immer wiederholen/akutuallisieren der Animation

// ngAfterViewInit(): void {
//   setTimeout(() => {
//     AOS.refresh();
//   }, 500);
// }