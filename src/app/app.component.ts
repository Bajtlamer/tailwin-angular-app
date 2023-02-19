import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tailwin-angular-app';
  userMenu: boolean = false;
  hamburgerMenu: boolean = false;

toggleMenu() {
  this.userMenu = !!!this.userMenu;
}
toggleHamburger() {
  this.hamburgerMenu = !!!this.hamburgerMenu;
}
}
