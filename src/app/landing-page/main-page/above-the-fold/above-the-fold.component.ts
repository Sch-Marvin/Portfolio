import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})


export class AboveTheFoldComponent {
  title = 'Hover Effect';
  description = 'Hover over this section to change the background image.';
}


