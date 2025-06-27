import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // 👈 Import hinzufügen


@Component({
  selector: 'app-abilities',
  standalone: true,
  imports: [CommonModule,TranslateModule], 
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'] 
})

export class AbilitiesComponent {

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // Startsprache setzen
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }



  skills = [
    {src: '../../../../assets/icon/MySkill/Angular.png', alt: 'Angular'},
    {src: '../../../../assets/icon/MySkill/TS.png', alt: 'TypeScript'},
    {src: '../../../../assets/icon/MySkill/JS.png', alt: 'JavaScript'},
    {src: '../../../../assets/icon/MySkill/HTML.png', alt: 'HTML'},
    {src: '../../../../assets/icon/MySkill/CSS.png', alt: 'CSS'},
    {src: '../../../../assets/icon/MySkill/Api.png', alt: 'API'},
    {src: '../../../../assets/icon/MySkill/Firebase.png', alt: 'Firebase'},
    {src: '../../../../assets/icon/MySkill/GIT.png', alt: 'Git'},
    {src: '../../../../assets/icon/MySkill/Meterial-Design.png', alt: 'Material Design'},
    {src: '../../../../assets/icon/MySkill/Scrum.png', alt: 'Scrum'},
];
  learning = [
  {src: '../../../../assets/icon/React.png', alt: 'React'},
  {src: '../../../../assets/icon/Vue Js.png', alt: 'Vue Js'},
];
}
