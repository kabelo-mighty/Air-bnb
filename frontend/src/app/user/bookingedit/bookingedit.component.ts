import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { Component, OnChanges, DoCheck, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-bookingedit',
  templateUrl: './bookingedit.component.html',
  styleUrls: ['./bookingedit.component.scss']
})
export class BookingeditComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
   
    checkin: new FormControl(''),
    checkout: new FormControl('')
  });
  checkin='';
  checkout='';
  

  date:string="";

  yyyy : any = new Date().getFullYear();
  mm : any = new Date().getMonth()+1;
  dd : any = new Date().getDate();


  submitted = false;


    constructor(private bnbservice:BnbService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder, private toast : NgToastService,private spinner: NgxSpinnerService) { }
   Books:any;

    ngOnInit(): void {

      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      this.date = this.yyyy+"-"+ this.mm + "-" +0+ this.dd;
     // console.log(this.date )
  
    let id=localStorage.getItem('booking_id');
  
    this.bnbservice.viewbook(id).subscribe((data)=>{
     this.Books= data;
     console.log(this.Books)
  
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

      let id=localStorage.getItem('booking_id');

     if(data.checkin!="" &&data.checkout!="" ){

      this.http.put('http://localhost:3000/updateDate/'+id,data, {responseType:'text'})
      .subscribe((results)=>{



  
        // this.bnbservice.viewbook(id).subscribe((data)=>{
        //   this.Books= data;
        //   console.log(this.Books)
          
       
        //   })
        
        
        this.toast.success({detail:"Success",summary:'Booking updated successfully', duration:2000})
        setTimeout(()=> this.router.navigate(['/booking']),1600)
  
        })

     }
    
      
      }

}