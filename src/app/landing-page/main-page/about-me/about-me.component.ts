import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // 👈 Import hinzufügen


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule,TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(public router: Router) {}

  navigateToAboutMe() {
    this.router.navigate(['/about-me']);
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        this.smoothBounce(-20, 200);
      }, 500);
    }
  }

  smoothBounce(offset: number, duration: number) {
    const start = window.scrollY;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Fortschritt von 0 bis 1
      const easeOut = 1 - Math.pow(1 - progress, 3); // Weiche Ease-Out-Bewegung
      window.scrollTo(0, start + offset * easeOut);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }

}
