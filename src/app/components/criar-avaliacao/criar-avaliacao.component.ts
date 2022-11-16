import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-avaliacao',
  templateUrl: './criar-avaliacao.component.html',
  styleUrls: ['./criar-avaliacao.component.scss']
})
export class CriarAvaliacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvar(){
    this.router.navigate(['avaliacao'])
  }
}
