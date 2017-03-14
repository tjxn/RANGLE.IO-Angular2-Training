import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonText: string = "Trevor";
  aName: string = "TJ";
  title: string = 'app works!';
  parentCount: number = 0;
  onCountChange(count: number): void {
    this.parentCount = count;
  }

  itemList =[ {value: 1}, {value: 2}, {value: 3}];

}
