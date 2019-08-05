import { Component, OnInit } from '@angular/core';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

 
  constructor(public authService: AuthService) {}

  /**
   * Handle component initialization
   */
 ngOnInit() {
    this.authService.localAuthSetup();
  }
}