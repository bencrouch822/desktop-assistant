const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
	let win = new BrowserWindow({
		width:900,
		height:800,
		resizable: false
	})
	win.setMenu(null)
	win.setTitle("Time Manager")
	//win.openDevTools();
	win.loadURL(`file://${__dirname}/index.html`)
})
