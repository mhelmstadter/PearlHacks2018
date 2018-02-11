import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input() private id:string
  @Input() private placeholder:string
  @Input() private icon:string
  @Input() private textboxValue:string
  
  @Output() textboxChange:EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
  }

}
