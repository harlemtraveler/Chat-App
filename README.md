# React Chat Application

## A Basic Cat App using ReactJS and a basic JS Server
************************************
## Steps to Run the Application

### Start the Backend Server

First we need to install any required dependencies.

In Terminal, navigate to the root of the application (wherever you've stored the repo):

```bash
cd Chat-App
```

Update using the npm package manager:

```bash
npm install
```

### Start the Backend Server

Now, we need to start up the server so new users and their input can be recorded and served to other users.

Still in the root of the application

Still in the root of the application, you'll find a directory called _server_. Within this directory, is a file called _app.js_ This is the application's Backend. Navigate to this directory and run the file using the node command.

```bash
cd server
node app.js
```

You should notice that your cursor in the Terminal window has moved to a new blank line and blinking. This is good. It is a sign that your server is up and running on localhost (using port 9999 by default).

### Start the App's Frontend

Next, open a new Terminal window. From the root of the application, you sill see a directory called _src_. This is the application's Frontend.
Change directories into the _src_ folder and start frontend up using _npm_.

```bash
cd src
npm start
```
### The app is now up and running!

From here, you can use the app by simply opening a browser window/tab and visiting [this link](http://localhost:3000 "Chat App").

The server will generate a random username for you and any other user that logs on.

To add another user to the chatroom, just open another bowser [window/tab](http://localhost:3000 "Chat App").

Any text that has been submitted will be visible to the users that are logged in at the time (if you sent a message and the other user logs in afterwards, the other user will not be able to see it).

_Whatever questions, recommendations, or input you have, please do not hesitate to reach out!_
