import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() ccCardName: string | any = '' ;
  @Input() ccCardNumber: string | any = '';
  @Input() ccCardExpire: string | any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
