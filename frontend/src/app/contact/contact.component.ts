import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public isVisible: boolean = false;
  
  constructor(private  http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){

    
    //Add the contact to the Database
    this.http.post('http://localhost:3000/message',data, {responseType:'text'})
    .subscribe((results)=>{

      if (this.isVisible) { 
        return;
      } 
      this.isVisible = true;
      setTimeout(()=> this.isVisible = false,850)

      })
    }

}
