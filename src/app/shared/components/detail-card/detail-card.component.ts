import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.sass']
})
export class DetailCardComponent{

  constructor() { }
  @Input() header: string;
  @Input() cartItems: Array<any>;
  @Output() removeCardEvent = new EventEmitter();

  // Triggers the removeItem event to the parent component
  public remove(index): void {
    this.removeCardEvent.emit(index);
  }

}
