import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { AbilitiesComponent } from "./abilities/abilities.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboveTheFoldComponent, NavbarComponent, AboutMeComponent, AbilitiesComponent, MyProjectsComponent, ContactMeComponent,CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
