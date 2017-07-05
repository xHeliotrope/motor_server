const Raspi = require("raspi-io")
const five = require("johnny-five")
const board = new five.Board({ io: new Raspi() })
const express = require("express")

var motor

board.on('ready', () => {
	motor = new five.Motor({
	    pin: 26 
	})

	board.repl.inject({
	    board: board, 
	    motor: motor
	})

//	motor.on("start", () => {
//		console.log("start ", Date.now());
//
//		board.wait(2000, () => {
//			motor.stop()
//		})
//	})
//
//	motor.on("stop", () => {
//		console.log("stop ", Date.now());
//	})
//
//	motor.start()
//
})

