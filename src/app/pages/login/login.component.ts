import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from 'src/app/models/usuario-login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  //Metodo onSubmit de envio dos dados para o service de autenticação
  onSubmit(formLogin): void{

    const { email, password } = this.usuarioLogin;

    console.log('Enviando login');

    // this.authService.login(email, password);

    this.authService.login(email, password).subscribe(
      data => {

        console.log("resposta do servidor em login component", data);
      },
      err => {
        console.log('Erro ao logar no component login', err);
      }
    ); 
  }
}
