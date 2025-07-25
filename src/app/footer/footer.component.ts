import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
  


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],  // <- Wichtig für *ngFor
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactIcons = [
    {
      id: 'email',
      default: '../../../../assets/icon/Footer/Email-button.svg',
      hover: '../../../../assets/icon/Footer/Email-button-hover.svg',
      current: '../../../../assets/icon/Footer/Email-button.svg',
    },
    {
      id: 'github',
      default: '../../../../assets/icon/Footer/Github button.svg',
      hover: '../../../../assets/icon/Footer/Github button-hover.svg',
      current: '../../../../assets/icon/Footer/Github button.svg',
    },
    {
      id: 'linkedin',
      default: '../../../../assets/icon/Footer/Linkedin button.svg',
      hover: '../../../../assets/icon/Footer/Linkedin button-hover.svg',
      current: '../../../../assets/icon/Footer/Linkedin button.svg',
    }
  ];

  onContactHover(id: string) {
    const icon = this.contactIcons.find(i => i.id === id);
    if (icon) icon.current = icon.hover;
  }

  onContactLeave(id: string) {
    const icon = this.contactIcons.find(i => i.id === id);
    if (icon) icon.current = icon.default;
  }
}
