import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm,} from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
}
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
  // Checkbox manuell auf "touched" setzen
  if (ngForm.controls['privacy']) {
    ngForm.controls['privacy'].markAsTouched();
  }

  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
      next: (response) => {
        ngForm.resetForm();
        this.privacyAccepted = false; // hier hinzufügen
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => console.info('send post complete'),
    });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
    ngForm.resetForm();
    this.privacyAccepted = false; // auch hier hinzufügen
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


onPrivacyChange(control: any) {
  if (!this.privacyAccepted) {
    control.control.markAsTouched(); // Wenn abgewählt, erzwinge Fehlermeldung
  }
}



}