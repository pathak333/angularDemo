import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { GetItem, Item } from '../interfaces/item.interfaces';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(private itemService: ItemService) {
  
  }

  ngOnInit() {
    this.getAllItem();
  }

  getitemList: GetItem[] = []

  getAllItem() {
    this.itemService.getAllItem().subscribe(data => {
      console.log(data)
      this.getitemList = Object.values(data.data)
    })
  }

  itemAdded(item:GetItem){
    this.getitemList.push(item)
  }

  addToCart(item:GetItem){
    console.log("save data to local");
    
   let oldData = localStorage.getItem("cartData")
   let datas:any[] = oldData != null ? JSON.parse(oldData) : []
   
   const index = datas.findIndex(e => e._id === item._id)
   console.log(index);
   if(index === -1){
    let data:any[] = [...datas,item];
    localStorage.setItem("cartData",JSON.stringify(data))
   }
   

   
  }


}
