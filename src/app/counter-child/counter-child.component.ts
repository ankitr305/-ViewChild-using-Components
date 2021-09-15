import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  template : `
  <p>counter-child works!</p>
<h3>{{message}}</h3>
  `
})
export class CounterChildComponent implements OnInit {

  message : String = "";
  count : number =0;

  constructor() { }

  ngOnInit() {
  }

  increaseByOne(){
    this.count = this.count+1;
    this.message = "counter : "+this.count;
  }
  dercreaseByOne(){
    this.count = this.count-1;
    this.message = "counter : "+this.count;
  }
}
