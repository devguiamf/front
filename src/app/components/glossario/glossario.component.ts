import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glossario',
  templateUrl: './glossario.component.html',
  styleUrls: ['./glossario.component.scss']
})
export class GlossarioComponent implements OnInit {

  selected = 'option2';
  palavras: any
  constructor() { }

  ngOnInit(): void {

  }

}
