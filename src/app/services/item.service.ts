import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private _url: string;

  get url(): string {
    return this._url;
  }

  constructor(private http: HttpClient) {
    this._url = `${environment.backendUrl}/items/`
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this._url);
  }

  addItem(item: Item) {
    return this.http.post(this._url, item);
  }


  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(this._url + id);
  }

  updateItem(id: string, value: Item): Observable<any> {
    return this.http.put<void>(this._url + id, value);
  }
}
