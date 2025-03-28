import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})

export class FeedbackComponent {
  people = [
    {
      name: "Alice Johnson",
      project: "Kochwelt",
      text: '"Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."',
      profileLink: "https://linkedin.com/in/alicejohnson"
      
    },
    {
      name: "Brian Smith",
      project: "Da Bublle",
      text: '"Claudia is a reliable and friendly person. Works in a structured way and write a clear code. I recommend her as a colleague."',
      profileLink: "https://github.com/briansmith"
    },
    {
      name: "Catherine Lee",
      project: "Portfolio Website",
      text: '" She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code."',
      profileLink: "https://catherine.dev"
    }
  ];
}
