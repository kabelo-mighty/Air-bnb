import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  info:any;
  inf=[];
  q:any;
  constructor(private bnbService:BnbService,private router:Router) { }

  ngOnInit(): void {

   
    this.bnbService.contacts(this.info).subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;

      console.log(res)
 
  
     })



  }

}
