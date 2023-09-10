
import { environment } from '../environments/environment';

export const API_BASE_URL = environment.apiUrl;
export const API_ENDPOINTS = {
  ADDITEM: '/item/item-list',
  ALLITEM: '/item/get-item',
  // Add more endpoints as needed
};