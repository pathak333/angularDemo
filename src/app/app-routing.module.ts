import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { CartListComponent } from './cart-list/cart-list.component';

const routes: Routes = [

  { path: 'item-List', component: ItemListComponent },
  { path: 'item-cart', component: CartListComponent },
  { path: '', redirectTo: '/item-List', pathMatch: 'full' }, // Default route

]; // here we define all Our routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
