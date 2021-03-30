import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travels } from '../travels';
import { CartService } from '../cart.service';

@Component({
  selector: 'travels-page',
  templateUrl: './travels-page.component.html',
  styleUrls: ['./travels-page.component.sass']
})
export class TravelsPageComponent implements OnInit {
	offer;
	travels = travels;
  constructor(private route: ActivatedRoute,private cartService: CartService) { }

addToCart(offer) {
   window.alert('Your offer has been added to the cart!');
   this.cartService.addToCart(offer);
 }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
   this.offer = travels[+params.get('offerId')];
  });

}
}
