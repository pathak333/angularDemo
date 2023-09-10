import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {API_ENDPOINTS} from '../constants/api.constants'
import { Item } from './interfaces/item.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }


  addItemService(data:Item):Observable<any>{    
    return this.http.post(API_ENDPOINTS.ADDITEM,data)
  }

   getAllItem():Observable<any>{
    return this.http.get(API_ENDPOINTS.ALLITEM)
  }

}
