import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  http = inject(HttpClient);
  privacyAccepted: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: "",
  };

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.controls['privacy']) {
      ngForm.controls['privacy'].markAsTouched();
    }

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: () => {
          ngForm.resetForm();
          this.privacyAccepted = false;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.privacyAccepted = false;
    }
  }

  scrollIcons = [
    {
      id: 'upArrow',
      default: '../../../../assets/icon/Contact/Arrow up.svg',
      hover: '../../../../assets/icon/Contact/Arrow up hover.svg',
      current: '../../../../assets/icon/Contact/Arrow up.svg'
    },
  ];

  hoverIconEMail =[

    {
      id: 'EMail',
      default: '../../../../assets/icon/Contact/contact_email.svg',
      hover: '../../../../assets/icon/Contact/E-Mail-hover.PNG',
      current: '../../../../assets/icon/Contact/contact_email.svg'
    },
  ];


  hoverIconPhone=[

    {
      id: 'Phone',
      default: '../../../../assets/icon/Contact/contact_phone_.svg',
      hover: '../../../../assets/icon/Contact/phone-hover.svg',
      current: '../../../../assets/icon/Contact/contact_phone_.svg'
    },
  ]







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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        this.smoothBounce(-20, 200);
      }, 500);
    }
  }

  onIconHoverEMail(id: string) {
    const icon = this.hoverIconEMail.find((i) => i.id === id);
    if (icon) icon.current = icon.hover;
  }

  onIconLeaveEMail(id: string) {
    const icon = this.hoverIconEMail.find((i) => i.id === id);
    if (icon) icon.current = icon.default;
  }

  onIconHoverPhone(id: string) {
    const icon = this.hoverIconPhone.find((i) => i.id === id);
    if (icon) icon.current = icon.hover;
  }

  onIconLeavePhone(id: string) {
    const icon = this.hoverIconPhone.find((i) => i.id === id);
    if (icon) icon.current = icon.default;
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

  onPrivacyChange(control: any) {
    if (!this.privacyAccepted) {
      control.control.markAsTouched();
    }
  }
}
