// This code is modified from existing code provided by Dan Jackson for the CSC8604 module project.

import express from 'express'
import http from 'http'
import path from 'path'
import { fileURLToPath } from 'url'
import { WebSocketServer } from 'ws'
import child_process from 'child_process'

//lines 12-60 constitute an import script which detects input sent from simple-touch.py

// Function to run an external process and call a function for each line of its output
function captureExternalProcess(command, parameterArray, lineHandler) {
  // Received data buffer
  let received = '';
  
  // Start the child process
  console.log('Running external process...');
  let externalProcess = child_process.spawn(command, parameterArray);
  // Handle output from the child process
  externalProcess.stderr.on('data', (data) => {
    console.log('ERROR: ' + data)
  })
  externalProcess.stdout.on('data', (data) => {

    // Add received characters to input buffer
    received = received.concat(data);
    // Split off any full lines received
    for (;;) {
      const lineEnd = received.indexOf('\n')
      if (lineEnd < 0) break;
      const line = received.slice(0, lineEnd).trim();
      received = received.slice(lineEnd + 1);
      lineHandler(line);
    }
  });
  
  // Handle child process terminating
  externalProcess.on('exit', (result) => {
    console.log('WARNING: External process exited: ' + result);
    externalProcess = null;
  });
  
  // Kill child process when we exit
  process.on('SIGINT', () => process.exit());
  process.on('SIGTERM', () => process.exit());
  process.on('exit', function() {
    if (externalProcess) {
      console.log('Stopping external process...');
      externalProcess.kill();
    }
  });  
}

// Run the external process, handle each received line
let values = 1;
captureExternalProcess('python3', ['simple-touch.py'], (line) => {
    values = line
    console.log('RECV: ' + values);
  });

// The following script creates a websocket server, which updates when it receives input from simple-touch.py

const currentFolder = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const server = http.Server(app)

// Create new web socket server.

const wss = new WebSocketServer({ server: server, path: '/ws', clientTracking: true })

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log('Received: ', message)
    ws.send('I heard: ' + message)
  })
})

app.use('/', express.static(path.join(currentFolder, '.')))

// Get request for our main projection page

app.get('/', (req, res) => {
  res.sendFile(path.join(currentFolder, '/views/websocket.html'))
})

app.get('/qrcode', (req, res) => {
  console.log('QR CODE SCANNED!')

//  broadcast('scanned')

  res.sendFile(path.join(currentFolder, 'public', '/views/3.html'))
})

// Server port to serve our projection page

server.listen(3000, () => {
  console.log('Listening at http://localhost:3000/')
})

function broadcast(message) {
    for (const ws of wss.clients) {
      ws.send(message)
    }
  }

// The following is code to constantly send updated input, pulled from the simple-touch.py code, through to the websocket.html page
let counter = 0
setInterval(() => { 
  const data = {
    values,
    counter,
    index: values
  }
  broadcast(JSON.stringify(data)) 
  counter++;
}, 250)