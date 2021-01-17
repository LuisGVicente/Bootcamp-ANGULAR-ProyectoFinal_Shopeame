import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() products;
  @Input() nombre: string;
  @Input() precio: number;
  @Input() descripcion: string;
  @Input() imagen: string;
  @Input() rating: number;
  constructor() { }

  ngOnInit(): void {
  }

}
