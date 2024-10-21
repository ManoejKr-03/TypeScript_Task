

export class Room
{
    roomNumber:number;
    roomType:string;
    roomPerNight:number;
    isBooked:boolean;

    constructor(roomNumber:number,roomType:string,roomPerNight:number)
    {
        this.roomNumber=roomNumber;
        this.roomType=roomType;
        this.roomPerNight = roomPerNight;
        this.isBooked=false;
    }

}