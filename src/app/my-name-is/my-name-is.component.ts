import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-name-is',
  templateUrl: './my-name-is.component.html',
  styleUrls: ['./my-name-is.component.css']
})
export class MyNameIsComponent implements OnInit {
  public clicks: number = 0;
  constructor() { 
  }

  ngOnInit() {
  }

  increment(){
    this.clicks++;
  }

}
