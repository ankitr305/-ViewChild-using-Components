import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterChildComponent } from './../counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parent',
  template : `
  <p>counter-parent works!</p>
<h4>using viewchild</h4>
<button type="button" (click)="increase()">Increase</button>
<button type="button" (click)="decrease()">Decrease</button>
<br>
<app-counter-child></app-counter-child>`
})
export class CounterParentComponent implements OnInit {

  @ViewChild(CounterChildComponent, {static: false}) counterChildComponent :CounterChildComponent;
  increase(){
    this.counterChildComponent.increaseByOne();
  }
  decrease(){
    this.counterChildComponent.dercreaseByOne();
  }

  constructor() { }

  ngOnInit() {
  }

}
