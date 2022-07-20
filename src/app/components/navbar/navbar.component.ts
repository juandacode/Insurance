import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hamburgerMenu: string = '../../assets/icons/hamburger-menu.svg';
  exampleLogo: string = '../../assets/icons/example-logo.svg';
  restartBackground: boolean = false;

  
  constructor() { }

  ngOnInit(): void {
  }

  toggleHamburgerMenu() {
    this.restartBackground = !this.restartBackground;
  }

}
