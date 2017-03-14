import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  displayName: string = "default";
  firstName: string = "Trevor";
  secondName: string = "Fred";

  constructor() { }

  updateName(name: string){
    this.displayName = name;
  }

  ngOnInit() {
  }

}
