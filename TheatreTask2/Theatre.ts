import { seat } from "./seat";


class Theatre{
    name:string;
    totalCapacity:seat[]=[];

    constructor(totalseat : number)
    {
        for(var i=1;i<=totalseat;i++)
        {
            this.totalCapacity.push(new seat(i));
        }
    }

    //checking whether given seat is free 

    checkingAvailability(seatnumber : number): boolean
    {
        return this.totalCapacity[seatnumber].isBooked;
    }


    bookingSeats(seatnumber : number):String
    {
        this.totalCapacity[seatnumber].isBooked=true;
        return "successfully booked";
    }

    cancelingSeats(seatnumber : number):String{
        if( this.totalCapacity[seatnumber].isBooked){
        this.totalCapacity[seatnumber].isBooked=false;
        return "successfully canceled";
        }
        else
        return "Already canceled";
        
        
    }

    AvaialableSeats():void{

        this.totalCapacity.forEach(e => {
            if(e.isBooked==false)
                console.log(e.seatnumber);
        })
    }


}

export {Theatre};