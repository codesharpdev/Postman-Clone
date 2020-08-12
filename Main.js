const { app, BrowserWindow } = require("electron");
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 });
  win.maximize();

  // and load the index.html of the app.
  win.loadURL("http://localhost:3000/");
}
app.on("ready", createWindow);
