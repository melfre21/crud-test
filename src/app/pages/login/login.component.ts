import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';
import { UsuarioLogin } from 'src/app/models/usuario-login';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  campoTipoTexto: boolean;
  submitted = false;

  constructor(
    private authService: AuthService,
    private loading: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    
  }

  //Metodo onSubmit de envio dos dados para o service de autenticação
  onSubmit(formLogin): void{

    this.loading.show();

    const { email, password } = this.usuarioLogin;

    this.submitted = true;

    //Verifica se o form esta valido
		if (formLogin.invalid) {
      this.loading.hide();
			return;
		}

    this.authService.login(email, password).subscribe(
      data => {
        this.loading.hide();
        console.log("Usuario logado com sucesso");

      },
      err => {
        console.log('Erro ao logar no component login', err);
      }
    ); 
  }

  toggleTipoTexto() {
    this.campoTipoTexto = !this.campoTipoTexto;
  }
}
