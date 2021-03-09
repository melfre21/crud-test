import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-test-http';

  mostrarMenuLarge: boolean = false;
  adicionarClassContainer: boolean = false;

  constructor(
    private authService: AuthService
  ){
  }

  ngOnInit(): void {

    if(this.authService.isLoggedIn){
        this.mostrarMenuLarge = true;
        this.adicionarClassContainer = true;
    }

    this.authService.btnLogoutEmitter.subscribe(
      (mostrar: any) => {
        this.mostrarMenuLarge = mostrar;
        this.adicionarClassContainer = mostrar;
      }
    );
  }
}
