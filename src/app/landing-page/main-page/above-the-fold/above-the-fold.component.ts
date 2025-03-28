import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})

export class AboveTheFoldComponent {

  contactIcons = [
    { id: 'email', default: '../../../../assets/icon/Email button.png', hover: '../../../../assets/icon/Property 1=hover blue E-Mail.png', current: '../../../../assets/icon/Email button.png' },
    { id: 'github', default: '../../../../assets/icon/Github button.png', hover: '../../../../assets/icon/Property 1=hover blue Github.png', current: '../../../../assets/icon/Github button.png' },
    { id: 'linkedin', default: '../../../../assets/icon/Linkedin button.png', hover: '../../../../assets/icon/Property 1=hover blue Linkedin.png', current: '../../../../assets/icon/Linkedin button.png' },
  ];

  scrollIcons = [
    { id: 'downArrow', default: '../../../../assets/icon/Arrow down.png', hover: '../../../../assets/icon/Property 1=Hover Arrow down.png', current: '../../../../assets/icon/Arrow down.png' },
  ];
  onContactHover(id: string) {
    const icon = this.contactIcons.find(i => i.id === id);
    if (icon) icon.current = icon.hover;
  }

  onContactLeave(id: string) {
    const icon = this.contactIcons.find(i => i.id === id);
    if (icon) icon.current = icon.default;
  }

  onScrollHover(id: string) {
    const icon = this.scrollIcons.find(i => i.id === id);
    if (icon) icon.current = icon.hover;
  }
  
  onScrollLeave(id: string) {
    const icon = this.scrollIcons.find(i => i.id === id);
    if (icon) icon.current = icon.default;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
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

