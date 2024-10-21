"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Room_1 = require("./Room");
var Hotel = /** @class */ (function () {
    function Hotel() {
        this.allRooms = [];
        this.allRooms.push(new Room_1.Room(1, "Single", 200));
        this.allRooms.push(new Room_1.Room(2, "Double", 300));
        this.allRooms.push(new Room_1.Room(3, "Suite", 500));
    }
    //booking 
    Hotel.prototype.bookingRoom = function (num) {
        this.allRooms.filter(function (e) { return e.roomNumber == num; }).map(function (e) { return e.isBooked = true; }).forEach(function (e) { return console.log(e); });
    };
    return Hotel;
}());
