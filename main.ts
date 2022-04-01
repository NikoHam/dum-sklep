radio.onReceivedNumber(function (receivedNumber) {
    switch (receivedNumber) {
        case 10:
            pins.servoWritePin(AnalogPin.P0, 0)
            break;
        case 11:
            pins.servoWritePin(AnalogPin.P0, 180)
            break;

        case 20:
            pins.servoWritePin(AnalogPin.P0, 0)
            break;
        case 21:
            pins.servoWritePin(AnalogPin.P0, 180)
            break;
        case 30:
            pins.servoWritePin(AnalogPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P0, 0)
            break;
        case 31:
            pins.servoWritePin(AnalogPin.P0, 180)
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P0, 1)
            break;
    }
})
radio.onReceivedString(function (receivedString) {
	
})
radio.setGroup(203)
