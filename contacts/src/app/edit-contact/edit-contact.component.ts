import { Component, OnInit } from '@angular/core';
import { GetContactService } from '../services/get-contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  id: any;
  contact = {};

  constructor(private route: ActivatedRoute, private getContactService: GetContactService) { }
 
  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);
    this.getContactService.getContact(this.id).subscribe(data => this.contact = data[0]);
  }
}
