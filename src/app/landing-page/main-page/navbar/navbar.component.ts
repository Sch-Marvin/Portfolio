import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  private lastScrollTop = 0;
  private navbarOffset = 683;
  isFixed = false;
  isOriginal = true;
  
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > this.navbarOffset) {
      this.isFixed = true;
      this.isOriginal = false;
    } else {
      this.isFixed = false;
      this.isOriginal = true;
    }
    this.lastScrollTop = scrollTop;
  }
  
  selectedItem: string | null = null;

  toggleBackground(item: string) {
    this.selectedItem = this.selectedItem === item ? null : item;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar-text')) {
      this.selectedItem = null;
    }
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





