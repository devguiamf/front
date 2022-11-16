import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login/login.component';
import { CadastroComponent } from './components/login/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginHomeComponent } from './pages/login-home/login-home.component';
import { Home2Component } from './components/home2/home2.component';
import { CriarAvaliacaoComponent } from './components/criar-avaliacao/criar-avaliacao.component';
import { GlossarioComponent } from './components/glossario/glossario.component';

// MATERIALS
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    LoginHomeComponent,
    Home2Component,
    CriarAvaliacaoComponent,
    GlossarioComponent,
    AvaliacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
