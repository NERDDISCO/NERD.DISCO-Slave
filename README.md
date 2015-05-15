# NERD DISCO - Slave


## Configuration

### Raspberry Pi

- Use NOOBS to install an OS: [HowTo](http://www.raspberrypi.org/help/noobs-setup/)
- Enable SSH
- Configure WIFI over the command line: [HowTo](http://www.ghacks.net/2009/04/14/connect-to-a-wireless-network-via-command-line/)
- Restart the Raspberry Pi: `sudo reboot`
- See if WIFI is working from the command line of the Raspberry Pi: `ip a` (will give you the IP of your Raspberry Pi)
- You can also use `sudo nmap -p 22 --open -sV 192.168.0.* -Pn` from your computer to scan for every device in the network that has the SSH port (22) open
- Install Node https://github.com/nathanjohnson320/node_arm
- Connect to the Raspberry Pi from your computer over SSH: `ssh pi@<ip>`

You can find a good article with getting started information [here](http://www.andrewconnell.com/blog/setup-node-js-on-raspberry-pi-2-b).  


---


### Node

- Install [PM2](https://github.com/Unitech/pm2)


---



### Fadecandy Server

- Install the server on the Raspberry Pi: [HowTo](https://learn.adafruit.com/1500-neopixel-led-curtain-with-raspberry-pi-fadecandy/fadecandy-server-setup)