import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	// { path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent},
	{ path: 'usuario/cadastro', loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule) },
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 

exports: [RouterModule]
})
export class AppRoutingModule { }
