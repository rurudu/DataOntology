const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const csv = require("csvtojson");
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
        label: 'Open File...',
        click: () => {
          const {dialog} = require('electron')
          dialog.showOpenDialog({
               filters: [ { name: 'CSV', extensions: ['csv'] } ],
               properties: ['openFile']
            }, function (file) {
               if (file !== undefined) {
                  // handle file
                  csv({noheader:true, output:"csv"})
                  .fromFile(file.toString().replace("\\", "\\\\"))
                  .then(function(csvRow) {
                     rowData = []
                     if (csvRow[0].length == 1) {
                        csvRow.forEach(e => rowData.push({ont_label:"null", file_label:e[0]}))
                     } else {
                        csvRow.forEach(e => rowData.push({ont_label:e[0], file_label:e[1]}))
                     }
                     // send the file data to Init.js
                     mainWindow.webContents.send('setData', rowData)
                  })
              }
          });
        },
        accelerator: "Ctrl+O"
      },
      {
        label: 'Open Folder...'
      },
      {
        label: 'Open Workspace...'
      },
      {
        label: 'Open Recent',
        accelerator: 'Ctrl+R'
      },
      {
        type: 'separator'
      },
      {
        label: 'Save',
        accelerator: 'Ctrl+S'
      },
      {
        label: 'Save As...',
        click: () => {
         const {dialog} = require('electron')
         dialog.showSaveDialog({
            filters: [ { name: 'CSV', extensions: ['csv'] } ]
         }, function (filePath,dialog) {
            if (filePath === undefined) {
               return
            }
            exportCSVFile(filePath);
         });
        },
        accelerator: 'Ctrl+Shift+S'
      },
      {
        type: 'separator'
      },
      {
        label: 'Exit',
        click: () => {
          mainWindow.close();
       }
        
      },
    ]
  },

  {
     label: 'Edit',
     submenu: [
        {
            label: 'Undo',
            click: () => {
               mainWindow.webContents.send('undo')
            },
            accelerator: "Ctrl+Z"
        },
        {
            label: 'Redo',
            click: () => {
               mainWindow.webContents.send('redo')
            },
            accelerator: "Ctrl+Shift+Z"
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


// exports the current workspace state to a CSV file
function exportCSVFile(filePath){
   mainWindow.webContents.send('getData','');

   ipc.on('getData-reply', (event, args) => {
      writeCSV(args, filePath)
   })
}

// writes data to filepath as a CSV file
function writeCSV(data, filePath) {
   const {dialog} = require('electron')
   const createCsvWriter = require('csv-writer').createObjectCsvWriter;
   const csvWriter = createCsvWriter({
      path: filePath,
      header: ['ont_label', 'file_label']
   });

   csvWriter.writeRecords(data)
   .then(() => {
      dialog.showMessageBox({
         message: 'The file has been saved!',
         buttons: ['OK']
      });
   })
   .catch();
}

// function createNewExcelFile(filePath)
// {
//     var Excel = require('exceljs');
//     // A new Excel Work Book
//     var workbook = new Excel.Workbook();
//     // Create a sheet
//     var sheet = workbook.addWorksheet('Sheet1');
//     // A table header
//     sheet.columns = [
//         { header: 'Id', key: 'id' },
//         { header: 'Course', key: 'course' },
//     ]

//     // Add rows in the above header
//     sheet.addRow({id: 1, course: 'HTML' });
//     sheet.addRow({id: 2, course: 'Java Script'});
//     sheet.addRow({id: 3, course: 'Electron JS'});
//     sheet.addRow({id: 4, course: 'Node JS'});

//     // Save Excel on Hard Disk
//     workbook.xlsx.writeFile(filePath)
//     .then(function() {
//         // Success Message
//         alert("File Saved");
//     });
// }