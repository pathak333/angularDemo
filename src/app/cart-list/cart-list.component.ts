import { Component, OnInit } from '@angular/core';
import { GetItem } from '../interfaces/item.interfaces';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {



  storedData:any[] = []


ngOnInit(): void {
  const Data = localStorage.getItem("cartData");
  this.storedData = Data ? JSON.parse(Data) : [];
}

back(){
  window.history.back()
}



removeFromCart(item:GetItem){
  let oldData = localStorage.getItem("cartData")
  let datas:any[] = oldData != null ? JSON.parse(oldData) : []
  
  const index = datas.findIndex(e => e._id === item._id)
  console.log(index);
  if(index >= 0){
    datas.splice(index,1)
   let data:any[] = [...datas];
   localStorage.setItem("cartData",JSON.stringify(data))
   const Data = localStorage.getItem("cartData");
  this.storedData = Data ? JSON.parse(Data) : [];
  }
}

}
