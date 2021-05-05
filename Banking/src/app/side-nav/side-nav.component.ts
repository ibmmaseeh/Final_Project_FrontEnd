import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  ImagePath: string;
  constructor() {
    this.ImagePath = '/assets/header-bg.jpg'
   }

  ngOnInit(): void {
  }

}
