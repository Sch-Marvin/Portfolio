import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // 👈 Import hinzufügen


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  
}
