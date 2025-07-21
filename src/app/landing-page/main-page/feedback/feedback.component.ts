import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import EmblaCarousel from 'embla-carousel';

@Component({
  selector: 'app-feedback',
  standalone: true,
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent implements AfterViewInit {
  @ViewChild('slider', { static: true }) sliderRef!: ElementRef;

  embla: any;

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

  ngAfterViewInit(): void {
    const emblaNode = this.sliderRef.nativeElement as HTMLElement;

    this.embla = EmblaCarousel(emblaNode, {
      align: 'start',
      loop: false,
      skipSnaps: true
    });
  }
}
