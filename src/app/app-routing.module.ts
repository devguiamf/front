import { ContaGuard } from './components/login/conta/conta.guard';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { CriarAvaliacaoComponent } from './components/criar-avaliacao/criar-avaliacao.component';
import { GlossarioComponent } from './components/glossario/glossario.component';
import { Home2Component } from './components/home2/home2.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './components/login/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginHomeComponent } from './pages/login-home/login-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
  component: HomeComponent,
  children : [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'glossario', component: GlossarioComponent},
    {path: 'home',component: Home2Component},
    {path: 'criar-avaliacao', component: CriarAvaliacaoComponent},
    {path: 'avaliacao', component: AvaliacaoComponent},
  ],
  canActivate:[ContaGuard]
},
  
  
  {path: '',
  component: LoginHomeComponent,
  children: [
    {path: '', redirectTo:'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
