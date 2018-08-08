const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9999 }) // wss = eb socket server

const users = []

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

// The server only does two things, add a user or add a message.
wss.on('connection', (ws) => {
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message) // Parse the message into data variable.
    switch (data.type) {
      // This case adds a user
      case 'ADD_USER': {
        index = users.length
        users.push({name: data.name, id: index + 1})
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        //Syntax for broadcast: broadcast({type:<some-type>, <some-object>}, ws)
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws) // ws passes in the web socket instance.
        break // must break the connection to the socket.
      }
      // This case adds a message
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break
      // If niether of the case are met, the switch breaks out.
      default:
        break
    }
  })
  ws.on('close', () => {
    users.splice(index, 1) // This removes the current user from the users list.
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
})

/*
  - We're going to use the native web socket object in the browser.
  The Web Socket library is widely supported.
  We're also going to use WS Web Socket library on the node.js server.

  - if (client.readyState === WebSocket.OPEN && client !== ws)
  This checks to see of the web socket is open and that the client isn't
  the web socket.

  - Sending data with Web Sockets
  To send data with the Web Socket object, three things need to be done,
  You have to both .send(), broadcast() and then break the connection.

  - As soon as the client connects, the application looks for the
  'ADD_USER' or 'ADD_MESSAGE' event.

  - When the client establishes a connection to the server, 'ADD_USER'
  is sent to the server with the user's name.
  - The 'push' method is then called and appends the user name to the
  list of usernames.
  - A broadcast is then issued to alert all connectd clients of the event
  (Everyone connected to the server will get that message).
  - On the connection close, "ws.on('close,()=>')", the user is removed
  from the list, and the broadcast is sent out to alert all connected
  clients of the change in the users list.
  - On the client side, we now have to initialize the web socket object
  and send 'ADD_USER' event when connecting the client.
  - The data format for the passed in object's "type" property is a
  string becasue the server isn't able to read anything from the
  constants folder. This is because the cline t and server are completely
  seperated.
*/

/* TO START THE APP RUN:
    node app.js
*/
