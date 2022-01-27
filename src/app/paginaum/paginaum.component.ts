import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginaum',
  templateUrl: './paginaum.component.html',
  styleUrls: ['./paginaum.component.css']
})
export class PaginaumComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  paginaumSelecionado():void {
    this.router.navigate(['/paginaum'])
  }

}
