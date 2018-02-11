import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.css']
})
export class RaisedButtonComponent implements OnInit {

  @Input() private label:string
  @Input() private color:string
  @Input() private disabled:string

  @Output() public clickEvent:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  click(event) {
    this.clickEvent.emit(event);
  }

}
