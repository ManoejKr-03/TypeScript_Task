"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(roomNumber, roomType, roomPerNight) {
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.roomPerNight = roomPerNight;
        this.isBooked = false;
    }
    return Room;
}());
exports.Room = Room;
