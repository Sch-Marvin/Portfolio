import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaBubbleComponent } from './da-bubble/da-bubble.component';
import { GameComponent } from './game/game.component';
import { JoinComponent } from './join/join.component';
import { OngoingProjectComponent } from './ongoing-project/ongoing-project.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // 👈 Import hinzufügen

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    CommonModule,
    DaBubbleComponent,
    GameComponent,
    JoinComponent,
    OngoingProjectComponent,
    TranslateModule,
  ],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent {
  tab = 0;

  selectedTab() {
    return this.tab;
  }

  selectTab(tab: number) {
    this.tab = tab;
  }
}
