import { LoginService } from './../login.service';
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
    private route: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['',[Validators.required]],
      senha: ['',[Validators.required]]
    });
  }
   onSubmit(){
    this.loginService.login(this.login).subscribe(
    (res) =>{console.log(res);})

  }
}
