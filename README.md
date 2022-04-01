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

# License
Both simple-touch.py and websocket.mjs, as well as the HTML files, contain code written by others. simple-touch.py uses syntax provided by Bare Conductive (https://www.bareconductive.com), whereas websocket.mjs contains code written by Dan Jackson (https://openlab.ncl.ac.uk/people/dan-jackson/). All other code exerpts belong to Iain Gray, Haosong Lei, Ishwarya Suresh and Nan Zhou under the MIT liscence (see below):

Copyright (c) <2022> <Iain Gray, Haosong Lei, Ishwarya Suresh and Nan Zhou>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

