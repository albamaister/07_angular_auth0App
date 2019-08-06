import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  public profile: any;
  constructor(public auth: AuthService) {
    this.profile = this.auth.userProfile$;
   }

  ngOnInit() {
  }

}
