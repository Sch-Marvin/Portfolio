import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule, ],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss'],
})
export class AboveTheFoldComponent implements OnInit {
  contactIcons = [
    {
      id: 'email',
      default: '../../../../assets/icon/Email button.png',
      hover: '../../../../assets/icon/Property 1=hover blue E-Mail.png',
      current: '../../../../assets/icon/Email button.png',
    },
    {
      id: 'github',
      default: '../../../../assets/icon/Github button.png',
      hover: '../../../../assets/icon/Property 1=hover blue Github.png',
      current: '../../../../assets/icon/Github button.png',
    },
    {
      id: 'linkedin',
      default: '../../../../assets/icon/Linkedin button.png',
      hover: '../../../../assets/icon/Property 1=hover blue Linkedin.png',
      current: '../../../../assets/icon/Linkedin button.png',
    },
  ];

  scrollIcons = [
    {
      id: 'downArrow',
      default: '../../../../assets/icon/Arrow down.png',
      hover: '../../../../assets/icon/Property 1=Hover Arrow down.png',
      current: '../../../../assets/icon/Arrow down.png',
    },
  ];

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // Startsprache setzen
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  private lastScrollTop = 0;
  private navbarOffset = 683;
  isFixed = false;
  isOriginal = true;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isFixed = scrollTop > this.navbarOffset;
    this.isOriginal = !this.isFixed;
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





  menuOpen = true;
  isMobileView = false;

  @ViewChild('mobileNav') mobileNav!: ElementRef;
  @ViewChild('burgerBtn') burgerBtn!: ElementRef;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (
      this.menuOpen &&
      this.isMobileView &&
      this.mobileNav &&
      !this.mobileNav.nativeElement.contains(event.target) &&
      !this.burgerBtn.nativeElement.contains(event.target)
    ) {
      this.menuOpen = false;
    }
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 650;
    if (!this.isMobileView) {
      this.menuOpen = false;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onContactHover(id: string) {
    const icon = this.contactIcons.find((i) => i.id === id);
    if (icon) icon.current = icon.hover;
  }

  onContactLeave(id: string) {
    const icon = this.contactIcons.find((i) => i.id === id);
    if (icon) icon.current = icon.default;
  }

  onScrollHover(id: string) {
    const icon = this.scrollIcons.find((i) => i.id === id);
    if (icon) icon.current = icon.hover;
  }

  onScrollLeave(id: string) {
    const icon = this.scrollIcons.find((i) => i.id === id);
    if (icon) icon.current = icon.default;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
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
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start + offset * easeOut);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }

 






}
