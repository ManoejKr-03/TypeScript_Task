import { Room } from "./Room";


class Hotel{

     allRooms:Room[]=[];

    constructor()
    {
        this.allRooms.push(new Room(1, "Single", 200));
        this.allRooms.push(new Room(2, "Double", 300));
        this.allRooms.push(new Room(3, "Suite", 500));
        
    }

    //booking 
      bookingRoom(num:number){

        this.allRooms.filter(e => e.roomNumber==num).map(e => e.isBooked=true).forEach(e=> console.log(e));
        
      

    }

    


    
}