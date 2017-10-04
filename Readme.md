# Motor Server

#### Requirements:
- Raspberry Pi 3
- Pimoroni Automation Hat
- Wires
- Breadboard
- 5V DC Motor
- Soldering Iron (optional)

## Current Circuit
I'm using the pi 3, although the diagram shows one of the pi 2 versions. It also doesn't show the Automation Hat. The important part is that(for now), I'm using the Outputs on the Hat, which are connected to the pulse width modulation(PWM) gpio pins. On the pi 3, I think its the physical pin 12. 

I might switch to the relays and I might add a transistor to control the motor in the future.

![current diagram](https://raw.githubusercontent.com/xHeliotrope/motor_server/assets/assets/basic_motor_on_rpi_pwm.png)
