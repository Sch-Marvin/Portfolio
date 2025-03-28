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
}
