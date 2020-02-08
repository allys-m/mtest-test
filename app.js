#!/usr/bin/node
'use strict';

const express = require('express'),
      path    = require('path'),
      fileSys = require('fs');

let mainApp = {};


mainApp.start = (() => {

	//server HOST and PORT definition
	let port = process.env.port || 3000;
	let app = express()
	    .use(express.static(path.join(__dirname)));

	app.get('/', (req, res) => {
		res.send("<h1> HELLO FROM GIT </h1>");
	});

	app.listen(port, () => {

		console.log(`Server listening on http://${port}`);
	});

	//  '192.168.43.76'
})();
