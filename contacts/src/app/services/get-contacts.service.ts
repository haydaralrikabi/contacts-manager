import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetContactsService {

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get('/api/contacts');
  }
}
