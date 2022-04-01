# IMPRINT: An Interactive Wall for Connecting with Refugees

This repository contains all the code to run our Imprint interactive wall.

# Overview

Developed through collaborative design sessions, we present Imprint, an interactive wall that uses the handprints of refugees to emotionalise individual refugees’ visual and aural data to raise awareness of the refugee crisis amongst members of the public, as well as encourage financial support for appropriate charitable organisations. Utilising recent advancements in technology, including electroconductive paint, we constructed a large “sudo-wall”, acting as a high-fidelity mock-up of a proposed larger installation. This wall connects to a Raspberry Pi 4 using an electroconductive sensor cap which detects when a user touches a handprint. Through this, as well as the use of projection, we suggest that ours is a system where users can feel the embodied presence of non-present actors, and connect with them on an emotional level.

# Necessary Hardware

In order to implement this code, the following hardware is needed:
- Raspberry Pi
- Bare Conductive PiCap with electroconductive sensors
- Electric Paint
- Copper Wire
- Projector
- Laptop to connect to projector

# Dependencies

This software requires several Node and Python based dependencies, listed as follows:
- Express
- Pydub
- Bare Conductive PiCap Python module
- MPR121
- WS

# Using the software

The code call all be run from the Raspberry Pi, however the localhost port must be accessed by the laptop, connected to the projector.
In order to run the code, simply run the websocket.mjs file. Then load the localhost page (link in the repository) and touch the sensor. This should activate the necessary changes on the websocket page.

