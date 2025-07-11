import { Component } from '@angular/core';
import { MyProjectsComponent } from "../my-projects.component";

@Component({
  selector: 'app-da-bubble',
  standalone: true,
  imports: [MyProjectsComponent],
  templateUrl: './da-bubble.component.html',
  styleUrl: './da-bubble.component.scss'
})
export class DaBubbleComponent {

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
