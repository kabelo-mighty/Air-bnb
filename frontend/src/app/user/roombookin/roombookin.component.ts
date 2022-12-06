import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BnbService } from 'src/app/service/bnb.service';
import { Component, OnChanges, DoCheck, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-roombookin',
  templateUrl: './roombookin.component.html',
  styleUrls: ['./roombookin.component.scss']
})
export class RoombookinComponent implements OnInit {

  form: FormGroup = new FormGroup({
   
    checkin: new FormControl(''),
    checkout: new FormControl('')
  });


  checkin='';
  checkout='';
  date:string="";
  Books:any;
  yyyy : any = new Date().getFullYear();
  mm : any = new Date().getMonth()+1;
  dd : any = new Date().getDate();
Rooms:any;


submitted = false;

booking={
room_id:'',
user_id:'',
checkin:'',
checkout:''
}


constructor(private bnbservice:BnbService,private http:HttpClient,private router:Router,private spinner: NgxSpinnerService,private formBuilder: FormBuilder, private toast : NgToastService) {

 }

  ngOnInit(): void {
    
 
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000); 


  let id=localStorage.getItem('room_id');



  this.date = this.yyyy+"-"+ this.mm + "-" +0+this.dd;
  console.log(this.dd)

  

  this.bnbservice.currentRoom(id).subscribe((data)=>{
   this.Rooms= data;
   console.log(this.Rooms)

   })




   this.form = this.formBuilder.group(
    {
   
      checkin: ['', [Validators.required]],
      checkout: [
        '',
        [
          Validators.required
        ]
      ],
      
    
    },
    
  );


  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  

  ngDoCheck() {
    console.log('Running change detection ', Date.now());
  }
  
  onSubmit(data:any){
    this.submitted = true;
 let rId= this.booking.room_id = JSON.stringify(localStorage.getItem('room_id'));
 let UId= this.booking.room_id = JSON.stringify(localStorage.getItem('user_id'));




    var bookroom={
      "user_id":localStorage.getItem('user_id'),
      "room_id":localStorage.getItem('room_id'),
      "checkin":data.checkin,
      "checkout":data.checkout
    }



    this.http.post('http://localhost:3000/makeBooking',bookroom,{responseType:'text'})
    .subscribe((results)=>{
  

  this.toast.success({detail:"Success",summary:'Booking was successfully', duration:2000})
        setTimeout(()=> this.router.navigate(['/booking']),1600)

      })
    
    }
}
