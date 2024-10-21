"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theatre = void 0;
var seat_1 = require("./seat");
var Theatre = /** @class */ (function () {
    function Theatre(totalseat) {
        this.totalCapacity = [];
        for (var i = 1; i <= totalseat; i++) {
            this.totalCapacity.push(new seat_1.seat(i));
        }
    }
    //checking whether given seat is free 
    Theatre.prototype.checkingAvailability = function (seatnumber) {
        return this.totalCapacity[seatnumber].isBooked;
    };
    Theatre.prototype.bookingSeats = function (seatnumber) {
        this.totalCapacity[seatnumber].isBooked = true;
        return "successfully booked";
    };
    Theatre.prototype.cancelingSeats = function (seatnumber) {
        if (this.totalCapacity[seatnumber].isBooked) {
            this.totalCapacity[seatnumber].isBooked = false;
            return "successfully canceled";
        }
        else
            return "Already canceled";
    };
    Theatre.prototype.AvaialableSeats = function () {
        this.totalCapacity.forEach(function (e) {
            if (e.isBooked == false)
                console.log(e.seatnumber);
        });
    };
    return Theatre;
}());
exports.Theatre = Theatre;
