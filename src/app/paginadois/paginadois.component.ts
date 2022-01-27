import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginadois',
  templateUrl: './paginadois.component.html',
  styleUrls: ['./paginadois.component.css']
})
export class PaginadoisComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  paginaumSelecionado():void {
    this.router.navigate(['/paginatres'])
  }

}
