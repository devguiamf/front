import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/components/login/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  login: Login = {
    email: '',
    senha: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['',[Validators.required]],
      senha: ['',[Validators.required]]
    });
  }

  realizarLogin(){
    this.route.navigate(['/home'], {skipLocationChange: true})
   }
}
