import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http : HttpClient) { }

  getItems() : Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/expenses").pipe(map(response => {
      console.log(response);
      return response;
    }));
  }

  createItem(item : Item) : Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/expenses", item).pipe(
      switchMap(() => {
        return this.http.get("http://localhost:8080/api/v1/expenses").pipe(map(response => {
          console.log(response);
          return response;
        }));
     }
    ))
  }

  deleteItem(id : number) : Observable<any>{
    return this.http.delete(`http://localhost:8080/api/v1/expenses/${id}`).pipe(
      switchMap(() => {
        return this.http.get("http://localhost:8080/api/v1/expenses").pipe(map(response => {
          console.log(response);
          return response;
        }));
     }
    ))
  }

}
