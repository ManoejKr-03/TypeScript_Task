"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Theatre_1 = require("./Theatre");
var TheatreObject = new Theatre_1.Theatre(60);
//booking the seat
TheatreObject.bookingSeats(1);
TheatreObject.bookingSeats(2);
TheatreObject.bookingSeats(3);
//cancelling the seat
TheatreObject.cancelingSeats(2);
//Available seat's
TheatreObject.AvaialableSeats();
