"use strict";
const Raspi = require("raspi-io")
const five = require("johnny-five")
const board = new five.Board({ io: new Raspi() })
require("babel-core").transform("code", {});

var motor = null;

class MotorManager {
    
    constructor(motorPin) {
	if(motorPin){
	    this.motorPin = motorPin;
	}
	else{
	    this.motorPin = 26
	}
    }

    getMotor(){
	if(!motor) {
	    motor = new five.Motor({
	        pin: this.motorPin
	});
	}
	return motor;
    }

    repl() {
	board.on('ready', () => {
	    motor = this.getMotor();
	    return board.repl.inject({
		board: board,
		motor: motor
	    });
	});
    }
}

exports.default = MotorManager;
