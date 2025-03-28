import { Component } from '@angular/core';

@Component({
  selector: 'app-ongoing-project',
  standalone: true,
  imports: [],
  templateUrl: './ongoing-project.component.html',
  styleUrl: './ongoing-project.component.scss'
})
export class OngoingProjectComponent {

  icons = [
    { src: '../../../../assets/icon/MySkill/Angular.png', alt: 'Angular' },
    { src: '../../../../assets/icon/MySkill/TS.png', alt: 'TypeScript' },
    // { src: '../../../../assets/icon/MySkill/JS.png', alt: 'JavaScript' },
    // { src: '../../../../assets/icon/MySkill/HTML.png', alt: 'HTML' },
    // { src: '../../../../assets/icon/MySkill/CSS.png', alt: 'CSS' },
    // { src: '../../../../assets/icon/MySkill/Api.png', alt: 'API' },
    { src: '../../../../assets/icon/MySkill/Firebase.png', alt: 'Firebase' },
    // { src: '../../../../assets/icon/MySkill/GIT.png', alt: 'Git' },
    // { src: '../../../../assets/icon/MySkill/Meterial-Design.png', alt: 'Material Design' },
    // { src: '../../../../assets/icon/MySkill/Scrum.png', alt: 'Scrum' },
  ];
  
}
