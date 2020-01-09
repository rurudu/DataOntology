const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu
const fs = electron.fs 

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

require("update-electron-app")({
  repo: "kitze/react-electron-example",
  updateInterval: "1 hour"
});

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1280, height: 720, webPreferences: { nodeIntegration: true }});
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New File...'
      },
      {
        label: 'New Window...'
      },
      {
        type: 'separator'
      },
      {
        label: 'Open File...', // TODO implement
        click: () => {
          const {dialog} = require('electron')
          dialog.showOpenDialog({
              properties: ['openFile', 'multiSelections']
            }, function (files) {
              if (files !== undefined) {
                  // handle files
              }
          });
        }
      },
      {
        label: 'Open Folder...'
      },
      {
        label: 'Open Workspace...'
      },
      {
        label: 'Open Recent'
      },
      {
        type: 'separator'
      },
      {
        label: 'Save'
      },
      {
        label: 'Save As...'
      },
      {
        type: 'separator'
      },
      {
        label: 'Exit'
      },
    ]
  },

  {
     label: 'Edit',
     submenu: [
        {
           role: 'undo'
        },
        {
           role: 'redo'
        },
        {
           type: 'separator'
        },
        {
           role: 'cut'
        },
        {
           role: 'copy'
        },
        {
           role: 'paste'
        }
     ]
  },
  
  {
     label: 'View',
     submenu: [
        {
           role: 'reload'
        },
        {
           role: 'toggledevtools'
        },
        {
           type: 'separator'
        },
        {
           role: 'resetzoom'
        },
        {
           role: 'zoomin'
        },
        {
           role: 'zoomout'
        },
        {
           type: 'separator'
        },
        {
           role: 'togglefullscreen'
        }
     ]
  },
  
  {
     role: 'window',
     submenu: [
        {
           role: 'minimize'
        },
        {
           role: 'close'
        }
     ]
  },
  
  {
     role: 'help',
     submenu: [
        {
           label: 'Learn More'
        }
     ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

app.on("ready", createWindow)


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});