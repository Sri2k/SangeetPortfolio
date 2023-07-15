import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isNavigationOpen = false;

  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
    if (this.isNavigationOpen) {
      document.body.classList.add('navigation-open');
    } else {
      document.body.classList.remove('navigation-open');
    }
  }
}
