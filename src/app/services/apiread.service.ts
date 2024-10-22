import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApireadService {
  constructor() { }

  private http = inject(HttpClient);
  API_URL = 'https://api.escuelajs.co/api/v1/products';

  lista_productos!:Product[]


  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL)
  }

  getById(id:number):Observable<Product> {
    return  this.http.get<Product>(`${this.API_URL}/${id}`);
  }

}


