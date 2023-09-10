import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping_cart_app';
constructor(private router: Router){}

  navigateToCart(){
    this.router.navigate(['/item-cart'])
  }
}
