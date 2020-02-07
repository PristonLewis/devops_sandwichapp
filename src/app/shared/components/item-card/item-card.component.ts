import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent {

  constructor() { }
  @Input() item: Array<any>;
  @Output() selectedItemEvent = new EventEmitter();

  // triggers a addcart event to the parent component
  public addToCart(item: object): void {
    this.selectedItemEvent.emit(item);
  }

}
