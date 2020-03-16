import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
//action gia to button Notify me απο πάνω ακριβώς

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
 @Input() product;
 @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 
  

}

