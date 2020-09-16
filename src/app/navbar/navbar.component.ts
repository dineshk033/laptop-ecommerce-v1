import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categories:any;
  selectedCatg= ''
  display=false;
  items: MegaMenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.categories=[
      {
        label:'All',
        value:''
      },
      {
        label:'Laptop',
        value:'laptop'
      }
    ];
    this.items = [
      {
        label:'Laptop'
      },
      {
        label:'Accessories'
      },
      {
        label:'AMC Service'
      }
    ]
  }

}
