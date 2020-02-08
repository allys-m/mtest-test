#!/usr/bin/node
'use strict';

const express = require('express'),
      path    = require('path'),
      fileSys = require('fs'),
      rooter  = require('./rooter.js');

let mainApp = {};


mainApp.start = ((port) => {

	//server HOST and PORT definition
	this.port = port;
	let app = express()
	    .use(express.static(path.join(__dirname)));

	app.get('/', (req, res) => {
		rooter.home(req, res);
	});

	app.listen(port, () => {

		console.log(`Server listening on http://${port}`);
	});

	//  '192.168.43.76'
})(3000);