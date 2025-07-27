import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements AfterViewInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

  people = [
    {
      name: 'Anna Schmidt',
      project: 'Project 1',
      text: 'Working with them was super efficient and fun. They always kept communication clear.',
      profileLink: 'https://www.linkedin.com/in/anna-schmidt'
    },
    {
      name: 'Lukas Weber',
      project: 'Project 2',
      text: 'Very dependable and technically strong. Would definitely work together again.',
      profileLink: 'https://www.linkedin.com/in/lukas-weber'
    },
    {
      name: 'Miriam Klein',
      project: 'Project 3',
      text: 'Creative solutions and quick turnarounds. Loved the energy on the team.',
      profileLink: 'https://www.linkedin.com/in/miriam-klein'
    },
    {
      name: 'Marvin Schneemann',
      project: 'Project 4',
      text: 'Creative solutions and quick turnarounds. Loved the energy on the team.',
      profileLink: 'https://www.linkedin.com/in/miriam-klein'
    }
  ];
  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // Geschwindigkeit
      container.scrollLeft = scrollLeft - walk;
    });

    // Für Touch
    container.addEventListener('touchstart', (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchend', () => {
      isDown = false;
      container.classList.remove('active');
    });

    container.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    });
  }

  trackByName(index: number, person: any): string {
    return person.name;
  }
}
