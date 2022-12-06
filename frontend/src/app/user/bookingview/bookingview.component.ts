
import { BnbService } from 'src/app/service/bnb.service';
import { Component, OnChanges, DoCheck, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-bookingview',
  templateUrl: './bookingview.component.html',
  styleUrls: ['./bookingview.component.scss']
})
export class BookingviewComponent implements OnInit {

  Books:any;
 
    constructor(private bnbservice:BnbService,private spinner: NgxSpinnerService) { }
  
    ngOnInit(): void {
      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
    let id=localStorage.getItem('booking_id');
  
    this.bnbservice.viewbook(id).subscribe((data)=>{
     this.Books= data;
     console.log(this.Books)
  
     })
    }
  


}



