const mysql = require('mysql2');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bnbdb"
});


//Register fuction 

const createUser = (req, res) => {
    
  const {firstname,lastname,email,password,confirm} = req.body; 

   const hashed_password = md5(password.toString())
  

  if(firstname && lastname && email && password && confirm){



    con.query('SELECT * FROM user WHERE email =?',[email],function (error, results, fields){

      if(results.length > 0)
      { 
          res.send('Email exists already')
      }
      else{

        var user={

          "firstname":firstname,
          "lastname":lastname,
          "email":email,          
          "password":hashed_password
       
      }
       con.query('INSERT INTO user SET ?',[user], function (error, results, fields) 
        {
             if(error){
              res.send('data not sent')

             }else{
              res.send('Account created succesfully!')
             }

        })


        
      }
  
    });

  }
  
};



const login = (req, res) => {


    let { email, password } = req.body; 
   
  const hashed_password = md5(password.toString())
  con.query('select * from user where email = ? AND password = ?' ,[email,hashed_password],(error, results)=> {
    //console.log(results.length)
    if (results.length > 0) {
    
    //res.send('success')
       let token = jwt.sign({
         data: results 
        }, 'sgdfiuejsncksdncoihfoiwefwkwoidwnw',{
        algorithm: 'HS256',
        expiresIn:120
       })

       //console.log(token)
       res.status(200).json({token: token})
      // res.send({ status: 1, data: results, token: token });
  
    }else{
      res.send('invalid login details')
    }
    });


}



//mesage fuction 
const message = (req, res) => {
    
  const {fullname,email,message} = req.body; 
  if(fullname && email && message){

        var contact={

          "fullname":fullname,
          "email":email,
          "message":message }
       con.query('INSERT INTO contact SET ?',[contact], function (error, results, fields) 
        {
             if(error){
              res.send('data not sent')

             }else{
              res.send('Thanks for contacting us!.')
             }

        })


        
      }}
      //view rooms

      const rooms = (req, res) => {
    
    
      {
            var stat=0;
              
             con.query('select * from room where status=? ',[stat], function (error, results, fields) 
              {
                   if(error){
                    res.send('data not found')
      
                   }else{
                    res.send(results)
                   }
      
              })
      
      
              
            }}


            //view rooms by id

            const currentrRoom = (req, res) => {
    
    
              {
              const id=parseInt(req.params.id)
                      
                     con.query('select * from room where room_id= ?',[id], function (error, results, fields) 
                      {
                           if(error){
                            res.send('data not found')
              
                           }else{
                            res.send(results)
                           }
              
                      })
              
              
                      
                    }}

                    //get user by id
                    const currentUser = (req, res) => {
    
    
                      {
                      const id=parseInt(req.params.id)
                              
                             con.query('select * from user where user_id= ?',[id], function (error, results, fields) 
                              {
                                   if(error){
                                    res.send('data not found')
                      
                                   }else{
                                    res.send(results)
                                   }
                      
                              })
                      
                      
                              
                            }}
                  //archive booking


                  const archiveBooking = (req, res) => {
    
                  
                    {

                 
                    const id=parseInt(req.params.id)
                    
                            
                           con.query('Update booking SET archive=1 where booking_id =?',[id], function (error, results, fields) 
                            {
                                 if(error){
                                  res.send('data archived.')
                    
                                 }else{
                                  res.send(results)
                                 }
                    
                            })
                    
                    
                            
                          }}
                    //approve booking
                    const approvebooking = (req, res) => {
    
                  
                      {
  
                   
                      const id=parseInt(req.params.id)
                      const stat=1;
                              
                             con.query('UPDATE booking SET approved =? where booking_id =?',[stat,id], function (error, results, fields) 
                              {
                                   if(error){
                                    res.send('data approved.')
                      
                                   }else{
                                    res.send(results)
                                   }
                      
                              })
                      
                      
                              
                            }}



                    //make booking 

                    const makeBooking = (req, res) => {
    
                      const {user_id,room_id,checkin,checkout} = req.body; 
                      if(checkin && checkout){
                    
                            var bookvalue={
                    
                              "user_id":user_id,
                              "room_id":room_id,
                              "checkin":checkin, 
                              "checkout":checkout
                            }


                           con.query('INSERT INTO booking SET ?',[bookvalue], function (error, results, fields) 
                            {
                                 if(error){
                                  res.send('data not sent')
                    
                                 }else{
                                  res.send('Booking successfully done.')
                                 }
                    
                            })
                    
                    
                            
                          }}






                    //get all bookings

                    const books = (req, res) => {
    
    
                      {
                            var stat=0;
                              
                             con.query('select  * from booking,room where booking.room_id=room.room_id and archive=?',[stat], function (error, results, fields) 
                              {
                                   if(error){
                                    res.send('data not found')
                      
                                   }else{
                                    res.send(results)
                                   }
                      
                              })
                      
                      
                              
                            }}
                            // booking and customer


                            const allbooks = (req, res) => {
    
    
                              {
                                    var stat=0;
                                      
                                     con.query('SELECT * FROM booking,room,user WHERE booking.user_id=user.user_id AND booking.room_id=room.room_id and archive=?',[stat], function (error, results, fields) 
                                      {
                                           if(error){
                                            res.send('data not found')
                              
                                           }else{
                                            res.send(results)
                                           }
                              
                                      })
                              
                              
                                      
                                    }}


                            //get booking by user id

            const currentbook = (req, res) => {
    
    
              {
              const id=parseInt(req.params.id)
                      
                     con.query('select * from booking,room  where booking.room_id=room.room_id and booking.archive=0 and user_id= ?',[id], function (error, results, fields) 
                      {
                           if(error){
                            res.send('data not found')
              
                           }else{
                            res.send(results)
                           }
              
                      })
              
              
                      
                    }}
                    //get booking by booking id
                    const viewbook = (req, res) => {
    
    
                      {
                      const id=parseInt(req.params.id)
                              
                             con.query('select * from booking,room where room.room_id=booking.room_id and booking.booking_id= ?',[id], function (error, results, fields) 
                              {
                                   if(error){
                                    res.send('data not found')
                      
                                   }else{
                                    res.send(results)
                                   }
                      
                              })
                      
                      
                              
                            }}
                //update bookings updateDate
                const updateDate= (req, res) => {


                  const id=parseInt(req.params.id)
                  const {checkin,checkout} = req.body; 
                  var booking={

                    "checkin":checkin,
                    "checkout":checkout
                  
                 
                }
                 con.query('UPDATE booking SET ? WHERE booking_id= ?',[booking,id], function (error, results, fields) 
                  {
                       if(error){
                        res.send('data not sent')
          
                       }else{
                        res.send(' booking Updated succesfully!')
                       }
          
                  })
                }

//delete room

const removeroom = (req, res) => {
    
    
  {
  const id=parseInt(req.params.id)
          
         con.query('DELETE from room where room_id= ?',[id], function (error, results, fields) 
          {
               if(error){
                res.send('not deleted')
  
               }else{
                res.send(results)
               }
  
          })
  
  
          
        }}

        //add room
        const addroom = (req, res) => {
    
          const {title,description,img_url,price} = req.body; 
          if(title && description && img_url && price){

            var roominfo={
    
              "title":title,
              "price":price,
              "description":description,
              "img_url":img_url
              
             }
           con.query('INSERT INTO room SET ?',[roominfo], function (error, results, fields) 
            {
              if(error){
                res.send('data not sent')
  
               }else{
                res.send(results)
               }
            })
    
    
            
          }}
          //update profile

          const updateprofile= (req, res) => {


            const id=parseInt(req.params.id)
            const {firstname,lastname,email} = req.body; 
            var profilevalue={

             "firstname":firstname,
             "lastname":lastname,
             "email":email
           
          }
           con.query('UPDATE User SET ? WHERE user_id= ?',[profilevalue,id], function (error, results, fields) 
            {
                 if(error){
                  res.send('data not sent')
    
                 }else{
                  res.send(' Profile Updated succesfully!')
                 }
    
            })
          }
          //
          const updateroom= (req, res) => {


            const id=parseInt(req.params.id)
            const {title,description,img_url,price} = req.body; 
            var roomvalue={

             "title":title,
             "description":description,
             "img_url":img_url,
              "price":price
           
          }
           con.query('UPDATE Room SET ? WHERE room_id= ?',[roomvalue,id], function (error, results, fields) 
            {
                 if(error){
                  res.send('data not sent')
    
                 }else{
                  res.send(' booking Updated succesfully!')
                 }
    
            })
          }
      //count number of booking    
      const countbooking = (req, res) => {
    
    
        {
              var stat=0;
                
               con.query('select count(*) as countbooking from booking',[], function (error, results, fields) 
                {
                     if(error){
                      res.send('data not found')
        
                     }else{
                      res.send(results)
                     }
        
                })
        
        
                
              }}   
      //count number of customer
      const countcustomer = (req, res) => {
    
    
        {
              var stat=0;
                
               con.query('select count(*) as countcustomer from user where user_id > 3',[], function (error, results, fields) 
                {
                     if(error){
                      res.send('data not found')
        
                     }else{
                      res.send(results)
                     }
        
                })
        
        
                
              }} 
      //count number of room
      const countrooms = (req, res) => {
    
    
        {
              var stat=0;
                
               con.query('select count(*) as countroom from room',[], function (error, results, fields) 
                {
                     if(error){
                      res.send('data not found')
        
                     }else{
                      res.send(results)
                     }
        
                })
        
        
                
              }} 
//============================================================================
//count my booking


const countmybooking = (req, res) => {
  const id=parseInt(req.params.id)
    
  {
      
          
         con.query('select count(*) as countmybooking from booking where archive=0 and  user_id = ?',[id], function (error, results, fields) 
          {
               if(error){
                res.send('data not found')
  
               }else{
                res.send(results)
               }
  
          })
  
  
          
        }} 
        //count pending bookings
        const countpending = (req, res) => {
          const id=parseInt(req.params.id)
            
          {
              
                  
                 con.query('select count(*) as countpending from booking where approved=0 and archive=0 and user_id = ?',[id], function (error, results, fields) 
                  {
                       if(error){
                        res.send('data not found')
          
                       }else{
                        res.send(results)
                       }
          
                  })
          
          
                  
                }} 
                   //count history bookings
        const counthistory = (req, res) => {
          const id=parseInt(req.params.id)
            
          {
              
                  
                 con.query('select count(*) as counthistory from booking where approved=1 and user_id = ?',[id], function (error, results, fields) 
                  {
                       if(error){
                        res.send('data not found')
          
                       }else{
                        res.send(results)
                       }
          
                  })
          
          
                  
                }} 

                const countcancelbooking = (req, res) => {
                  const id=parseInt(req.params.id)
                    
                  {
                      
                          
                         con.query('select count(*) as countcancelbooking from booking where approved=2 and user_id = ?',[id], function (error, results, fields) 
                          {
                               if(error){
                                res.send('data not found')
                  
                               }else{
                                res.send(results)
                               }
                  
                          })
                  
                  
                          
                        }} 
                
//============================================================================
                    //cancel booking
                    const cancelBooking = (req, res) => {
                  
                      {
  
                   
                      const id=parseInt(req.params.id)
                      const stat=2;
                              
                             con.query('UPDATE booking SET approved =? where booking_id =?',[stat,id], function (error, results, fields) 
                              {
                                   if(error){
                                    res.send('data approved.')
                      
                                   }else{
                                    res.send(results)
                                   }
                      
                              })
                      
                      
                              
                            }}


module.exports = {
 
  createUser,
  login,
  message,
  rooms,
  currentrRoom,
  books,
  currentbook,
  makeBooking,
  archiveBooking,
  viewbook,
  updateDate,removeroom,addroom,updateroom,allbooks,countbooking,countcustomer,countrooms,approvebooking,cancelBooking,updateprofile,currentUser,
  countmybooking,countpending,counthistory,countcancelbooking
  
}    