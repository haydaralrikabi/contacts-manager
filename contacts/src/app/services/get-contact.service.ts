import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetContactService {

  constructor(private http: HttpClient) { }

  getContact(id) {
    return this.http.get('/api/contacts/' + id);
  }
}
