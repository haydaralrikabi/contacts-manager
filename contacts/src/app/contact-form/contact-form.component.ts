import { Component, OnInit } from '@angular/core';
import { GetContactService } from '../services/get-contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  id: any;
  contact = {};

  constructor(private route: ActivatedRoute, private getContactService: GetContactService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);
    
    // update is required
    if (this.id) 
      this.getContactService.getContact(this.id).subscribe(data => this.contact = data[0]);
    
    // create a new contact is required
    else this.contact = { 
      _id: '',
      first_name: '',
      last_name: '',
      phone: '',
      address: ''
    };
  }

}
