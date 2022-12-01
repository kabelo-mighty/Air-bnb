import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BnbService {

  constructor(private http:HttpClient) { }

  baseUrlRegister = "http://localhost:3000/register"
  baseUrlLogin = "http://localhost:3000/login"
  baseUrlMessage = "http://localhost:3000/message"
  baseUrlRoom = "http://localhost:3000/rooms"
  baseUrlRoomById = "http://localhost:3000/rooms/"
  baseUrlBook= "http://localhost:3000/books"
  baseUrluser= "http://localhost:3000/currentUser/"
  baseUrlBookId = "http://localhost:3000/books/"
  baseUrlMakeBook = "http://localhost:3000/makeBooking/"
  baseUrlArchive = "http://localhost:3000/archiveBooking"
  baseUrlGetoneBook = "http://localhost:3000/viewbook/"

  baseUrlupdateDate = "http://localhost:3000/updateDate/"
  baseUrlupdateprofile = "http://localhost:3000/updateprofile"
  baseUrlremoveroom = "http://localhost:3000/removeroom"
  baseUrladdroom = "http://localhost:3000/addroom"
  baseUrlupdateroom="http://localhost:3000/updateroom/"
  baseUrlallbooks="http://localhost:3000/allbooks"
//approve booking
baseUrlbookcancel="http://localhost:3000/cancelBooking"
baseUrlapprove="http://localhost:3000/approvebooking"
  //count url for admin
  baseUrlcountB="http://localhost:3000/countbooking"
  baseUrlcountC="http://localhost:3000/countcustomer"
  baseUrlcountR="http://localhost:3000/countrooms"

 

//===================================================================
  //count for user
  baseUrlcountUserB="http://localhost:3000/countmybooking/"
  baseUrlcountUserP="http://localhost:3000/countpending/"
  baseUrlcountUserH="http://localhost:3000/counthistory/"
  baseUrlcountUserC="http://localhost:3000/countcancelbooking/"
  countmybooking(id: any){
    return this.http.get(this.baseUrlcountUserB+id);
  }
  countpending(id: any){
    return this.http.get(this.baseUrlcountUserP+id);
  }
  counthistory(id: any){
    return this.http.get(this.baseUrlcountUserH+id);
  }
  countcancelbooking(id: any){
    return this.http.get(this.baseUrlcountUserC+id);
  }

  //================================================================
  create(data: any) {
    return this.http.post(this.baseUrlRegister, data);
  }

  login(data: any){
    return this.http.post(this.baseUrlLogin, data);
  }


  message(data: any){
    return this.http.post(this.baseUrlMessage, data);
  }

  rooms(data: any){
    return this.http.get(this.baseUrlRoom, data);
  }

  book(data: any){
    return this.http.get(this.baseUrlBook, data);
  }


  currentRoom(id: any){
    return this.http.get(this.baseUrlRoomById+id);
  }
  currentUser(id: any){
    return this.http.get(this.baseUrluser+id);
  }
  currentbook(id: any){
    return this.http.get(this.baseUrlBookId+id);
  }
  books(id: any){
    return this.http.get(this.baseUrlMakeBook+id);
  }

  archiveBooking(id:any){
    return this.http.put(`${this.baseUrlArchive}/${id}`, {});
  }
  viewbook(id: any){
    return this.http.get(this.baseUrlGetoneBook+id);
  }

  updateDate(id:any,data:any){
    return this.http.put(`${this.baseUrlupdateDate}/${id}`, {data});
  }

  makeBooking(UId:any,rId:any,data:any){
    return this.http.post(this.baseUrlMakeBook, data);
  }
  //delete room

  removeroom(id:any)
  {
  
    return this.http.delete(`${this.baseUrlremoveroom}/${id}`, {});


  }
  //add room
  addroom(data: any){
    return this.http.post(this.baseUrladdroom, data);
  }
  //update room
  updateroom(id:any,data: any){
    return this.http.put(`${this.baseUrlupdateroom}/${id}`, {data});
  }
    //update profile
    updateprofile(id:any,data: any){
      return this.http.put(`${this.baseUrlupdateprofile}/${id}`, {data});
    }
  //get all bookings

  allbooks(data:any){ 
    return this.http.get(this.baseUrlallbooks, data);
    
  }
  //number of booking

  countbooking(data:any){ 
    return this.http.get(this.baseUrlcountB, data);
    
  }
  //number of customer 
  
  countcustomer(data:any){ 
    return this.http.get(this.baseUrlcountC, data);
    
  }
   //number of rooms

   countrooms(data:any){ 
    return this.http.get(this.baseUrlcountR, data);
    
  }
  //approve booking
  approvebooking(id:any){
    return this.http.put(`${this.baseUrlapprove}/${id}`, {});
  }
//cancel booking
  cancelBooking(id:any){
    return this.http.put(`${this.baseUrlbookcancel}/${id}`, {});
  }
}