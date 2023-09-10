import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetItem, Item } from '../interfaces/item.interfaces';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  constructor(private itemService: ItemService) { }
  //@Input() selectedItem: Item | null = null;
   @Output() itemAdded = new EventEmitter<GetItem>();
  // @Output() clearSelection = new EventEmitter<void>();

  newItem: Item = { name: '', price: 0 };


  addItem() {
    
    this.itemService.addItemService(this.newItem).subscribe(data => {
      console.log(data);
       this.itemAdded.emit(data.data);
    });
    this.newItem = { name: '', price: 0 };
  }


  cancel() {
    // this.clearSelection.emit();
  }
}
