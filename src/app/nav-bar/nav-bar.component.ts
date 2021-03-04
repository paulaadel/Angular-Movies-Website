import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
  changeCol = false;
  coll = false;
@HostListener("document:scroll")
changeColl(){
  if (window.pageYOffset > 0)
  {
    this.changeCol = true;
    this.coll = true;
  }
  else {
    this.changeCol = false;
    this.coll = false;

  }
}

}

