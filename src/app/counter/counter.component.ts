import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Output() countChange = new EventEmitter<number>();

  count: number = 0;
  constructor() { }

  increment(): void{
    this.count++;
    this.countChange.emit(this.count);
  }

  ngOnInit() {
  }

}
