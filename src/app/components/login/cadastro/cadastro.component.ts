import { Cadastro } from './cadastro.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario!: FormGroup;

  cadastro: Cadastro = {
    name: '',
    email: '',
    password_hash: '',
    isAdmin: false
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nomeCompleto: ['',[Validators.required]],
      email: ['',[Validators.required]],
      name: ['',[Validators.required]],
      senha: ['',[Validators.required]],
      senhaC: ['',[Validators.required]],
    });
  }

  realizarLogin(){

  }

}
