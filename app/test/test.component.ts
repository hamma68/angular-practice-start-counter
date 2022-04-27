import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  val: any;
  constructor() {}

  ngOnInit() {
    this.val = 0;
  }
  increment(val) {
    this.val = Number(val) + 1;
  }
  decrement(val) {
    this.val = Number(val) - 1;
  }
}
