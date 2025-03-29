import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
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
}
