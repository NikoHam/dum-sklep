radio.onReceivedNumber(function (receivedNumber) {
    switch (receivedNumber) {
        case 10:
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            break;
        case 11:
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P14, 1)
            break;

        case 20:
            pins.digitalWritePin(DigitalPin.P15, 0)
            break;
        case 21:
            pins.digitalWritePin(DigitalPin.P15, 1)
            break;
        case 30:
            
            pins.digitalWritePin(DigitalPin.P16, 0)
            break;
        case 31:
            pins.digitalWritePin(DigitalPin.P16, 1)
            break;
    }
})
radio.onReceivedString(function (receivedString) {
	
})
radio.setGroup(203)
