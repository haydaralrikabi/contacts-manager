import { Component, OnInit } from '@angular/core';
import { GetContactsService } from '../services/get-contacts.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

  contacts: any;
   
  constructor(private getContactsService: GetContactsService) { 
    this.getContactsService.getContacts().subscribe(res => this.contacts = res);
  }

  ngOnInit() {
  }

}
