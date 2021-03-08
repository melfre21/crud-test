import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mostrarBtnLogout: boolean = false;
  headerAbsolute: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.mostrarBtnLogout = true;
      this.headerAbsolute = true;
    }

    this.authService.btnLogoutEmitter.subscribe(
      (mostrar: any) => {
        this.mostrarBtnLogout = mostrar;
        this.headerAbsolute = mostrar;
      }
    );
  }

  logout(){
    Swal.fire({
      title: 'Deseja realmente sair da aplicação?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
      confirmButtonText: 'Quero sair!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        //window.location.reload();
      }
    })
  }



}
