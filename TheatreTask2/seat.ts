
  class seat
{
    seatnumber:number;
    isBooked:boolean;

    constructor(seatnumber:number)
    {
        this.seatnumber= seatnumber;
        this.isBooked = false;
    }
}

export { seat};