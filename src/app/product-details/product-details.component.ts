import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//εδω ουσιαστικά ο activated router κάνει το routing

import { products } from '../products';
//edo eisagei apo to Products 


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {
  product;
  //edo toy leo ti na mou dosei

  constructor(
    private route: ActivatedRoute,
  ) { }
//o kataskevastis ftiaxnei to route me to ActivatedRoute

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
    //kai edo me thn arxikopoihsh auths tis diadromis fernei to product, oxi sketo, alla me tis parametrous tou
  });
}

}
